"use client";
import dynamic from "next/dynamic";
import Greetings from "./containers/Greetings";
import GoogleMap from "./containers/Location";
import Gallery from "./containers/Gallery";
const NavigationBar = dynamic(() => import("./components/NavigationBar"));

const Home = () => {
  return (
    <>
      <NavigationBar />
      <Greetings />
      <Gallery />
      <GoogleMap />
    </>
  );
};

export default Home;
