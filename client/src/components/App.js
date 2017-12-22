import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header';
import Landing from './Landing';
import Courses from './Courses';
import Join from './Join';
import Login from './Login';
import Pricing from './Pricing';
import CourseAdd from './Courses/CourseAdd';
import Course from './Course';
import { connect } from 'react-redux';
import * as actions from '../actions';
import styled from 'styled-components';
import Footer from './Footer.js';
import Watch from './Watch';

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }
  render() {
    return (
      <AppOuter>
        <Router>
          <div>
            <Header />
            <Switch>
              <Route exact path="/" component={Landing} />
              <Route path="/join" component={Join} />
              <Route path="/login" component={Login} />
              <Route path="/add" component={CourseAdd} />
              <Route path="/pricing" component={Pricing} />
              <Route path="/courses" component={Courses} />
              <Route exact path="/course/:id" component={Course} />
              <Route path="/course/:id/watch" component={Watch} />
            </Switch>
          </div>
        </Router>
        {/* <Footer /> */}
      </AppOuter>
    );
  }
}

// const mapStateToProps = ()=>{

// }

// const mapDispatchToProps = () =>{
// fetchUser: action.fetchUser
// }

export default connect(null, actions)(App);

const AppOuter = styled.div`  
  font-family: 'Lato', sans-serif;
  margin: -8px;
`;
