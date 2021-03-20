import React, { Component } from "react";
import { Redirect } from "react-router-dom";

import ErrorBoundary from "../../../HOC/ErrorHandler/ErrorBoundary";

import InputText from "../../ReusableUI/InputText";
import PasswordInput from "../../ReusableUI/PasswordInput";
import Button from "../../ReusableUI/Button";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      hasError: "",
    };
  }

  handleInput = (e) => {
    this.setState({
      hasError: false,
      [e.target.name]: e.target.value,
    });
  };

  handleLogin = (e) => {
    if (this.validateUsername()) {
      this.props.history.push({
        pathname: "/",
      });
    }
  };

  validateUsername = () => {
    if (
      !this.state.username ||
      this.state.username === "" ||
      !this.state.password ||
      this.state.password === ""
    ) {
      this.setState({ hasError: "Mandatory Field" });
      return false;
    }
    return true;
  };

  render() {
    const hasError = this.state.hasError;
    return (
      <div>
        <div className="container-fluid">
          <div className="row ">
            <div className="col-sm-6 col-md-6 col-lg-6 remove-right-padding">
              <label >Username</label>
            </div>
          </div>
          <div className="col-sm-6 col-md-6 col-lg-6 remove-padding">
            <InputText
              id="username"
              required={false}
              customClass={hasError ? "has-error" : ""}
              value={this.state.id}
              name="username"
              onChange={this.handleInput}
              testId="Username"
            />
          </div>

          <div className="form-group mt-4">
            <div className="row">
              <div className="col-sm-6 col-md-6 col-lg-6 remove-right-padding">
                <label>Password</label>
              </div>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-6">
              <PasswordInput
                id="password"
                type="password"
                name="password"
                customClass={hasError ? "has-error" : ""}
                value={this.state.password}
                onChange={this.handleInput}
                className="form-control"
                testId="Password"
                eye="true"
              />
            </div>
          </div>
          <div className="form-group ml-1 mt-3" data-testid="error"></div>
          <div className="form-group mt-3">
            <div className="row">
              <div className="col-sm-6 col-md-6 col-lg-6">
                <Button
                  type="submit"
                  id="login "
                  buttonText="Login"
                  className="btn login-btn"
                  onClick={this.handleLogin}
                  testId="login"
                  refCallback={(buttonDOM) => {
                    this.buttonDOM = buttonDOM;
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
