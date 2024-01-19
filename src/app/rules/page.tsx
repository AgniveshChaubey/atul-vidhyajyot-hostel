"use client";
import { hostelRules, hostelRulesGuj } from "@/data/hostelData";
import { useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import Footer from "../components/Footer";
import { rulesData } from "@/data/rulesData";

const Rules = () => {
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
                      {rulesData.pageHeader}
                    </h2>
                    <p>{rulesData.headerText}</p>
                    <p>
                      <p className="p-2 text-yellow">
                        <i>{rulesData.note}</i>
                      </p>
                      <hr
                        style={{
                          height: "2px",
                          backgroundColor: "black",
                          margin: "20px",
                        }}
                      />
                      <ul className="ml-4">
                        {rulesData.rules.gujarati.map((rule, index) => (
                          <li key={index}>{rule}</li>
                        ))}
                      </ul>
                      <hr
                        style={{
                          height: "2px",
                          backgroundColor: "black",
                          margin: "20px",
                        }}
                      />
                      <ul className="ml-4" style={{ listStyleType: "square" }}>
                        {rulesData.rules.english.map((rule, index) => (
                          <li key={index}>{rule}</li>
                        ))}
                      </ul>
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

export default Rules;
