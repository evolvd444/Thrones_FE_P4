import React from "react";

import "./sign-in.css";

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({ email: "", password: "" });
  };

  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div classname="sign-in">
        <h2> I already have an account </h2>
        <span> Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <input
            name="email"
            type="email"
            onChange={this.handleChange}
            value={this.state.email}
            required
          />
          <label>Email</label>
          <input
            name="password"
            type="password"
            value={this.state.email}
            onChange={this.handleChange}
            required
          />
          <label> Email </label>
          <input type="submit" value="Submit Form" />
        </form>
      </div>
    );
  }
}

export default SignIn;
