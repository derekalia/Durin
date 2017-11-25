import React from 'react';
import { reduxForm, Field } from 'redux-form';
import CourseField from './CourseField';
import '../../../node_modules/video-react/dist/video-react.css'; // import css
import { Player } from 'video-react';
import { Link } from 'react-router-dom';

class CourseForm extends React.Component {
  renderFields() {
    return (
      <div>
        <Field label="Title" type="text" name="title" component={CourseField} />
        <Field label="Author" type="text" name="author" component={CourseField} />
        <Field label="Description" type="text" name="description" component={CourseField} />
        <Field label="Course Content" type="text" name="content" component={CourseField} />
        <Field label="Course image" type="text" name="image" component={CourseField} />
        <Field label="Video" type="text" name="video" component={CourseField} />
        <Field label="Video Length" type="text" name="length" component={CourseField} />
      </div>
    );
  }

  render() {
    return (
      <div>
        CourseForm
        <form
          onSubmit={this.props.handleSubmit(values => {
            console.log('submited', values);
            this.props.onCourseSubmit();
          })}
        >
          {this.renderFields()}
          

          <Player>
            <source src="https://s3-us-west-1.amazonaws.com/blockheads/small.mp4" />
          </Player>
          <button type="submit">Submit</button>
        </form>
        <Link to="/">
          <button>cancel</button>
        </Link>
      </div>
    );
  }
}

const validate = values => {
  const errors = {};
  if (!values.title) {
    errors.title = 'You must provide a title';
  }
  if (!values.author) {
    errors.author = 'You must provide a author';
  }
  if (!values.description) {
    errors.description = 'You must provide a description';
  }
  if (!values.content) {
    errors.content = 'You must provide content';
  }
  if (!values.image) {
    errors.image = 'You must provide image';
  }
  if (!values.video) {
    errors.video = 'You must provide video';
  }
  if (!values.length) {
    errors.length = 'You must provide video length';
  }
  return errors;
};

export default reduxForm({
  validate,
  form: 'courseForm',
  destroyOnUnmount: false
})(CourseForm);
