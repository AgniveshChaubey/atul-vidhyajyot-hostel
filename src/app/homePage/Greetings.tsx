import { useEffect } from "react";
import Image from "next/image";
import { Container, Row, Col } from "reactstrap";
import { homeData } from "@/data/homeData";
import BackgroundDesign from "../components/BackgroundDesign";

const Greetings = () => {
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement!.scrollTop = 0;
  });

  return (
    <main>
      <div className="position-relative">
        <section className="section section-lg section-shaped pb-250">
          <BackgroundDesign />
          <Container className="py-lg-md d-flex mt-3">
            <div className="col px-0">
              <Row>
                <Col lg="6">
                  <p
                    className="lead text-white text-on-mobile"
                    style={{ textAlign: "justify" }}
                  >
                    {homeData.greetings.greet}
                  </p>
                </Col>
                <Col lg="5">
                  <Image
                    className="mb-2 p-3 mt-3 img-responsive"
                    src={homeData.greetings.hostelImg}
                    alt="Hostel Home"
                    style={{
                      border: "2px solid black",
                      backgroundColor: "white",
                    }}
                    width={500}
                    height={500}
                  />
                </Col>
              </Row>
            </div>
          </Container>
        </section>
      </div>
    </main>
  );
};

export default Greetings;
