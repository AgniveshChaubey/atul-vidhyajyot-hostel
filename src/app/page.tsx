"use client";
import dynamic from "next/dynamic";
const NavigationBar = dynamic(() => import("./components/NavigationBar"));

import React, { useState, useEffect } from "react";

const Home = () => {
  return (
    <>
      <NavigationBar />
    </>
  );
};

export default Home;
