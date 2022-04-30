import React, { Component } from 'react';
import { connect } from 'react-redux';
import { LoginUser } from './../redux/action/LoginActionCreator';
import { Link } from 'react-router-dom';

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: this.props.login.user.email,
      password: this.props.login.user.password,
    };
  }

  handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const user = this.state;
    console.log(user);

    this.props.LoginUser(user);
  };

  render() {
    return (
      <div>
        <Link to="/view">View Data</Link>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="email">Email:</label>
          <input
            name="email"
            type="email"
            id="email"
            autoComplete="off"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <br />
          <label htmlFor="password">Password:</label>
          <input
            name="password"
            type="password"
            id="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <br />
          <button type="Submit">Submit</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    // Login value take from reducer index folder
    login: state.Login,
    product: state.Product,
  };
};
const mapDispatchToProps = {
  LoginUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
