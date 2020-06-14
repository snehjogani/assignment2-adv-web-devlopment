import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import UserLayout from '../../layout/UserLayout';
import Login from './pages/Login'

const User = ({ match }) => {
  return (
    <UserLayout>
      <Switch>
        <Redirect exact from={`${match.url}/`} to={`${match.url}/login`} />
        <Route
          path={`${match.url}/login`}
          render={props => <Login {...props} />}
        />
        {/* <Route
          path={`${match.url}/register`}
          render={props => <Register {...props} />}
        />
        <Route
          path={`${match.url}/forgot-password`}
          render={props => <ForgotPassword {...props} />}
        />
        <Route
          path={`${match.url}/reset-password/:token/:user`}
          exact
          render={props => <ResetPassword {...props} />}
        /> */}
        <Redirect to="/error" />
      </Switch>
    </UserLayout>
  );
};

export default User;
