import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Player } from 'video-react';
import { connect } from 'react-redux';
import { setCourse } from '../actions';

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
        <LandingHolderText>Course</LandingHolderText>
        <div>
          {this.state.course ? (
            <CourseHolder>
            
              <Title>{this.state.course.title}</Title>
              <Author>By {this.state.course.author}</Author>

              <Image src={this.state.course.image} />
              <Description>{this.state.course.description}</Description>

              <WatchButton to={'/course/' + this.state.course.linkTitle + '/watch'}>Watch Now</WatchButton>

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

export default connect(null, mapDispatchToProps)(Course);

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
