import React from 'react';
import { reduxForm, Field } from 'redux-form';
import CourseField from './CourseField';
import '../../../node_modules/video-react/dist/video-react.css'; // import css
import { Player } from 'video-react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

class CourseForm extends React.Component {
  renderFields() {
    return (
      <div>
        <Field label="Title" type="text" name="title" component={CourseField} />
        <Field label="Category" type="text" name="category" component={CourseField} />
        <Field label="Author" type="text" name="author" component={CourseField} />        
        <Field label="Description" type="text" name="description" component={CourseField} />
        <Field label="Course Content" type="text" name="content" component={CourseField} />
        <Field label="Course image" type="text" name="image" component={CourseField} />
        <Field label="Video" type="text" name="video" component={CourseField} />
        <Field label="Video Preview" type="text" name="preview" component={CourseField} />
        <Field label="Video Length" type="text" name="length" component={CourseField} />        
        <Field label="Link Title" type="text" name="linkTitle" component={CourseField} />
        <Field label="Free" type="radio" name="free" component={CourseField} />
      </div>
    );
  }

  render() {
    return (
      <OuterForm>
        CourseForm
        <form
          onSubmit={this.props.handleSubmit(values => {
            console.log('submited', values);
            this.props.onCourseSubmit();
          })}
        >
          {this.renderFields()}          
          <button type="submit">Submit</button>
        </form>
        <Link to="/">
          <button>cancel</button>
        </Link>
      </OuterForm>
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
  if (!values.category) {
    errors.category = 'You must provide a category';
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
  if (!values.preview) {
    errors.preview = 'You must provide video preview';
  }
  return errors;
};

export default reduxForm({
  validate,
  form: 'courseForm',
  destroyOnUnmount: false
})(CourseForm);


const OuterForm = styled.div`
margin-top:80px;
margin-left:10px;
`

