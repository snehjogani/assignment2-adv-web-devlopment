import React, { Component, Fragment } from "react";
import { Row } from "reactstrap";
import { Colxx } from "../../../common/CustomBootstrap";

export default class Dashboard extends Component {
  render() {
    return (
      <Fragment>
        <Row>
          <Colxx xxs="12" className="mb-4">
            Dashboard
          </Colxx>
        </Row>
      </Fragment>
    )
  }
}
