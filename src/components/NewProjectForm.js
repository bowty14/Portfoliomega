import React from 'react';
import PropTypes from 'prop-types';
import ReusableForm from './ReusableForm';
import { useFirestore } from 'react-redux-firebase';


function NewProjectForm(props) {
  const firestore = useFirestore();
  function addProjectToFirestore(event) {
    event.preventDefault();
    props.onNewProjectCreation();

    return firestore.collection('projects').add(
      {
        authors: event.target.authors.value,
        projectName: event.target.projectName.value,
        description: event.target.description.value,
        repoUrl: event.target.repoUrl.value,
        deployedUrl: event.target.deployedUrl.value,
        // diagram: event.target.diagram.value,
        timeOpen: firestore.FieldValue.serverTimestamp()
      }
    );
  }

  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={addProjectToFirestore}
        buttonText='Add project' />
    </React.Fragment>
  );
}

NewProjectForm.propTypes = {
  onNewProjectCreation: PropTypes.func
};

export default NewProjectForm;