"use client";
import Greetings from "./containers/Greetings";
import GoogleMap from "./containers/Location";
import Gallery from "./containers/Gallery";
import Facilities from "./containers/Facilities";
import QuickLinks from "./components/ExploreMore";
import Footer from "./components/Footer";

const Home = () => {
  return (
    <>
      <Greetings />
      <Gallery />
      <GoogleMap />
      <Facilities />
      <QuickLinks />
      <Footer />
    </>
  );
};

export default Home;
