/* eslint-disable react/no-unescaped-entities */
"use client";
import { useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import Footer from "../components/Footer";

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
                  <div className="d-flex p-4">
                    <div>
                      <div className="icon icon-md icon-shape bg-gradient-white shadow rounded-circle text-info">
                        <i className="ni ni-laptop text-info" />
                      </div>
                    </div>
                    <div
                      className="pl-4 text-white"
                      style={{ textAlign: "justify" }}
                    >
                      <h2 className="display-3 text-white">
                        Admission Process
                      </h2>
                      <p className="lead">
                        Admission to this hostel is entirely merit-based. We
                        accommodate only 36 students, and the admission process
                        hinges entirely on the students' academic results. The
                        higher the results, the greater the chance of selection.
                        Generally, marks above 70% are considered favorable.
                      </p>
                      <p className="lead">
                        Following the evaluation of academic results, successful
                        candidates are required to contact the Rector for the
                        next steps. The Rector conducts an interview to assess
                        the student's suitability, and admission decisions are
                        made accordingly. It is mandatory for students to bring
                        their parents during the admission process.
                      </p>

                      <i className="text-yellow">
                        Requied documents at the time of admission are:
                      </i>
                      <ul className="pl-5">
                        <li>Passport size photo (two copies)</li>
                        <li>Photo ID proof</li>
                        <li>Latest markesheet</li>
                      </ul>

                      <p style={{ textAlign: "center" }}>
                        <strong>
                          Students are required to complete the Google Form
                          below:
                        </strong>
                        <iframe
                          src="https://docs.google.com/forms/d/1dvWwuGcoq6HRr_PZlhz_CJ4_aHxRz7FMXvh60APKrdA/viewform?embedded=true"
                          width="640"
                          height="800"
                        >
                          Loading...
                        </iframe>
                      </p>
                    </div>
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
