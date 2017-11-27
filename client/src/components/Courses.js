import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

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
        <Link to={"/course/"+course.linkTitle} style={{ textDecoration: 'none' }}>
          <CourseBox name="CourseBox">
            <CoursesBoxImg src={course.image} />
            <CoursesBoxTitle>{course.title}</CoursesBoxTitle>
            <CoursesBoxDesc>{course.description}</CoursesBoxDesc>
            <CoursesBoxAuthor>{course.author}</CoursesBoxAuthor>
          </CourseBox>
        </Link>
      );
    });
  }

  render() {
    return (
      <OuterBox>
        <CoursesTitle name="CoursesTitle">Courses</CoursesTitle>

        <CoursesHolder name="CoursesHolder">
          {this.state.courses.length != 0 ? this.renderCourses() : <div>loading</div>}
        </CoursesHolder>
      </OuterBox>
    );
  }
}

export default Courses;

const CoursesHolder = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;
const CoursesTitle = styled.div`
  font-size: 30px;
  text-align: center;
  margin-bottom: 30px;
`;

const CourseBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  height: 250px;
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
  margin-top: 50px;
`;
