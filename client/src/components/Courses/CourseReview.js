import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components'

const CourseReview = ({ onCancel, formValues, submitCourse, history }) => {
  return (
    <OuterForm>
      <h5>Please confirm details</h5>
      <div>{formValues.title}</div>
      <div>{formValues.author}</div>
      <div>{formValues.category}</div>
      <div>{formValues.description}</div>
      <div>{formValues.content}</div>
      <div>{formValues.image}</div>
      <div>{formValues.video}</div>
      <div>{formValues.preview}</div>
      <div>{formValues.linkTitle}</div>
      <div>{formValues.free}</div>
      <button onClick={onCancel}>cancel</button>
      <button onClick={() => submitCourse(formValues,history)}>finished</button>
    </OuterForm>
  );
};

function mapStateToProps(state) {
  return {
    formValues: state.form.courseForm.values
  };
}

export default connect(mapStateToProps, actions)(withRouter(CourseReview));


const OuterForm = styled.div`
margin-top:80px;
`