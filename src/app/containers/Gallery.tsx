// @ts-ignore
import Lottie from "react-lottie";
import Fade from "react-reveal/Fade";
import Image from "next/image";
import { Col, Container, Row } from "reactstrap";
import general from "../../public/lottie/general.json";
import functions from "../../public/lottie/functions.json";
import fn1 from "@/public/images/functions/fn1.png";
import gen1 from "@/public/images/general/gen1.png";

const Gallery = () => {
  return (
    <Container className="text-center my-5 section section-lg">
      <h1 className="h1">Gallery</h1>

      <Row className="my-5">
        <Col lg="6" className="order-1 order-lg-2">
          <Fade right duration={2000}>
            {/* <h3 className="h3 mb-2">General</h3> */}
            <Image
              className="mx-auto d-block mb-2 border"
              src={gen1}
              alt="Hostel Home"
              style={{ borderRadius: "20px" }}
              width={450}
              height={450}
            />
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
            <Image
              className="mx-auto d-block mb-2 border"
              src={fn1}
              alt="Hostel Home"
              style={{ borderRadius: "20px" }}
              width={450}
              height={450}
            />
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