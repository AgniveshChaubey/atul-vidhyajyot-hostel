"use client";
import { useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import { Card, CardBody, CardFooter } from "reactstrap";
import Footer from "../components/Footer";
import { alumniData } from "@/data/alumniData";

const AdmissionProcess = () => {
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement!.scrollTop = 0;
  });

  return (
    <main>
      <div className="position-relative">
        <section className="section section-lg section-shaped pb-250">
          <div className="shape shape-style-1 bg-gradient-info">
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
          <Container className="py-lg-md d-flex">
            <div className="col px-0">
              <Row>
                <Col lg="12">
                  <div className="text-white" style={{ textAlign: "justify" }}>
                    <div className="display-4">{alumniData.alumniHeader}</div>
        
                    <p>{alumniData.headerText}</p>
                  </div>
                </Col>
              </Row>
              <Row>
                {alumniData.info.map((info, i) => {
                  return (
                    <Col className="order-lg-1" lg="6" key={i}>
                      <Card className="card-lift--hover shadow mt-4">
                        <CardBody>
                          <h1>{info.id}</h1>
                        </CardBody>
                        <CardFooter>{info.designation}</CardFooter>
                      </Card>
                    </Col>
                  );
                })}
              </Row>
            </div>
          </Container>
          <div className="separator separator-bottom separator-skew">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon className="fill-white" points="2560 0 2560 100 0 100" />
            </svg>
          </div>
        </section>
      </div>
      <Footer value={"yes"} />
    </main>
  );
};

export default AdmissionProcess;
