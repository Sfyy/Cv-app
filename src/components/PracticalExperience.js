import React, { Component } from "react";
import "../styles/PracticalExperience.css";

class PracticalExperience extends Component {
  constructor(props) {
    super(props);
    this.state = {
      company: "",
      position: "",
      city: "",
      from: "",
      to: "",
      editMode: true,
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  toggleEditMode = () => {
    this.setState((prevState) => ({ editMode: !prevState.editMode }));
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { company, position, city, from, to } = this.state;
    const experience = { company, position, city, from, to };
    this.props.onSubmit(experience);
    this.toggleEditMode();
  };

  handleCancel = () => {
    this.setState({
      company: "",
      position: "",
      city: "",
      from: "",
      to: "",
      editMode: false,
    });
  };

  render() {
    const { company, position, city, from, to, editMode } = this.state;

    return (
      <div className="practical-experience-container">
        <h2>Practical Experience</h2>
        {editMode ? (
          <form onSubmit={this.handleSubmit}>
            <label>
              Company:
              <input
                type="text"
                name="company"
                value={company}
                onChange={this.handleInputChange}
              />
            </label>
            <br />
            <label>
              Position:
              <input
                type="text"
                name="position"
                value={position}
                onChange={this.handleInputChange}
              />
            </label>
            <br />
            <label>
              City:
              <input
                type="text"
                name="city"
                value={city}
                onChange={this.handleInputChange}
              />
            </label>
            <br />
            <label>
              From:
              <input
                type="date"
                name="from"
                value={from}
                onChange={this.handleInputChange}
              />
            </label>
            <br />
            <label>
              To:
              <input
                type="date"
                name="to"
                value={to}
                onChange={this.handleInputChange}
              />
            </label>
            <br />
            <button type="submit">Save</button>
            <button type="button" onClick={this.handleCancel}>
              Cancel
            </button>
          </form>
        ) : (
          <div>
            <p>
              <strong>Company: </strong> {company}
            </p>
            <p>
              <strong>Position: </strong> {position}
            </p>
            <p>
              <strong> City: </strong> {city}
            </p>
            <p>
              <strong>From: </strong> {from}
            </p>
            <p>
              <strong>To: </strong> {to}
            </p>
            <button type="button" id="edit" onClick={this.toggleEditMode}>
              Edit
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default PracticalExperience;
