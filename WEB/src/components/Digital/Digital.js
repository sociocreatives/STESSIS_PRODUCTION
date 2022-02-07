import React from "react";
import { Container } from "../../globalStyles";
import { Section, SideOne, SideTwo, Row } from "./DigitalElements";
import health from "../../assets/images/health.png";

function Digital() {
  return (
    <Section>
      <Container>
        <Row>
          <SideOne>
            <img src={health} alt="health" />
          </SideOne>
          <SideTwo>
            <h3>Digital transformation in primary healthcare</h3>
            <p>
              According to WHO, at least half of the people in the world do not
              receive the health services they need. About 100 million people
              are pushed into extreme poverty each year because of out-of-pocket
              spending on health. THIS MUST CHANGE. We are using technology to
              provide access to quality affordable primary healthcare services
              in rural areas in developing countries.
            </p>
          </SideTwo>
        </Row>
      </Container>
    </Section>
  );
}

export default Digital;
