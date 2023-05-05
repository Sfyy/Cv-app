import React, { Component } from "react";
import "../styles/Education.css";

class Education extends Component {
  constructor(props) {
    super(props);
    this.state = {
      schoolName: "",
      studyTitle: "",
      date: "",
      isEditing: true,
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { schoolName, studyTitle, date } = this.state;
    this.props.onSubmit({ schoolName, studyTitle, date });
    this.setState({
      isEditing: false,
    });
  };

  handleEdit = () => {
    this.setState({
      isEditing: true,
    });
  };

  render() {
    const { schoolName, studyTitle, date, isEditing } = this.state;

    return (
      <div className="education-container">
        <h2>Education</h2>
        {isEditing ? (
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="schoolName">School Name:</label>
            <input
              type="text"
              id="schoolName"
              name="schoolName"
              value={schoolName}
              onChange={this.handleInputChange}
            />
            <br />
            <label htmlFor="studyTitle">Study Title:</label>
            <input
              type="text"
              id="studyTitle"
              name="studyTitle"
              value={studyTitle}
              onChange={this.handleInputChange}
            />
            <br />
            <label htmlFor="date">Date:</label>
            <input
              type="text"
              id="date"
              name="date"
              value={date}
              onChange={this.handleInputChange}
            />
            <br />
            <button type="submit">Save</button>
          </form>
        ) : (
          <div>
            <p>
              <strong>School Name:</strong> {schoolName}
            </p>
            <p>
              <strong>Study Title:</strong> {studyTitle}
            </p>
            <p>
              <strong>Date:</strong> {date}
            </p>
            <button onClick={this.handleEdit}>Edit</button>
          </div>
        )}
      </div>
    );
  }
}

export default Education;
