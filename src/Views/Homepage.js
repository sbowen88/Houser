import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Styles/Homepage.css";
import logo from "./../images/houser_logo.png";

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.login = this.login.bind(this);
    this.register = this.register.bind(this);
  }
  handleChange(prop, val) {
    this.setState({ [prop]: val });
  }
  login() {
    axios
      .post('/auth/login', {
        username: this.state.username,
        password: this.state.password
      })
      .then(res => this.props.history.push('/dashboard'));
  }
  register(){
    axios.post('/register', {
      username: this.state.username,
      password: this.state.password
    })
    .then(res=>this.props.history.push('/dashboard'));
  }

  render() {
    return (
      <div className="root">
        <div className="Auth-container">
          <img src={logo} alt="logo" className="Auth__logo" />
          <span className="open-sans-bold Auth__input_header">Username</span>
          <input
            type="text"
            className="Auth__input dark_green_border"
            value={this.state.username}
            onChange={e => this.handleChange("username", e.target.value)}
          />
          <span className="open-sans-bold Auth__input_header">Password</span>
          <input
            type="password"
            className="Auth__input dark_green_border"
            value={this.state.password}
            onChange={e => this.handleChange("password", e.target.value)}
          />
          <div className="Auth__buttons-container">
            <button className="Auth__button_login lightest_green_bgc open-sans-bold"  onClick={e => this.login()}>
              Login
            </button>
            <button
              className="Auth__button_register darkest_green_bgc open-sans-bold" onClick={e=>this.register()}
            >
              Register 
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Homepage;
