import React, { Component } from "react";
import { Container } from 'reactstrap'
import Sidebar from "../common/navs/Sdebar";

class AppLayout extends Component {
  render() {
    const { children } = this.props
    return (
      <div className="app-container">
        <Sidebar />
        <main>
          <Container fluid className="p-3">
            {children}
          </Container>
        </main>
      </div>
    );
  }
}

export default AppLayout
