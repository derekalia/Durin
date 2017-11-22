import React from 'react';
import {reduxForm, Field} from 'redux-form'

class CourseForm extends React.Component {
  render() {
    return (
      <div>
      <form onSubmit={this.props.handleSubmit(values=>console.log(values))}>
      <Field 
        type="text"
        name="courseTitle"
        component="input"
      />
      <button type="submit">Submit</button>
      </form>
      CourseForm        
      </div>
    );
  }
};

export default reduxForm({
    form:'CourseForm'
})(CourseForm);