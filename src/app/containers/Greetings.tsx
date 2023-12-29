import { useEffect } from "react";
import Image from "next/image";
import { greetings } from "@/data/hostelData";
import { Container, Row, Col } from "reactstrap";
import hostelImg from "@/public/images/hostelHomepage.jpg";

const Greetings = () => {
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
                <Col lg="6">
                  <h1 className="display-3 text-white">
                    {greetings.greet + " "}
                  </h1>
                  <h1 className="lead text-white" style={{textAlign:"justify"}}>{greetings.description}</h1>
                  {/* <SocialLinks /> */}
                </Col>
                <Col lg="6">
                  <Image
                    className="mx-auto d-block mb-2"
                    src={hostelImg}
                    alt="Hostel Home"
                    style={{ borderRadius: "20px" }}
                    width={500}
                    height={500}
                  />
                </Col>
              </Row>
            </div>
          </Container>
          {/* SVG separator */}
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
        {/* 1st Hero Variation */}
      </div>
    </main>
  );
};

export default Greetings;
