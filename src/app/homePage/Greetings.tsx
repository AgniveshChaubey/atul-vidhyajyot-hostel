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
                  <h1
                    className="lead text-white"
                    style={{ textAlign: "justify" }}
                  >
                    {homeData.greetings.greet}
                  </h1>
                </Col>
                <Col lg="5" className="ml-2">
                  <Image
                    className="mx-auto d-block mb-2 p-3 mt-3"
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
