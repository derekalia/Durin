import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Player } from 'video-react';
import CourseCard from './CourseCard';

class Course extends React.Component {
  state = {
    course: null
  };

  componentWillMount = async (id = '5a18bef38a225da0719fc636') => {
    const deets = await axios.get('/api/course_details', { params: { id: this.props.id } });
    this.setState({ course: deets.data });
  };

  render() {
    return <div>{this.state.course ? <CourseCard course={this.state.course} /> : null}</div>;
  }
}

export default Course;
