import React, { Component, Fragment } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

import ViewApp from './views/app'
import ViewUser from './views/user'
import ViewError from './views/error'

// const AuthRoute = ({ component: Component, ...rest }) => {
//   const token = localStorage.getItem(TOKEN_KEY);
//   const userId = localStorage.getItem(USER_ID_KEY);
//   return (
//     <Route
//       {...rest}
//       render={props =>
//         (token && userId) ? (
//           <Component {...props} />
//         ) : (
//             <Redirect
//               to={{
//                 pathname: '/user/login',
//                 state: { from: props.location }
//               }}
//             />
//           )
//       }
//     />
//   );
//   return <Route {...rest} component={Component} />
// }

class App extends Component {
  render() {
    return (
      <Fragment>
        <Router>
          <Switch>
            {/* <AuthRoute
              path="/app"
              // authUser={loginUser}
              component={ViewApp}
            /> */}
            <Route
              path="/app"
              render={props => <ViewApp {...props} />}
            />
            <Route
              path="/user"
              render={props => <ViewUser {...props} />}
            />
            <Route
              path="/error"
              exact
              render={props => <ViewError {...props} />}
            />
            <Redirect to="/user" from="/" />
            <Redirect to="/error" />
          </Switch>
        </Router>
      </Fragment>
    );
  }
}

export default App;
