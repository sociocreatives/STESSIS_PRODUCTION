import React from "react";
import Hero from "../components/Hero/Hero";
// import Navbar from "../components/Navbar/Navbar";
import About from "../components/About/About";
import Divider from "../components/Divider/Divider";
import Solution from "../components/Solution/Solution";
import Footer from "../components/Footer/Footer";
import Faq from "../components/Faq/Faq";
import Artificial from "../components/Artificial/Artificial";
import Digital from "../components/Digital/Digital";
import Subscribe from "../components/Subscribe/Subscribe";

function Index() {
  return (
    <div>
      <Hero />
      <About />
      <Solution />
      <Digital />
      <Artificial />
      <Divider />
      <Faq />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default Index;
