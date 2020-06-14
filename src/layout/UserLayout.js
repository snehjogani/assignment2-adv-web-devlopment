import React, { Component, Fragment } from "react";
import { Container } from 'reactstrap'

class UserLayout extends Component {
  componentDidMount() {
    document.body.classList.add("background");
  }
  componentWillUnmount() {
    document.body.classList.remove("background");
  }

  render() {
    const { children } = this.props
    return (
      <div className="user-container">
        <main>
          <Container>{children}</Container>
        </main>
      </div>
    );
  }
}

export default UserLayout;
