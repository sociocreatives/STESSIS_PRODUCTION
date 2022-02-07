import React from "react";
import { Section, Services, Service, Header } from "./SolutionElements";
import { Container } from "../../globalStyles";
import firstaid from "../../assets/images/SVG/aidkit.jpg";
import bills from "../../assets/images/SVG/bills.jpg";
import hospital from "../../assets/images/SVG/hospital.jpg";

function Solution() {
  return (
    <Section>
      <Container>
        <Header>
          <h3>One stop solution</h3>
          <p>
            Fully integrated software, hardware and POCT for a faster and
            effective deployment, enabling healthcare workers hit the ground
            running.
          </p>
        </Header>
        <Services>
          <Service>
            <img src={hospital} alt="aid kit" width="300px" />
            <h3>Tech Enabled Mini Hospital</h3>
            <p>
              For remote rural stations with no infrastructure with patients
              requiring holistic primary health care services
            </p>
          </Service>
          <Service>
            <img src={firstaid} alt="aid kit" width="300px" />
            <h3>Hospital in a Bag</h3>
            <p>
              For field health workers in rural areas and stations with no or
              limited infrastructure
            </p>
          </Service>
          <Service>
            <img src={bills} alt="aid kit" width="300px" />
            <h3>Express Mini Hospital</h3>
            <p>
              For patients seeking quick, convenient, high quality & low cost
              health care services
            </p>
          </Service>
        </Services>
      </Container>
    </Section>
  );
}

export default Solution;
