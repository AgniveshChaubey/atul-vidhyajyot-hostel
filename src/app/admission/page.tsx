"use client";
import { useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import Footer from "../components/Footer";
import { admissionData } from "@/data/admissionData";
import BackgroundDesign from "../components/BackgroundDesign";

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
                    <div className="display-4">{admissionData.pageHeader}</div>
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
                      <strong>{admissionData.form.formHead} <a href="https://forms.gle/B7EFJdX7xedVwnNV8" style={{ color: "red" }}>Click here</a></strong>
                      <iframe
                        src={admissionData.form.formLink}
                        width="100%"
                        height="1200"
                      >
                        Loading...
                      </iframe>
                    </p>
                  </div>
                </Col>
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
