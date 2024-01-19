"use client";
import Greetings from "./homePage/Greetings";
import GoogleMap from "./homePage/Location";
import Gallery from "./homePage/Gallery";
import Facilities from "./homePage/Facilities";
import QuickLinks from "./homePage/ExploreMore";
import Footer from "./components/Footer";

const Home = () => {
  return (
    <>
      <Greetings />
      <Gallery />
      <GoogleMap />
      <Facilities />
      <QuickLinks />
      <Footer value="no" />
    </>
  );
};

export default Home;
