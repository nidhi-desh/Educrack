 import React, { Component } from 'react';
 import PropTypes from 'prop-types';
 

 class Button extends Component {
   constructor(props) {
     super(props);
     this.state = {
       type: this.props.type ? this.props.type : 'button',
     };
   }
 
   render() {
     return (
       <input
         type={this.state.type}
         name={this.props.name}
         value={this.props.buttonText}
         className={`btn ${this.props.className ? this.props.className : ''}`}
         id={this.props.id}
         data-testid={this.props.testId}
         onClick={(e) => this.props.onClick(e)}
         style={{
           backgroundColor: this.props.bgColor ? this.props.bgColor : '',
           color: this.props.textColor ? this.props.textColor : '',
           borderColor: this.props.borderColor ? this.props.borderColor : '',
           minWidth: this.props.width ? this.props.width : '',
         }}
         disabled={this.props.disabledButton}
         ref={this.props.refCallback && this.props.refCallback.length !== 0 ? this.props.refCallback : null}
       />
     );
   }
 }
 
 Button.propTypes = {
   buttonText: PropTypes.string.isRequired,
   id: PropTypes.string,
   type: PropTypes.string,
 };
 
 export default Button;