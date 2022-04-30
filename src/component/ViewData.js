import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
class ViewData extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    const { isLoggedIn, user } = this.props.login;
    return (
      <React.Fragment>
        <Link to="/">Login Page</Link>
        <h1>Email:{user.email} </h1>
        <h1>Password:{user.password}</h1>
        <h1>isLogin :{isLoggedIn}</h1>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    // Login value take from reducer index folder
    login: state.Login,
  };
};

export default connect(mapStateToProps, {})(ViewData);
