import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Nav, NavItem, NavLink as Link } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import classnames from 'classnames';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { withRouter } from 'react-router-dom';

import { main, secondary } from '../../constants/menu';

class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        <div className="main-menu">
          <PerfectScrollbar
            options={{ suppressScrollX: true, wheelPropagation: false }}
          >
            <Nav vertical>
              {main &&
                main.map(item => {
                  return (
                    <NavItem key={item.id}>
                      <Link tag={NavLink} to={item.to}>
                        <i className={item.icon} />
                      </Link>
                    </NavItem>
                  );
                })}
            </Nav>
          </PerfectScrollbar>
        </div>
        <div className="secondary-menu">
          <Nav vertical>
            {secondary &&
              secondary.map(item => {
                return (
                  <NavItem key={item.id}>
                    <Link tag={NavLink} to={item.to}>
                      <i className={item.icon} />
                    </Link>
                  </NavItem>
                );
              })}
          </Nav>
        </div>
      </div>
    );
  }
}

export default withRouter(Sidebar);
