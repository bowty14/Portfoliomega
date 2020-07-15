import React from 'react';
import Project from './Project';
import PropTypes from 'prop-types';
import { useSelector } from 'react-dom';
import { useFirestoreConnect, isLoaded } from 'react-redux-firebase';

function ProjectList(props) {

  useFirestoreConnect([
    { collection: 'projects'}
  ]);

  const Projects = useSelector(state => state.firestore.ordered.projects);

  if(isLoaded(Projects)) {
    return(
      <React.Fragment>

        {Projects.map((project) => {
          return <Quiz
          whenProjectClicked={props.onProjectSelection}
          projectName={project.projectName}
          authors={project.authors}
          description={project.description}
          repoUrl={project.repoUrl}
          deployedUrl={project.deployedUrl}
          diagram={project.diagram}
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
