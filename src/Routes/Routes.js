import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Dashboard from '../Components/Containers/Dashboard/Dashboard';
import Login from '../Components/Containers/Login/Login';
import Register from '../Components/Containers/SignUp/Register';


/**
 * Component for handling application routing.
 *
 * @component
 *
 */
const Routes = () => {
  return (
    <Switch>
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/" component={Dashboard} />
    </Switch>
  );
};

export default Routes;