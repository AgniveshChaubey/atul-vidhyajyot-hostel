import React from "react";
import { UncontrolledCarousel } from "reactstrap";

const GeneralCarousel = ({items}: any) => <UncontrolledCarousel items={items} style={{"margin":"2vw", "padding": "10px", "border": "2px solid black"}} />;

export default GeneralCarousel;
