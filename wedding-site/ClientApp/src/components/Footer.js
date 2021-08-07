import React from "react";
import { Container, Navbar, NavbarBrand} from 'reactstrap';

import './Footer.css';

function Footer() {
  return (
          <Navbar fixed="bottom" color="dark" dark>
              <Container>
                  <NavbarBrand>Footer</NavbarBrand>
              </Container>
          </Navbar>
  );
}

export default Footer;
