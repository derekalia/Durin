import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import { Player } from 'video-react';

class Course extends React.Component {
  state = {
    course: null
  };

  componentWillMount = async () => {
    const deets = await axios.get('/api/course_details/' + this.props.match.params.id);    
    this.setState({ course: deets.data });
  };

  render() {
    return (
      <LandingHolder>
        <LandingHolderText>Course</LandingHolderText>
        <div>
          {this.state.course ? (
            <div>
              <div>
                <img src={this.state.course.image} />
              </div>
              <div>{this.state.course.title}</div>
              <div>{this.state.course.author}</div>
              <div>
                <Player>
                  <source src={this.state.course.source} />
                </Player>
              </div>
            </div>
          ) : null}
        </div>
      </LandingHolder>
    );
  }
}

export default Course;

const LandingHolder = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
`;
const LandingHolderText = styled.div``;
