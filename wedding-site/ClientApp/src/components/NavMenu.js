import React, { Component } from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';

export class NavMenu extends Component {
  static displayName = NavMenu.name;

  constructor (props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar () {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render () {
      return (
        <div className="header">
              <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white box-shadow mb-3 " dark>
                  <Container>
            <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
                      <Collapse className="d-sm-inline-flex justify-content-center" isOpen={!this.state.collapsed} navbar>
              <ul className="navbar-nav flex-grow">
                <NavItem>
                  <NavLink tag={Link} className="text-light" to="/home">Hem</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} className="text-light" to="/rsvp">Osa</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} className="text-light" to="/sleeping">Sovplats</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink tag={Link} className="text-light" to="/speech">Tal</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink tag={Link} className="text-light" to="/gifts">Gåvor</NavLink>
                </NavItem>
              </ul>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}
