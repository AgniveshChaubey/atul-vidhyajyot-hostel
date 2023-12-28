"use client";
import dynamic from "next/dynamic";
import Greetings from "./containers/Greetings";
const NavigationBar = dynamic(() => import("./components/NavigationBar"));

const Home = () => {
  return (
    <>
      <NavigationBar />
      <Greetings />
      </>
  );
};

export default Home;
