"use client";
import dynamic from "next/dynamic";
import Greetings from "./containers/Greetings";
import GoogleMap from "./containers/Location";
const NavigationBar = dynamic(() => import("./components/NavigationBar"));

const Home = () => {
  return (
    <>
      <NavigationBar />
      <Greetings />
      <GoogleMap />
    </>
  );
};

export default Home;
