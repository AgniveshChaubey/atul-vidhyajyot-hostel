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
        <section className="section section-lg section-shaped pt-5">
          <BackgroundDesign />
          <Container className="py-lg-md d-flex mt-3">
            <div className="col px-0">
              <Row>
                <Col lg="6" className="d-flex justify-content-center pt-3">
                  <Image
                    className="mb-2 p-3 mt-3 img-responsive bg-white border border-dark rounded-3"
                    src={homeData.greetings.hostelImg}
                    alt="Hostel Home"
                    width={500}
                    height={500}
                  />
                </Col>
                <Col lg="6">
                  <p
                    className="pt-4 text-white"
                    style={{ textAlign: "justify" }}
                  >
                    {homeData.greetings.greet}
                  </p>
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
