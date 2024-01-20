import React from "react";
import { UncontrolledCarousel } from "reactstrap";

const GeneralCarousel = ({ items }: any) => (
  <UncontrolledCarousel
    items={items}
    className="border border-dark rounded-3 p-3"
    style={{ margin: "2vw", padding: "10px", border: "2px solid black" }}
  />
);

export default GeneralCarousel;
