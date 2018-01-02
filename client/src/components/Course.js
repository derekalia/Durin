import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Player } from 'video-react';
import { connect } from 'react-redux';
import { setCourse } from '../actions';
import moment from 'moment';

class Course extends React.Component {
  state = {
    course: null
  };

  componentWillMount = async () => {
    const deets = await axios.get('/api/course_details_from_linkTitle/' + this.props.match.params.id);
    this.setState({ course: deets.data });

    //set to redux state
    this.props.setCourse(deets.data);
  };

  render() {
    return (
      <LandingHolder>
        {/* <LandingHolderText>Course</LandingHolderText> */}
        <div>
          {this.state.course ? (
            <CourseHolder>
              <Top>
                <TopLeft>
                  <Title>{this.state.course.title}</Title>
                  <Author>By {this.state.course.author}</Author>
                  <CourseType>Pro Course</CourseType>
                </TopLeft>
                <TopRight>
                  <WatchButton to={'/course/' + this.state.course.linkTitle + '/watch'}>Watch Now</WatchButton>
                  <UpdatedOn>Updated: {moment(this.state.course.dateUpdated).format('L')}</UpdatedOn>
                </TopRight>
              </Top>
              <PreviewHolder>
                <Image src={this.state.course.image} />
              </PreviewHolder>
              <TextArea>
                <AboutTitle>Overview</AboutTitle>
                <Description>{this.state.course.description}</Description>
              </TextArea>
            </CourseHolder>
          ) : null}
        </div>
      </LandingHolder>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setCourse: course => {
      dispatch(setCourse(course));
    }
  };
};

const mapStateToProps = ({ auth }) => {
  return { auth };
};

export default connect(mapStateToProps, mapDispatchToProps)(Course);

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
  font-size: 32px;
  font-weight: bold;
`;

const Author = styled.div`
  font-size: 16px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
`;

const Description = styled.div`
  font-size: 16px;
  margin-top: 20px;
`;

const WatchButton = styled(Link)`
  width: 140px;
  text-align: center;
  height: 60px;
  background-color: #4a90e2;
  border: none;
  color: white;
  font-size: 16px;
  justify-content: center;
  align-items: center;
  display: flex;
  text-decoration: none;
`;

const Top = styled.div`
  display: flex;
  flex-direction: 'row';
  width: 70%;
  justify-content: space-between;
  height: 120px;
  margin-top: 20px;
  margin-bottom: 20px;
`;
const TopLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const TopRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
`;

const CourseType = styled.div`
  font-size: 16px;
`;

const UpdatedOn = styled.div`
  font-size: 16px;
  text-align: right;
`;

const PreviewHolder = styled.div`
  display: flex;
  justify-content: center;
  width: 70%;
`;

const AboutTitle = styled.div`
  display: flex;
  font-size: 20px;
  font-weight: bold;
  /* justify-content: center; */
`;

const TextArea = styled.div`
display:flex;
width: 70%;
margin-top:30px;
flex-direction: column;
}
`;

// const WatchButton = styled.button`
//   width: 120px;
//   height: 50px;
//   background-color: #4a90e2;
//   border: none;
//   color: white;
//   font-size: 15px;
// `;
