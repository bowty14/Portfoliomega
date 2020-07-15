import React from 'react';
import PropTypes from 'prop-types';

function Project(props) {
  return (
    <React.Fragment>
      <div onClick = {() => props.whenProjectClicked(props.id)}>
        <h3>{props.projectName}</h3>
      </div>
    </React.Fragment>
  );
}

Project.propTypes = {
  projectName: PropTypes.string,
  id: PropTypes.string,
  whenProjectClicked: PropTypes.func
};

export default Project;