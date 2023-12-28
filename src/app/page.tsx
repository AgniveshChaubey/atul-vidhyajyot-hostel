"use client";
import dynamic from "next/dynamic";
import Greetings from "./containers/Greetings";
import GoogleMap from "./containers/Location";
import Gallery from "./containers/Gallery";
import Facilities from "./containers/Facilities";
import QuickLinks from "./components/QuickLinks";
const NavigationBar = dynamic(() => import("./components/NavigationBar"));

const Home = () => {
  return (
    <>
      <NavigationBar />
      <Greetings />
      <Gallery />
      <GoogleMap />
      <Facilities />
      <QuickLinks />
    </>
  );
};

export default Home;
