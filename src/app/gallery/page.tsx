"use client";
import { useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import GalleryCard from "../components/GalleryCard";
import { imageInfo } from "@/data/hostelData";
import Footer from "../components/Footer";
import { StaticImageData } from "next/image";

const Gallery = () => {
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
                <Col lg="12">
                  <div className="d-flex p-4">
                    <div>
                      <div className="icon icon-md icon-shape bg-gradient-white shadow rounded-circle text-info">
                        <i className="ni ni-laptop text-info" />
                      </div>
                    </div>
                    <div className="pl-4">
                      <h2 className="display-3 text-white">Gallery</h2>
                      <h1
                        className="lead text-white"
                        style={{ textAlign: "justify" }}
                      >
                        Welcome to Our Hostel Gallery: A Visual Journey of
                        Vibrant Memories. Step into the heart of our hostel
                        through captivating images that tell stories of
                        camaraderie, laughter, and shared experiences. Explore
                        the beauty of our spaces, the warmth of friendships, and
                        the unique moments that make our hostel a home. Join us
                        on a visual tour that celebrates the vibrant spirit of
                        our community.
                      </h1>
                    </div>
                  </div>
                </Col>
              </Row>
              <Row>
                {imageInfo.map(
                  (
                    info: { id: number; src: StaticImageData; desc: string },
                    i: number
                  ) => {
                    return (
                      <Col className="order-lg-1" lg="6" key={i}>
                        <GalleryCard info={info} />
                      </Col>
                    );
                  }
                )}
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
      <Footer value={"yes"} />
    </main>
  );
};

export default Gallery;
