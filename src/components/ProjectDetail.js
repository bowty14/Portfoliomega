import React from 'react';
import PropTypes from 'prop-types';

function ProjectDetail(props) {
  const { project, onClickingDelete } = props;

  return (
    <React.Fragment>
      <h1> Project Details</h1><br/>
      <h4>Project Name: {project.projectName}</h4><br/>
      <p><em>Created by: {project.authors}</em></p><br/>
      <h4>Description:</h4><p>{project.description}</p><br/>
      <h4>Repo Link: {project.repoUrl}</h4><br/>
      <h4>Deployed Url: {project.deployedUrl}</h4><br/>
      {/* <img src={project.diagram}></img> */}

      <button onClick={ props.onClickingEdit }>Update</button>
      <button onClick={() => onClickingDelete(project.id)}>Delete</button>
    </React.Fragment>
  );
}

ProjectDetail.propTypes = {
  onClickingEdit: PropTypes.func,
  onClickingDelete: PropTypes.func
}

export default ProjectDetail;