import React from "react";
import Explore from "../../components/home/Explore";
import Worls from "../../components/home/Worls";
import Feature from "../../components/home/Feature";
import Sunny from "../../components/home/Sunny";
import Testimonials from "../../components/home/Testimonials";
import Trending from "../../components/home/Trending";

const HomeContainer = () => {
  return (
    <div>
      <Explore />
      <Worls />
      <Feature />
      <Sunny />
      <Testimonials />
      <Trending />
    </div>
  );
};

export default HomeContainer;
