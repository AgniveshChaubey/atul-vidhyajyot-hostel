"use client";
import { useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import GalleryCard from "../components/GalleryCard";
import Footer from "../components/Footer";
import { galleryData } from "@/data/galleryData";
import BackgroundDesign from "../components/BackgroundDesign";

const Gallery = () => {
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement!.scrollTop = 0;
  });

  return (
    <main>
      <div className="position-relative">
        <section className="section section-lg section-shaped pb-250">
          <BackgroundDesign />
          <Container className="py-lg-md d-flex">
            <div className="col px-0">
              <Row>
                <Col lg="12">
                  <div className="text-white" style={{ textAlign: "justify" }}>
                    <div className="display-4">{galleryData.galleryHeader}</div>
                    <p>{galleryData.headerText}</p>
                  </div>
                </Col>
              </Row>
              <Row>
                {galleryData.images.functionImg.map((img, i) => {
                  return (
                    <Col lg="6" key={i}>
                      <GalleryCard info={img} />
                    </Col>
                  );
                })}
              </Row>
              <Row>
                {galleryData.images.hostelImg.map((img, i) => {
                  return (
                    <Col lg="6" key={i}>
                      <GalleryCard info={img} />
                    </Col>
                  );
                })}
              </Row>
            </div>
          </Container>
        </section>
      </div>
      <Footer value={"yes"} />
    </main>
  );
};

export default Gallery;
