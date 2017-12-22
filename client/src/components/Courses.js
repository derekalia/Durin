import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import CourseCard from './CourseCard';

class Courses extends React.Component {
  state = {
    courses: []
  };

  componentWillMount = async () => {
    const courses = await axios.get('/api/courses');
    this.setState({ courses: courses.data });
  };

  renderCourses() {
    return this.state.courses.map(course => {
      return (             
        <CourseCard course={course}/>
      );
    });
  }

  render() {
    return (
      <OuterBox>
        <CoursesTitle name="CoursesTitle">Courses</CoursesTitle>
        <CourseColumn name="CourseColumn">
          <CoursesHolder name="CoursesHolder">
            {this.state.courses.length != 0 ? this.renderCourses() : <div>loading</div>}           
          </CoursesHolder>
        </CourseColumn>
      </OuterBox>
    );
  }
}

export default Courses;

const CourseColumn = styled.div`
  width: 80%;
  align-self: center;
  display: flex;
  flex-direction: column;
  justify-content: middle;
`;
const CoursesHolder = styled.div`
  flex-wrap: wrap;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

const CoursesTitle = styled.div`

  font-size: 30px;
  text-align: center;
  margin-bottom: 40px;
`;

const CourseBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 270px;
  height: 340px;
  -webkit-box-shadow: 0px 0px 18px 1px rgba(0, 0, 0, 0.44);
  -moz-box-shadow: 0px 0px 18px 1px rgba(0, 0, 0, 0.44);
  box-shadow: 0px 0px 18px 1px rgba(0, 0, 0, 0.44);
  border-radius: 5px;
  padding: 10px;
`;

const CoursesBoxImg = styled.img`
  width: 100%;
`;

const CoursesBoxTitle = styled.div`
  text-align: center;
`;

const CoursesBoxAuthor = styled.div``;
const CoursesBoxDesc = styled.div``;

const OuterBox = styled.div`
  margin-top: 80px;
  display: flex;
  flex-direction: column;
`;
