import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { withRouter } from 'react-router-dom';

const CourseReview = ({ onCancel, formValues, submitCourse, history }) => {
  return (
    <div>
      <h5>Please confirm details</h5>
      <div>{formValues.title}</div>
      <div>{formValues.author}</div>
      <button onClick={onCancel}>cancel</button>
      <button onClick={() => submitCourse(formValues,history)}>finished</button>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    formValues: state.form.courseForm.values
  };
}

export default connect(mapStateToProps, actions)(withRouter(CourseReview));
