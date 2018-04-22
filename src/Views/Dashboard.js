import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Styles/Dashboard.css";
import logo from "./../images/header_logo.png";
import Property from "./Property";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      properties: [],
      greaterThan: ""
    };
    this.getProperties = this.getProperties.bind(this);
    this.logout = this.logout.bind(this);
  }
  componentDidMount() {
    axios
      .get("/checkIfLoggedIn")
      .then()
      .catch(res => {
        console.log("error");
        this.props.history.push("/");
      });

    this.getProperties();
  }

  getProperties() {
    axios
      .get("/getProperties")
      .then(res => this.setState({ properties: res.data, greaterThan:'' }));
  }

  filterProperties(greaterThan) {
    axios
      .get(`/filterProperties/?greaterThan=${this.state.greaterThan}`)
      .then(response => this.setState({ properties: response.data }));
  }
  updateGreaterThan(value) {
    this.setState({ greaterThan: value });
  }

  logout() {
    axios.post("/logout");
  }
  render() {
    const userProperties = this.state.properties.map(property => {
      console.log("blah");
      return (
        <Property
          key={property.id}
          id={property.id}
          address={property.address}
          city={property.city}
          propertyDescription={property.propertydescription}
          loanAmount={property.loanamount}
          monthlyMortgage={property.monthlymortgage}
          propertyName={property.propertyname}
          desired_rent={property.desiredrent}
          State={property.State}
          zip={property.zip}
          imageUrl={property.imageurl}
          recommended_rent={property.recommended_rent}
          deleteProperty={this.deleteProperty}
          getProperties={this.getProperties}
        />
      );
    });
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
                  <Link
                    to="/"
                    className="Header__right_span open-sans-bold logout link"
                    onClick={e => this.logout()}
                  >
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
              List properties with "desired rent" greater than: $
            </span>
            <input
              type="number"
              className="open-sans dark_green_border Filter__input"
              placeholder="0"
              value={this.state.greaterThan}
              onChange={e => this.updateGreaterThan(e.target.value)}
            />
            <button
              className="open-sans lightest_green_bgc Filter__btn"
              onClick={() => this.filterProperties()}
            >
              {" "}
              Filter{" "}
            </button>
            <button className="open-sans darkest_green_bgc Filter__btn Filter__btn_reset" onClick={()=>this.getProperties()}>
              {" "}
              Reset{" "}
            </button>
          </div>
          <div className="Dashboard__homeSpan_container">
            <span className="open-sans-bold"> Home Listings </span>
          </div>
          <div />
          <div className="userProperties">{userProperties}</div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
