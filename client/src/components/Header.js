import React from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom'
class Header extends React.Component {
  state = {};

  renderContent() {
    console.log(this.props.auth)
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return <a href="/auth/google">Login</a>;
      default:
        return <a href="/api/logout">Logout</a>;
    }
  }

  render() {
    return (
      <div>
        <div><Link to={this.props.auth ? '/courses':'/'}>Blockheads</Link></div>
        <div>Login</div>
        <div>{this.renderContent()}</div>
      </div>
    );
  }
}

const mapStateToProps = ({auth}) => {
  return {auth}
};

export default connect(mapStateToProps)(Header);