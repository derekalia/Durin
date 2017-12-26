import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Player } from 'video-react';
import { connect } from 'react-redux';
import axios from 'axios';


class Watch extends React.Component {
  state = {};

  componentWillMount = async () => {
    const deets = await axios.get('/api/get_video/' + this.props.match.params.id);
    this.setState({ course: deets.data });
  };

  render() {
    // console.log(this.props.course);
    return (
      <div>
        {this.state.course && (
          <Player>
            <source src={this.state.course.source} />
          </Player>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    course: state.selectedCourse
  };
};

export default connect(mapStateToProps)(Watch);
