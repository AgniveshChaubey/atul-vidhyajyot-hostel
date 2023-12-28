import React from "react";
import { Container, Row, Card, CardBody, Col, Button } from "reactstrap";
import Fade from "react-reveal/Fade";

const QuickLinks = () => {
  return (
    <section className="section section-lg pt-0">
      <Container>
        <div className="d-flex p-4">
          <div>
            <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-info">
              <i className="ni ni-laptop text-info" />
            </div>
          </div>
          <div className="pl-4">
            <h4 className="display-3 text-info">Also see</h4>
          </div>
        </div>
        <Row className="row-grid align-items-center">
          <Col lg="6">
            <Fade bottom duration={2000}>
              <Card className="shadow-lg--hover shadow mt-4">
                <CardBody>
                  <div className="d-flex px-3">
                    <div className="pl-4">
                      <h4 className="">Admission Process</h4>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Fade>
          </Col>
          <Col lg="6">
            <Fade bottom duration={2000}>
              <Card className="shadow-lg--hover shadow mt-4">
                <CardBody>
                  <div className="d-flex px-3">
                    <div className="pl-4">
                      <h4>Contact:  +917621847331</h4>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default QuickLinks;
