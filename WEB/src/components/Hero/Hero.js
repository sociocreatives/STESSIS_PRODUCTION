import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../../index.css";
import { Section, Header, Headertwo, Button } from "./HeroElements";
import { Container } from "../../globalStyles";
import { ExternalLink } from "react-external-link";

function Hero() {
  AOS.init({
    offset: 200,
    duration: 800,
    easing: "ease-in-out-sine",
    delay: 200,
    mirror: true
  });

  return (
    <Section>
      <Container data-aos="fade-right">
        <Header>Towards Universal Health Coverage for all.</Header>
        <Headertwo>Quality primary healthcare services in your hands</Headertwo>
        <ExternalLink href="https://moplex.co.ke/">
          <Button>GET STARTED</Button>
        </ExternalLink>
      </Container>
    </Section>
  );
}

export default Hero;
