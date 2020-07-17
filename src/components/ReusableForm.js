import React from 'react';
import { Button, Form } from 'react-bootstrap';
import PropTypes from 'prop-types';

const ReusableFormStyle = {
  marginTop: "2%",
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-start",
  flexWrap: "wrap",
};

function ReusableForm(props) {
  return (
      <div style={ReusableFormStyle}>
        <Form onSubmit={props.formSubmissionHandler}>
          <Form.Group>
            <Form.Control
              name="authors"
              type="text"
              placeholder="Project Authors."
              rows="3"
            />
          </Form.Group>

          <Form.Group>
            <Form.Control
              type="text"
              name="projectName"
              placeholder="Project name here"
            />
          </Form.Group>

          <Form.Group>
            <Form.Control
              type="text"
              name="description"
              placeholder="Project description"
              rows="3"
            />
          </Form.Group>

          <Form.Group>
            <Form.Control
              type="text"
              name="repoUrl"
              placeholder="Github repo url"
            />
          </Form.Group>

          <Form.Group>
            <Form.Control
              type="text"
              name="deployedUrl"
              placeholder="Hosted url"
            />
          </Form.Group>

          <Form.Group>
            <Form.Control label="Project diagram" type="file" name="diagram" />
            <br /> <br />
            <Button className="reusBtn" type="submit">
              {" "}
              {props.buttonText}{" "}
            </Button>
            <br />
          </Form.Group>
        </Form>
      </div>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;