"use client";
import { useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import Footer from "../components/Footer";
import { aboutData } from "@/data/aboutData";
import BackgroundDesign from "../components/backgroundDesign";

const AboutUs = () => {
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
                    {aboutData.map((each, index) => (
                      <>
                        <h5 className="text-white" key={index}>
                          <u>{each.header}</u>
                        </h5>
                        {each.briefInfo.map((info, i) => (
                          <p className="m-0" key={i}>
                            {info}
                          </p>
                        ))}
                        <br />
                        {each.details.map((details, i) => (
                          <p key={i}>{details}</p>
                        ))}
                        <br />
                      </>
                    ))}
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

export default AboutUs;
