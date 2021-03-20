import React, { Component } from "react";
import { Redirect } from "react-router-dom";

import ErrorBoundary from "../../../HOC/ErrorHandler/ErrorBoundary";

import InputText from "../../ReusableUI/InputText";
import PasswordInput from "../../ReusableUI/PasswordInput";
import Button from "../../ReusableUI/Button";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      phoneNo: "",
    };
  }

  handleInput = (e) => {
    this.setState({
      hasError: false,
      [e.target.name]: e.target.value,
    });
  };

  handleRegister = (e) => {
   
      this.props.history.push({
        pathname: "/",
      });
    
  };


  render() {
    const hasError = this.state.hasError;
    return (
      <div>
        <div className="container-fluid login-page">
          <div className="row ">
            <div className="col-sm-6 col-md-6 col-lg-6 remove-right-padding">
              <label className="login-username-label">Firstname</label>
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
          <div className="row ">
            <div className="col-sm-6 col-md-6 col-lg-6 remove-right-padding">
              <label className="login-username-label">Lastname</label>
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
          <div className="row ">
            <div className="col-sm-6 col-md-6 col-lg-6 remove-right-padding">
              <label>Phone No</label>
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
                <label>Set Password</label>
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
                  buttonText="Sign Up"
                  className="btn login-btn"
                  onClick={this.handleRegister}
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

export default Register;
