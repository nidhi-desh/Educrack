import React, { Component } from "react";

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
addItem,
removeItem
} from '../../../Store/Actions/ItemActions'

import Button from "../../ReusableUI/Button";


class Dashboard extends Component {

  handleLogin = () => {
    this.props.history.push({
      pathname: '/login'
  });
}

registerUser = () => {
  this.props.history.push({
    pathname: '/register'
});
}
  render() {
    return (
      <div className="dashboard-container">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand" href="#">
            Dashboard
          </a>

          <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <a class="nav-link" href="#">
                  Home <span class="sr-only">(current)</span>
                </a>
              </li>
            </ul>
          </div>
          <div>
            <Button
              type="submit"
              id="login "
              buttonText="Login"
              className="login-text btn login-btn"
              onClick={this.handleLogin}
              testId="login"
              refCallback={(buttonDOM) => {
                this.buttonDOM = buttonDOM;
              }}
            />

            <Button
              type="submit"
              id="login "
              buttonText="Sign Up"
              className="login-text btn login-btn"
              onClick={this.registerUser}
              testId="login"
              refCallback={(buttonDOM) => {
                this.buttonDOM = buttonDOM;
              }}
            />
          </div>
        </nav>

        <div>
<button className="item-btn" onClick={addItem} >ADD ITEM</button><br/>
<button className="item-btn" onClick={removeItem}>REMOVE ITEM</button><br/>
CART CONTAIN NO OF ITEMS - <span>{this.props.count}</span>
</div>
      </div>
    );
  }

  static mapStateToProps = state => {
    return {
    count: state.count
    }
    }
    static mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
    addItem,
    removeItem
    },
    dispatch
    )
    }

}

export default connect(
  Dashboard.mapStateToProps,
  Dashboard.mapDispatchToProps
  )(Dashboard);
