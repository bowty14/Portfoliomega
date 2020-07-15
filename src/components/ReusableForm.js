import React from 'react';
import PropTypes from 'prop-types';

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input 
          type='text'
          name='authors'
          placeholder='Please enter names of all involved.'
          rows='3'/>
        <input
          type='text'
          name='projectName'
          placeholder='Project name here' />
        <input
          type='text'
          name='description'
          placeholder='Provide a description of project'
          rows='3' />
        <input
          type='text'
          name='repoUrl'
          placeholder='Enter url for github repo' />
        <input
          type='text'
          name='deployedUrl'
          placeholder='Opitional, enter url where site is hosted.' />
        <input
          label='Project diagram'
          type='image'
          name='diagram' />
        <button className='reusBtn' type='submit'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;