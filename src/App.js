import React, { Component } from "react";
import "./styles/App.css";

import GeneralInfo from "./components/GeneralInfo";
import Education from "./components/Education";
import PracticalExperience from "./components/PracticalExperience";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      generalInfo: {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
      },
      education: [],
      practicalExperience: [],
    };
  }

  handlegeneralInfoSubmit = (generalInfo) => {
    this.setState({ generalInfo });
  };

  handleEducationSubmit = (education) => {
    this.setState((prevState) => ({
      education: [...prevState.education, education],
    }));
  };

  handlePracticalExperienceSubmit = (experience) => {
    this.setState((prevState) => ({
      practicalExperience: [...prevState.practicalExperience, experience],
    }));
  };

  handleReset = () => {
    this.setState({
      generalInfo: {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
      },
      education: [],
      practicalExperience: [],
    });
  };

  render() {
    const { generalInfo, education, practicalExperience } = this.state;

    return (
      <div className="container">
        <div className="header">
          <FontAwesomeIcon icon={faBriefcase} size="2x" />
          <h1>CV FORGE</h1>
          <div className="header-line"></div>
        </div>

        <div className="app-container">
          <div className="form-cv-container">
            <div className="form-section">
              <GeneralInfo
                generalInfo={generalInfo}
                onSubmit={this.handlegeneralInfoSubmit}
              />
              <Education onSubmit={this.handleEducationSubmit} />
              <PracticalExperience
                onSubmit={this.handlePracticalExperienceSubmit}
              />
              <button type="button" id="reset" onClick={this.handleReset}>
                Reset
              </button>
            </div>

            <div className="cv-preview">
              <h1> CV Preview</h1>

              <h2>General Information</h2>
              <p>
                <strong>- Full Name:</strong> <br />
                {generalInfo.firstName} {generalInfo.lastName}
              </p>
              <p>
                <strong>- Email:</strong> <br /> {generalInfo.email}
              </p>
              <p>
                <strong>- Phone:</strong> <br />
                {generalInfo.phone}
              </p>

              <h2>Education</h2>
              {education.map((edu, index) => (
                <div key={index}>
                  <p>
                    <strong>- School Name:</strong> <br />
                    {edu.schoolName}
                  </p>
                  <p>
                    <strong>- Study Title:</strong> <br /> {edu.studyTitle}
                  </p>
                  <p>
                    <strong>- Date:</strong> <br /> {edu.date}
                  </p>
                </div>
              ))}

              <h2>Practical Experience</h2>
              {practicalExperience.map((exp, index) => (
                <div key={index}>
                  <p>
                    <strong>- Company:</strong> <br />
                    {exp.company}
                  </p>
                  <p>
                    <strong>- Position:</strong> <br /> {exp.position}
                  </p>
                  <p>
                    <strong>- City:</strong> <br /> {exp.city}
                  </p>
                  <p>
                    <strong>- From:</strong> <br /> {exp.from}
                  </p>
                  <p>
                    <strong>- To:</strong> <br /> {exp.to}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="footer">
          <div className="header-line"></div>
          <p> Built by Sfy.</p>

          <a href="https://github.com/Sfyy">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <div className="header-line"></div>
        </div>
      </div>
    );
  }
}

export default App;
