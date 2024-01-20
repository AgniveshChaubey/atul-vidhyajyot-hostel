import { Container, Row, Col } from "reactstrap";
import { homeData } from "@/data/homeData";
import BackgroundDesign from "../components/BackgroundDesign";

const GoogleMap = () => {
  return (
    <main>
      <div className="position-relative">
        <section className="section section-lg section-shaped">
          <BackgroundDesign />
          <Container className="py-lg-md d-flex">
            <div className="col px-0">
              <Row>
                <Col lg="12">
                  <div className="display-3 text-white pb-5">
                    {homeData.location.title}
                  </div>
                  <iframe
                    src={homeData.location.mapUrl}
                    width="100%"
                    height="450"
                    style={{
                      border: 0,
                    }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
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

export default GoogleMap;
