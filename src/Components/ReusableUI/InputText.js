import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  validateAlphaNumeric,
  validateEmail,
  validateNumber,
  validateAlphabetic,
} from "../../Utils/ValidationUtility";

class InputText extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      hasValidationError: false,
      value: "",
    };
  }

  componentDidMount() {
    if (!this.props.refCallback) {
      this.searchInput.focus();
    }
    if (this.props.value) {
      this.setState({ value: this.props.value });
    }
  }

  handleChange = (e) => {
    this.setState({ value: e.target.value });
    if (this.props.onChange) {
      this.props.onChange(e);
    }
  };

  handleValidation = (e) => {
    let error = false;
    if (this.props.required && !e.target.value) {
      this.setState({ hasError: true, hasValidationError: false });
      error = true;
    } else {
      this.setState({ hasError: false });
    }

    if (e.target.value && this.props.validation) {
 if (
        "alphaNumeric" === this.props.validationType &&
        validateAlphaNumeric(e.target.value)
      ) {
        this.setState({ hasValidationError: false });
      } 
    }

    if (this.props.onChange) {
      this.props.onChange(e, error);
    }
  };
  render() {
    let optionalLabel = "";
    if (this.props.inputLabel && !this.props.required) {
      optionalLabel = <span> (optional)</span>;
    }
    return (
     
          <div style={this.props.style} className={this.props.rootClass}>
            {this.props.inputLabel ? (
              <span>
                <label>{this.props.inputLabel}</label>
                {optionalLabel}
              </span>
            ) : (
              ""
            )}
            {this.props.required ? (
              <span className="error-text">
                {this.state.hasError ? <span>Required Field</span> : ""}
              </span>
            ) : (
              ""
            )}
            {this.props.validation ? (
              <span className="error-text">
                {this.state.hasValidationError ? (
                  <span>Invalid</span>
                ) : (
                  ""
                )}
              </span>
            ) : (
              ""
            )}
            <span className="border-label-fit">
              <input
                key={this.props.id}
                type="text"
                className={
                  this.state.hasError || this.state.hasValidationError
                    ? `form-control has-error ${
                        this.props.customClass ? this.props.customClass : ""
                      }`
                    : `form-control  ${
                        this.props.customClass ? this.props.customClass : ""
                      }`
                }
                id={this.props.id}
                value={this.state.value}
                name={this.props.name}
                placeholder={this.props.placeholder}
                onChange={this.handleChange}
                onBlur={this.handleValidation}
                data-testid={this.props.testId}
                ref={
                  this.props.refCallback && this.props.refCallback.length !== 0
                    ? this.props.refCallback
                    : (inputEl) => (this.searchInput = inputEl)
                }
                disabled={this.props.disabled}
                maxLength={this.props.maxLength}
                minLength={this.props.minLength}
              />
            </span>
          </div>
    )
  }
}

InputText.propTypes = {
  inputLabel: PropTypes.string,
  placeholder: PropTypes.string,
  id: PropTypes.string,
  required: PropTypes.bool,
};

export default InputText;
