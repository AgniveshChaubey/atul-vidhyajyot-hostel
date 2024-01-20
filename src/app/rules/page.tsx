"use client";
import { useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import Footer from "../components/Footer";
import { rulesData } from "@/data/rulesData";
import BackgroundDesign from "../components/BackgroundDesign";

const Rules = () => {
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
                    <div className="display-4">{rulesData.pageHeader}</div>
                    <p>{rulesData.headerText}</p>
                    <div>
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
                      <ul>
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
                      <ul style={{ listStyleType: "square" }}>
                        {rulesData.rules.english.map((rule, index) => (
                          <li key={index}>{rule}</li>
                        ))}
                      </ul>
                    </div>
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

export default Rules;
