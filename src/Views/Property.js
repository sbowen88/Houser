import React, { Component } from "react";
import delete_icon from "./../images/delete_icon.png";
import "./Styles/Property.css";
import axios from "axios";

export default class Property extends Component {
  deleteProperty() {
    axios
      .delete(`/deleteProperty/${this.props.id}`)
      .then(this.props.getProperties());
  }
  
  render() {
    const {
      id,
      propertyName,
      propertyDescription,
      address,
      city,
      State,
      zip,
      imageUrl,
      loanAmount,
      monthlyMortgage,
      desiredRent,
      properties,
      getProperties
    } = this.props;
    console.log(this.props)
    return (
      
      <div className="Dashboard__property_container">
        <div className="Property__img_container">
          <img className="Property__img" src={imageUrl} alt="#" />
         
        </div>
        <div className="Property__dd_container">
          <div className="Property__description_parent">
            <div className="Property__description_child">
              <span className="open-sans-bold Property__description_name">
                {propertyName}
              </span>
              <span className="open-sans Property__description_description">
                {propertyDescription}
              </span>
            </div>
          </div>
          <img
            className="delete"
            onClick={() => {
              this.deleteProperty();
            }}
            src={delete_icon}
            alt="delete property"
          />
        </div>
      </div>
    );
  }
}
