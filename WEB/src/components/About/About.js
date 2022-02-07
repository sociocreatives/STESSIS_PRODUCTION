import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Container } from "../../globalStyles";
import { Section, Heading, MainBody, InitialBody } from "./AboutElements";
// import ring from "../../assets/images/SVG/ring.svg";

function About() {
  AOS.init({
    offset: 200,
    duration: 800,
    easing: "ease-in-out-sine",
    delay: 200,
    mirror: true
  });
  return (
    <Section id="#about">
      <Container>
        <InitialBody>
          <Heading>
            {/* <img src={ring} alt="aid kit" width="50px" /> */}
          </Heading>
          <MainBody>
            We believe modern healthcare means patient-centric healthcare,
            whatever their situation. Our Stessis Eco-System, powered by medical
            Artificial Intelligence technology is designed as an all-in-one
            medical diagnosis and treatment solution for the early detection,
            prevention and treatment of diseases for use in rural areas that do
            not have a resident Doctor. In addition to the digital laboratory
            testing (POCT) capability of the system, a crucial tool for
            diagnosis is the AI software application.
          </MainBody>
        </InitialBody>
      </Container>
    </Section>
  );
}

export default About;
