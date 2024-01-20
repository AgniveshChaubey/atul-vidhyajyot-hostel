"use client";
import { useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import MyAccordion from "../components/Accordion";
import Footer from "../components/Footer";
import { faqData } from "@/data/faqData";
import BackgroundDesign from "../components/BackgroundDesign";

const FAQs = () => {
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
                    <div className="display-4" style={{ textAlign: "left" }}>{faqData.faqHeader}</div>

                    <p>{faqData.headerText}</p>
                    <MyAccordion faqData={faqData.faqData} />
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

export default FAQs;
