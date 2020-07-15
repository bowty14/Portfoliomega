import React from 'react';
import NewProjectForm from './NewProjectForm';
import ProjectList from './ProjectList';
import EditProject from './EditProject';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import { withFirestore, isLoaded } from 'react-redux-firebase';

class ProjectControl extends React.Component {

  construstro(props) {
    super(props);
    this.state = {
      selectedProject: null,
      editing: false,
      formVisibleOnPage: false
    }
  };

  handleEditingProjectInList = () => {
    this.setState({
      editing: false,
      selectedProject: null
    });
  }

  handleClick = ()=> {
    if (this.state.selectedProject != null) {
      this.setState({
        selectedProject: null,
        editing: false
      });
    } else {
      this.setState(prevState => ({ formVisibleOnPage: !prevState.formVisibleOnPage })); 
    }
  }

  handleAddingNewProject = ()=> {
    this.setState({ formVisibleOnPage: !this.state.formVisibleOnPage });
  }

  handleChangingSelectedProject = (id) => {
    this.props.firestore.get({ collection: 'projects', doc: id }).then((project) => {
      const firestoreProject = {
        projectName: project.get('projectName'),
        authors: project.get('authors'),
        description: project.get('description'),
        repoUrl: project.get('repoUrl'),
        deployedUrl: project.get('deployedUrl'),
        diagram: project.get('diagram'),
        id: project.id
      }
      this.setState({ selectedProject: firestoreProject });
    });
  }

  handleEditClick = () => {
    this.setState({ editing: true });
  }

  handleDeletingProject = (id) => {
    this.props.firestore.delete({ collection: 'projects', doc: id});
    this.setState({ selectedProject: null });
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    const auth = this.props.firebase.auth();

    if (!isLoaded(auth)) {
      return (
        <React.Fragment>
          <h4>Loading...</h4>
        </React.Fragment>
      )
    }
    if ((isLoaded(auth)) && (auth.currentUser == null)) {
      return (
        <React.Fragment>
          <h4>You must be signed in to access your portfolio.</h4>
        </React.Fragment>
      )
    }
    if ((isLoaded(auth)) && (auth.currentUser != null)) {
      
      if (this.state.editing) {
        currentlyVisibleState = <EditProject project={this.state.selectedProject} onEditProject={this.handleEditingProjectInList} />
        buttonText = 'Return to Portfolio';
      } else if (this.state.formVisibleOnPage) {
        currentlyVisibleState = <NewProjectForm auth={this.props.firesbase.auth()} onNewProjectCreation={this.handleAddingNewProject} />;
        buttonText = 'Return to Portfolio';
      } else {
        currentlyVisibleState = <ProjectList onProjectSelection={this.handleChangingSelectedProject} />;
        buttonText = 'Add Project';
      }
      return (
        <React.Fragment>
          {currentlyVisibleState}
          <button className='contlBtn' onClick={this.handleClick}>{buttonText}</button>
        </React.Fragment>
      );
    }
  }
}

ProjectControl.propTypes = {
  masterProjectList: PropTypes.object
};

const mapStateToProps = (state) => {
  return {
    masterProjectList: state.masterProjectList,
    formVisibleOnPage: state.formVisibleOnPage
  }
}

ProjectControl = connect(mapStateToProps)(ProjectControl);

export default withFirestore(ProjectControl);