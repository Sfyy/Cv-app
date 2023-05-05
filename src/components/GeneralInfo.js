import React, { Component } from "react";
import "../styles/GeneralInfo.css";

class GeneralInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: true,
      firstName: this.props.generalInfo.firstName,
      lastName: this.props.generalInfo.lastName,
      email: this.props.generalInfo.email,
      phone: this.props.generalInfo.phone,
    };
  }

  handleEditClick = () => {
    this.setState({ isEditing: true });
  };

  handleSaveClick = () => {
    this.setState({ isEditing: false });
    // Check if onSave prop is a function before calling it
    if (typeof this.props.onSubmit === "function") {
      this.props.onSubmit({
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email,
        phone: this.state.phone,
      });
    }
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { firstName, lastName, email, phone } = this.state;

    return (
      <div className="general-info-container">
        <h2>General Information</h2>
        {this.state.isEditing ? (
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="firstName">First Name:</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={firstName}
              onChange={this.handleChange}
            />
            <label htmlFor="lastName">Last Name:</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={lastName}
              onChange={this.handleChange}
            />
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
            <label htmlFor="phone">Phone:</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={phone}
              onChange={this.handleChange}
            />
            <button type="submit" onClick={this.handleSaveClick}>
              Save
            </button>
          </form>
        ) : (
          <div>
            <p>
              <strong>Name: </strong>
              {firstName} {lastName}
            </p>
            <p>
              <strong>Email:</strong> {email}
            </p>
            <p>
              <strong>Phone:</strong> {phone}
            </p>
            <button onClick={this.handleEditClick}>Edit</button>
          </div>
        )}
      </div>
    );
  }
}

export default GeneralInfo;
