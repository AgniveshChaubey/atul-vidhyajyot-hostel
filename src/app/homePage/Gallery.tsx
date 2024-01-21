// @ts-ignore
import Lottie from "react-lottie";
import { Col, Container, Row } from "reactstrap";
import general from "../../public/lottie/general.json";
import functions from "../../public/lottie/functions.json";
import GeneralCarousel from "../components/GeneralCarousel";
import { homeData } from "@/data/homeData";

const Gallery = () => {
  return (
    <Container className="text-center my-5 section section-lg p-0">
      <div className="display-6 text-info fw-bold">
        {homeData.gallery.title}
      </div>

      <Row className="my-5">
        <Col lg="6" className="order-1 order-lg-2 rounded-2">
          <GeneralCarousel items={homeData.gallery.generalCarouselPhotos} />
        </Col>
        <Col lg="6" className="order-2 order-lg-1">
          <Lottie
            options={{
              loop: true,
              autoplay: true,
              animationData: general,
            }}
          />
        </Col>
      </Row>
      <Row className="my-5">
        <Col lg="6" className="order-2 order-lg-1 rounded-2">
          <GeneralCarousel items={homeData.gallery.functionCarouselPhotos} />
        </Col>
        <Col lg="6" className="order-1 order-lg-2">
          <Lottie
            options={{
              loop: true,
              autoplay: true,
              animationData: functions,
            }}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Gallery;
