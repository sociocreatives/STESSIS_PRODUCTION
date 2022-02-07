import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Section, Content, ContentOne, ContentTwo } from "./DividerElements";
import { Button } from "../../globalStyles";
import { ExternalLink } from "react-external-link";

function Divider() {
  AOS.init({
    offset: 200,
    duration: 800,
    easing: "ease-in-out-sine",
    delay: 200,
    mirror: true
  });
  return (
    <Section>
      <Content>
        <ContentOne></ContentOne>
        <ContentTwo>
          <h1>Providing Access to Quality Healthcare</h1>
          <p>
            Our mobile app is designed to help users diagnose their symptoms and
            provides a list of probable diseases. It helps users decide when to
            seek specialist help. The app provides diagnosis of common diseases
            with an accuracy of 97%. Compared to 67% accuracy for diagnosis made
            by a doctor in a hospital.
          </p>
          <ExternalLink href="https://moplex.co.ke/">
            <Button>GET APP</Button>
          </ExternalLink>
        </ContentTwo>
      </Content>
    </Section>
  );
}

export default Divider;
