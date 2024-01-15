/* eslint-disable react/no-unescaped-entities */
"use client";
import { hostelRules, hostelRulesGuj } from "@/data/hostelData";
import { useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import Footer from "../components/Footer";

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
                  <div className="d-flex p-4">
                    <div>
                      <div className="icon icon-md icon-shape bg-gradient-white shadow rounded-circle text-info">
                        <i className="ni ni-laptop text-info" />
                      </div>
                    </div>
                    <div className="pl-4">
                      <h2 className="display-3 text-white">
                        Rules and Regulations
                        <h5
                          className="lead text-white"
                          style={{ textAlign: "justify" }}
                        >
                          Welcome to our Hostel Rules and Regulations Page!
                          Here, we've laid out some simple guidelines to ensure
                          everyone enjoys a safe and supportive stay. These
                          rules are designed to create a positive environment
                          for all students, fostering a bright and successful
                          future. Let's make our hostel a place where everyone
                          can thrive!
                          <p className="p-2 text-yellow">
                            <i>Note: Rules are mandatory to follow!</i>
                          </p>
                          <hr
                            style={{
                              height: "2px",
                              backgroundColor: "black",
                              margin: "20px",
                            }}
                          />
                          <ul className="ml-4">
                            {hostelRulesGuj.map((rule, index) => (
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
                          <ul
                            className="ml-4"
                            style={{
                              textAlign: "justify",
                              listStyleType: "square",
                            }}
                          >
                            {hostelRules.map((rule, index) => (
                              <li key={index}>{rule}</li>
                            ))}
                          </ul>
                        </h5>
                      </h2>
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

export default Rules;
