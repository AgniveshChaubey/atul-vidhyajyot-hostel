"use client";
import dynamic from "next/dynamic";
const NavigationBar = dynamic(() => import("./components/NavigationBar"));

const Home = () => {
  return (
    <>
      <NavigationBar />
    </>
  );
};

export default Home;
