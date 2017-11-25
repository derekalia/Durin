import React from 'react';
import CourseForm from './CourseForm';
import CourseReview from './CourseReview';
import { reduxForm } from 'redux-form';

class CourseAdd extends React.Component {
  state = {
    courseReview: false
  };

  renderContent() {
    if (this.state.courseReview) {
      return <CourseReview onCancel={() => this.setState({ courseReview: false })} />;
    }
    return <CourseForm onCourseSubmit={() => this.setState({ courseReview: true })} />;
  }

  render() {
    return (
      <div>
        AddCourse
        {this.renderContent()}
      </div>
    );
  }
}

export default reduxForm({
  form: 'courseForm'
})(CourseAdd);
