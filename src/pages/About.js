import React, { Component } from "react";
import "./About.css";
import childhoodPicture from "../assets/childhoodPicture.png";

export default class About extends Component {
  render() {
    return (
      <div>
        {/* <p>Design your About me page </p> */}
        <div class="split left">
          <div className="centered">
            <img
              className="profile_image"
              src={childhoodPicture}
              alt="Profile Pic"
            ></img>
          </div>
        </div>
        <div className="split right">
          <div className="centered">
            <div className="name_title">Rohan Bohra</div>
            <div className="brief_description">
              Hi! my name is Rohan Bohra, and I am a sophomore at UC Berkeley studying computer science. In my free time, I like watching soccer and biking.
            </div>
          </div>
        </div>
      </div>
    );
  }
}
