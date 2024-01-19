"use client";
import { useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import Footer from "../components/Footer";
import { admissionData } from "@/data/admissionData";

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
                    <h2 className="display-4 text-white">
                      {admissionData.pageHeader}
                    </h2>
                    {admissionData.details.map((details, index) => (
                      <p key={index}>{details}</p>
                    ))}

                    <i className="text-yellow">{admissionData.alert.text}</i>
                    <ul className="pl-5">
                      {admissionData.alert.data.map((listItem, i) => (
                        <li key={i}>{listItem}</li>
                      ))}
                    </ul>

                    <p style={{ textAlign: "center" }}>
                      <strong>{admissionData.form.formHead}</strong>
                      <iframe
                        src={admissionData.form.formLink}
                        width="640"
                        height="800"
                      >
                        Loading...
                      </iframe>
                    </p>
                  </div>
                </Col>
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
