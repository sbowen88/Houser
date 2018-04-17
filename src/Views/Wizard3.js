import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";
import "./Styles/Wizard3.css";
import logo from "./../images/header_logo.png";
import active from "./../images/step_active.png";
import inactive from "./../images/step_inactive.png";
import complete from "./../images/step_completed.png";
import { updateImageUrl, cancel } from "../Ducks/Reducer";

class Wizard3 extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="root">
        <div className="Wizard__router_container">
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
                  <Link
                    className="link"
                    to="/"
                  >
                    Logout{" "}
                  </Link>{" "}
                </span>
              </div>
            </div>
          </div>
          <div className="Wizard__step_container">
            <div className="Wizard__stepHeader_container">
              <span className="open-sans-bold Wizard__stepHeader_span">
                {" "}
                Add new listing{" "}
              </span>
              <button
                className="open-sans-bold Wizard__stepHeader_btn pink_bgc"
                onClick={this.props.cancel}
              >
                {" "}
                <Link
                  className="open-sans-bold Wizard_stepHeader_btn pink_bcg link"
                  to="/Dashboard"
                >
                  Cancel{" "}
                </Link>
              </button>
            </div>
            <div className="Wizard__stepHighlight_container">
              <span className="open-sans Wizard__stepHighlight_span">
                Step 3
              </span>
              <div className="StepHighlight__container">
                <img src={complete} alt="completed" />
                <img src={complete} alt="completed" />
                <img src={active} alt="inactive" />
                <img src={inactive} alt="inactive" />
                <img src={inactive} alt="inactive" />
              </div>
            </div>
            <div className="Step__container">
              <div className="Step3__image_container dark_green_border grey_bgc">
                <img
                  className="open-sans-bold Step3__image"
                  src=""
                  alt="Preview"
                />
              </div>
              <div className="Step1__name_container">
                <span className="open-sans-bold Step__input_header Step1__name_header">
                  Image URL
                </span>
              </div>
              <input
                className="Step__input dark_green_border open-sans"
                value={this.props.imageUrl}
                onChange={e => this.props.updateImageUrl(e.target.value)}
              />
              <div className="Step__btn_container">
                <Link
                  className="Step__btn_next darkest_green_bgc"
                  to="/Wizard2"
                >
                  Previous Step
                </Link>
                <Link
                  className="Step__btn_next darkest_green_bgc"
                  to="/Wizard4"
                >
                  Next Step
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { imageUrl } = state;
  return {
    imageUrl
  };
}

export default connect(mapStateToProps, { updateImageUrl, cancel })(Wizard3);
