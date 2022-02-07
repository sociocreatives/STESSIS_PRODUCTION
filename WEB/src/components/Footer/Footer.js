import React from "react";
import { Container } from "../../globalStyles";
import { Section, Content, Button, Row } from "./FooterElements";
// import { Link } from "react-router-dom";
import { ExternalLink } from "react-external-link";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBIcon,
  MDBInput
} from "mdbreact";

function Footer() {
  return (
    <Section>
      <Container>
        <Row>
          <Content>
            <h3>We are here to help, get in touch</h3>
            <p>For products information, please feel free to get in touch.</p>
          </Content>
          <Content>
            <form classNam="formone">
              <input type="text" placeholder="Full Name" />
              <input type="email" placeholder="Your Email" />
            </form>
            <form>
              <select>
                <option value="enterprise">Enterprise</option>
                <option value="company">Company</option>
                <option selected value="who">
                  Who you are?
                </option>
              </select>
            </form>
            <form>
              <select>
                <option value="general">General inquiry</option>
                <option value="request">Request Invite</option>
                <option value="complaint">Complaint</option>
                <option selected value="complaint">
                  Subject
                </option>
              </select>
            </form>
            <form>
              <textarea
                placeholder="Hi There, I would like to ...."
                rows="6"
                cols="50"
              ></textarea>
            </form>
            <Button>SUBMIT</Button>
          </Content>
        </Row>
      </Container>
    </Section>
  );
}

export default Footer;
