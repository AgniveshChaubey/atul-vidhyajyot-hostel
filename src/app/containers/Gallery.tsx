// @ts-ignore
import Lottie from "react-lottie";
// @ts-ignore
import Fade from "react-reveal/Fade";
import Image from "next/image";
import { Col, Container, Row } from "reactstrap";
import general from "../../public/lottie/general.json";
import functions from "../../public/lottie/functions.json";
import GeneralCarousel from "../components/GeneralCarousel";
import { functionPhotos, generalCarouselPhotos } from "@/data/hostelData";

import me from "./me.png";
const Gallery = () => {
  return (
    <Container className="text-center my-5 section section-lg">
      <h1 className="h1">Gallery</h1>

      <Row className="my-5">
        <Col lg="6" className="order-1 order-lg-2">
          <Fade right duration={2000}>
            {/* <h3 className="h3 mb-2">General</h3> */}
            <GeneralCarousel items={generalCarouselPhotos} />
            {/* <Image src={'/me.png'} alt="aa" width={500} height={500} /> */}
          </Fade>
        </Col>
        <Col lg="6" className="order-2 order-lg-1">
          <Fade left duration={2000}>
            <Lottie
              options={{
                loop: true,
                autoplay: true,
                animationData: general,
              }}
            />
          </Fade>
        </Col>
      </Row>
      <Row className="my-5">
        <Col lg="6" className="order-2 order-lg-1">
          <Fade right duration={2000}>
            {/* <h3 className="h3 mb-2">Functions</h3> */}
            <GeneralCarousel items={functionPhotos} />
          </Fade>
        </Col>
        <Col lg="6" className="order-1 order-lg-2">
          <Fade left duration={2000}>
            <Lottie
              options={{
                loop: true,
                autoplay: true,
                animationData: functions,
              }}
            />
          </Fade>
        </Col>
      </Row>
    </Container>
  );
};

export default Gallery;
