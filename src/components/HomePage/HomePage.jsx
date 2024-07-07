import React from "react";
import Hero from "./Hero/Hero";
import AboutUs from "./AboutUs/AboutUs";
import Services from "./Services/Services";
import Contact from "./Contact/Contact";
import Products from "./Products/Products";
import TeamMembers from "./TeamMembers/TeamMembers";
import ChooseUs from "./ChooseUs/ChooseUs";

const HomePage = () => {
  return (
    <>
      <Hero />
      <AboutUs />
      <Services />
      <Contact />
      <Products />
      <TeamMembers />
      <ChooseUs />
    </>
  );
};

export default HomePage;
