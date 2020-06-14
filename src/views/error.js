import React, { Component, Fragment } from "react";
import { Row, Card, CardTitle, Button, CardBody } from "reactstrap";
import { withRouter } from 'react-router-dom'

import { Colxx } from "../common/CustomBootstrap";

class Error extends Component {
  render() {
    const { history } = this.props
    return (
      <Fragment>
        <main>
          <div className="container">
            <Row style={{ height: 'calc(100vh - 2rem)', alignItems: 'center' }}>
              <Colxx xxs="12" md="10" className="mx-auto">
                <Card className="p-3">
                  <CardBody className="p-4">
                    <div className="form-side">
                      <CardTitle className="mb-4">
                        {"Ooops... looks like the feature is not yet implemented!"}
                      </CardTitle>
                      <p className="mb-0 text-muted text-small">
                        {"Error code"}
                      </p>
                      <p className="display-1 font-weight-bold mb-5">404</p>
                      <Button
                        color="primary"
                        onClick={() => history.goBack()}
                        className="px-5"
                        size="md"
                      >
                        {"Go Back"}
                      </Button>
                    </div>
                  </CardBody>
                </Card>
              </Colxx>
            </Row>
          </div>
        </main>
      </Fragment>
    );
  }
}
export default withRouter(Error);
