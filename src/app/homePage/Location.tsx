import { Container, Row, Col } from "reactstrap";
import { homeData } from "@/data/homeData";
import BackgroundDesign from "../components/BackgroundDesign";

const GoogleMap = () => {
  return (
    <main>
      <div className="position-relative">
        <section className="section section-lg section-shaped pt-5">
          <BackgroundDesign />
          <Container className="py-lg-md d-flex">
            <div className="col px-0">
              <div className="display-6 text-white pb-4 fw-bold">
                {homeData.location.title}
              </div>
              <Row>
                <Col lg="12">
                  <iframe
                    className="border border-dark rounded-3 p-1 bg-white"
                    src={homeData.location.mapUrl}
                    width="100%"
                    height="450"
                    style={
                      {
                        // border: 0,
                      }
                    }
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
