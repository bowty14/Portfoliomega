import React from 'react';
import ReusableForm from './ReusableForm';
import PropTypes from 'prop-types';
import { useFirestore } from 'react-redux-firebase';

function EditProjectForm(props) {
  const firestore = useFirestore();
  const { project } = props;
  function handleEditProjectFormSubmission(event) {
    event.preventDefault();
    props.onEditProject();
    const propertiesToUpdate = {
      authors: event.target.authors.value,
      projectName: event.target.projectName.value,
      description: event.target.description.value,
      repoUrl: event.target.repoUrl.value,
      deployedUrl: event.target.deployedUrl.value,
      diagram: event.target.diagram.value
    }
    return firestore.update({ collection: 'projects', doc: project.id }, propertiesToUpdate);
  }

  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleEditProjectFormSubmission}
        buttonText='Update Project' />
    </React.Fragment>
  );
}

EditProjectForm.propTypes = {
  onEditProject: PropTypes.func
};

export default EditProjectForm;




