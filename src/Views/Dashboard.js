import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Styles/Dashboard.css";
import logo from "./../images/header_logo.png";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="root">
        <div className="Dashboard__container white_bgc">
          <div className="Header__parent dark_green_bgc">
            <div className="Header__child">
              <div className="Header__left_container">
                <img src={logo} alt="logo" />
                <span className="Header__left_span open-sans-bold">Houser</span>
                <span className="Header__left_span open-sans">Dashboard</span>
              </div>
              <div className="Header__right_container">
                <span className="Header__right_span open-sans-bold">
                  {" "}
                  <Link className="link" to="/">
                    Logout{" "}
                  </Link>
                </span>
              </div>
            </div>
          </div>

          <button className="Dashboard__button_new lightest_green_bgc open-sans-bold">
            <Link className="link" to="/Wizard1">
              Add new property
            </Link>
          </button>

          <div className="Filter__container">
            <span className="open-sans Filter__description">
              List properties with "desired rent" greator than: $
            </span>
            <input
              className="open-sans dark_green_border Filter__input"
              placeholder="0"
              value=""
            />
            <button className="open-sans lightest_green_bgc Filter__btn">
              {" "}
              Filter{" "}
            </button>
            <button className="open-sans darkest_green_bgc Filter__btn Filter__btn_reset">
              {" "}
              Reset{" "}
            </button>
          </div>
          <div className="Dashboard__homeSpan_container">
            <span className="open-sans-bold"> Home Listings </span>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
