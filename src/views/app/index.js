import React, { Component, Suspense } from 'react';
import { Route, withRouter, Switch, Redirect } from 'react-router-dom';
import AppLayout from '../../layout/AppLayout';
import Dashboard from './pages/Dashboard'
import Profile from './pages/Profile'
import Notification from './pages/Notification';
import Calendar from './pages/Calendar';

class App extends Component {
  render() {
    const { match } = this.props;
    return (
      <AppLayout>
        <Suspense fallback={<div className="loading" />}>
          <Switch>
            <Redirect exact from={`${match.url}/`} to={`${match.url}/dashboard`} />
            <Route
              path={`${match.url}/dashboard`}
              render={props => <Dashboard {...props} />}
            />
            <Route
              path={`${match.url}/profile`}
              render={props => <Profile {...props} />}
            />
            <Route
              path={`${match.url}/notifications`}
              render={props => <Notification {...props} />}
            />
            <Route
              path={`${match.url}/calendar`}
              render={props => <Calendar {...props} />}
            />
            <Redirect to="/error" />
          </Switch>
        </Suspense>
      </AppLayout>
    );
  }
}

export default withRouter(App)