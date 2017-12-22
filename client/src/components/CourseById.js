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

const LandingHolder = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 70px;
  flex-direction: column;
  align-items: center;
`;
const LandingHolderText = styled.div``;

const CourseHolder = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.div`
  font-size: 35px;
  margin: 10px;
`;

const Author = styled.div`
  font-size: 20px;
  margin-bottom: 20px;
`;

const Image = styled.img`
  width: 70%;
`;

const Description = styled.div`
  font-size: 16px;
  margin: 20px;
`;

const WatchButton = styled(Link)`
  font-size: 16px;
  margin: 20px;
  background-color: blue;
`;
