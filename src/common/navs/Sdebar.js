import React, { Component, Fragment } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { Nav, NavItem, NavLink as Link, UncontrolledTooltip } from 'reactstrap';

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
                    <Fragment key={item.id}>
                      <NavItem id={item.id}>
                        <Link tag={NavLink} to={item.to}>
                          <i className={item.icon} />
                        </Link>
                      </NavItem>
                      <UncontrolledTooltip id={item} target={item.id} placement="right" autohide style={{ fontSize: '12px' }}>
                        {item.label}
                      </UncontrolledTooltip>
                    </Fragment>
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
                  <Fragment key={item.id}>
                    <NavItem id={item.id}>
                      <Link tag={NavLink} to={item.to}>
                        <i className={item.icon} />
                      </Link>
                    </NavItem>
                    <UncontrolledTooltip target={item.id} placement="right" autohide style={{ fontSize: '12px' }}>
                      {item.label}
                    </UncontrolledTooltip>
                  </Fragment>
                );
              })}
          </Nav>
        </div>
      </div>
    );
  }
}

export default withRouter(Sidebar);
