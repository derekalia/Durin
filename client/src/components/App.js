import React, { Component } from 'react';
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom';
import Header from './Header';
import Landing from './Landing';
import Courses from './Courses';
import Join from './Join';
import Login from './Login';
import Pricing from './Pricing';

import {connect} from 'react-redux'
import * as actions from '../actions';


class App extends Component {
  componentDidMount(){
    this.props.fetchUser()
  }
  render() {
    return (
      <div>
        
        <Router>
        <div>
        <Header />
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route path="/join" component={Join} />
            <Route path="/login" component={Login} />
            <Route path="/pricing" component={Pricing} />
            <Route path="/courses" component={Courses} />
          </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

// const mapStateToProps = ()=>{

// }

// const mapDispatchToProps = () =>{
// fetchUser: action.fetchUser
// }

export default connect(null,actions)(App);
