import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

class CourseCard extends React.Component {
  render() {
    return (
      <CourseHolder name="CoursesHolder">
        <Link to={'/course/' + this.props.course.linkTitle} style={{ textDecoration: 'none' }}>
          <CourseBox name="CourseBox">
            <ImgHolder>
              <CourseBoxImg src={this.props.course.image} />
            </ImgHolder>

            <CourseBoxTitle>{this.props.course.title}</CourseBoxTitle>

            <CourseBoxAuthor>{this.props.course.author}</CourseBoxAuthor>
            <CourseBoxBottom>
              <CourseBoxBottomLeft>
                <Tag>ETHEREUM</Tag>
              </CourseBoxBottomLeft>
              <CourseBoxBottomRight>PRO</CourseBoxBottomRight>
            </CourseBoxBottom>
          </CourseBox>
        </Link>
      </CourseHolder>
    );
  }
}

export default CourseCard;

const CourseHolder = styled.div`
  display: flex;
  background-color: white;
  flex-direction: row;
  justify-content: space-evenly;
  margin: 15px;
  border-radius: 5px;
`;
const CourseTitle = styled.div`
  font-size: 30px;
  text-align: center;
  margin-bottom: 30px;
`;

const CourseBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 260px;
  height: 350px;
  -webkit-box-shadow: 0px 0px 18px 1px rgba(0, 0, 0, 0.44);
  -moz-box-shadow: 0px 0px 18px 1px rgba(0, 0, 0, 0.44);
  box-shadow: 0px 0px 18px 1px rgba(0, 0, 0, 0.44);
  border-radius: 5px;
`;

const CourseBoxImg = styled.img`  
  height: 145px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;

const CourseBoxTitle = styled.div`
  font-size: 22px;
  text-align: center;
  color: black;
  flex: 1;
  margin: 5px;
`;

const CourseBoxAuthor = styled.div`
  text-align: center;
  color: black;
  margin: 5px;
  flex: 1;
`;

const CourseBoxBottom = styled.div`
  display: flex;
  flex-direction: row;
`;

const CourseBoxBottomLeft = styled.div`
  color: black;
  display: flex;
  margin: 5px;
  flex: 3;
`;

const CourseBoxBottomRight = styled.div`
  font-weight: bold;
  text-align: right;
  color: black;
  margin: 5px;
  flex: 1;
`;

const OuterBox = styled.div`
  margin-top: 50px;
`;

const ImgHolder = styled.div`
display: flex;
justify-content: center;
margin-top: 10px;
`;

const Tag = styled.div`
  background-color: #4a90e2;
  color: white;
  padding: 2px;
  padding-right: 10px;
  padding-left: 10px;
  border-radius: 11px;
`;
