"use client";
import { useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import MyAccordion from "../components/Accordion";
import { faqData } from "@/data/hostelData";
import Footer from "../components/Footer";

const FAQs = () => {
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
                    <div className="pl-4" style={{ minWidth: "80%" }}>
                      <h2 className="display-3 text-white">
                        Frequently Asked Questions
                      </h2>
                      <p className="lead text-white mb-5">
                        Got Questions? Find Clear Answers Here! Everything You
                        Need to Know About Your Hostel Stay in Our Simple and
                        Helpful Frequently Asked Questions Section.
                      </p>
                      <MyAccordion faqData={faqData} />
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

export default FAQs;
