"use client";
import { useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import { Card, CardBody, CardFooter } from "reactstrap";
import Footer from "../components/Footer";
import { alumniData } from "@/data/alumniData";
import BackgroundDesign from "../components/backgroundDesign";

const AdmissionProcess = () => {
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement!.scrollTop = 0;
  });

  return (
    <main>
      <div className="position-relative">
        <section className="section section-lg section-shaped pb-250">
          <BackgroundDesign />
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
        </section>
      </div>
      <Footer value={"yes"} />
    </main>
  );
};

export default AdmissionProcess;
