import React from "react";
import { Navigation, LogoIcon, Button } from "./NavbarElements";
import { Container } from "../../globalStyles";
import logo from "../../assets/images/logo/stessis_original.png";
import { ExternalLink } from "react-external-link";

function Navbar() {
  return (
    <Navigation>
      <Container>
        <LogoIcon>
          <img src={logo} alt="logo" width="180px" />
          <ExternalLink href="https://moplex.co.ke/">
            <Button>GET APP</Button>
          </ExternalLink>
        </LogoIcon>
      </Container>
    </Navigation>
  );
}

export default Navbar;
