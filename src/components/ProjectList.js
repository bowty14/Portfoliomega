import React from 'react';
import Project from './Project';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { useFirestoreConnect, isLoaded } from 'react-redux-firebase';

function ProjectList(props) {

  useFirestoreConnect([
    { collection: 'projects'}
  ]);

const projects = useSelector(state => state.firestore.ordered.projects);

  if(isLoaded(projects)) {
    return(
      <React.Fragment>

        {projects.map((project) => {
          return <Project
          whenProjectClicked={props.onProjectSelection}
          projectName={project.projectName}
          authors={project.authors}
          description={project.description}
          repoUrl={project.repoUrl}
          deployedUrl={project.deployedUrl}
          // diagram={project.diagram}
          key={project.id} />
        })}
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <h4>Loading...</h4>
      </React.Fragment>
      )
    }
  }

  ProjectList.propTypes = {
    onProjectSelection: PropTypes.func
  };

  export default ProjectList;
