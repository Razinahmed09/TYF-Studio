import React from "react";
import { Metadata } from "next";
import HomeMain from "@/pages/homes/home-4";

export const metadata: Metadata = {
  title: "TYF Studio",
};


const Home = () => {
  return (
    <HomeMain/>
  );
};

export default Home;
