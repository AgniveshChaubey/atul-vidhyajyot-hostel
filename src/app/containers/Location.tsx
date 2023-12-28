import { Container, Row, Col } from "reactstrap";

const GoogleMap = () => {
  const mapUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.568690535363!2d72.91913507475674!3d22.557824133512703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e4e0d3761116d%3A0x226f9e786735dc9b!2sAtul%20VidhyaJyot!5e0!3m2!1sen!2sin!4v1703742994116!5m2!1sen!2sin";

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
                  <h1 className="display-3 text-white pb-5">Location</h1>
                  <iframe
                    src={mapUrl}
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
    </main>
  );
};

export default GoogleMap;
