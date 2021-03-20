 import React, { Component } from 'react';
 import PropTypes from 'prop-types';

 
 class PasswordInput extends Component {

   constructor(props) {
     super(props);
     this.state = {
       hasError: false,
       showPassword: true,
       type: 'password',
       isPasswordMatch: true,
     };
   }

   handleChange = (e) => {
     this.setState({
       hasError: this.props.required && !e.target.value,
       isPasswordMatch: e.target.value === this.props.checkPassword,
     });
 
     this.props.onChange(e);
   };
 
   tooglePassword = (e) => {
     let isEyeSlash = e.target.alt === 'eye';
     this.setState({
       showPassword: isEyeSlash ? true : false,
       type: isEyeSlash ? 'password' : 'text',
     });
   };
 
   render() {
     return (
      
           <div style={this.props.style} className={this.props.rootClass}>
             <span className="d-flex align-items-center border-label-fit">
               <input
                 type={this.state.type}
                 className={
                   this.state.hasError
                     ? `form-control username_password_text-eye error-field ${
                         this.props.customClass ? this.props.customClass : ''
                       }`
                     : `form-control username_password_text-eye ${this.props.customClass ? this.props.customClass : ''}`
                 }
                 value={this.props.value}
                 name={this.props.name}
                 placeholder={this.props.placeholder}
                 onChange={this.handleChange}
                 data-testid={this.props.testId}
                 maxLength={this.props.maxlength}
               />
               </span>
             
           </div>
         )}
 }
 
 PasswordInput.propTypes = {
   inputLabel: PropTypes.string,
   placeholder: PropTypes.string,
   id: PropTypes.string,
   required: PropTypes.bool,
 };
 
 export default PasswordInput;
 