import React, { Fragment } from "react";
import * as bs from "bootstrap/dist/css/bootstrap.css";
import {
  Navbar,
  Form,
  Button,
  FormControl,
  Nav,
  NavDropdown,
} from "react-bootstrap";
import { useHistory } from "react-router-dom";

const Navigation = () => {
  const history = useHistory();
  return (
    <>
      <Navbar bg="dark" expand="lg" varirant="dark">
      <Button variant="light" size="lg" onClick={() => {history.push("/");}}>PGFinder</Button>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Form inline>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
              />
              <Button variant="outline-light">Search</Button>
            </Form>
            <div className="pl-2">
            <Button variant="light" onClick={() => {history.push("/login");}} >Login</Button>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Navigation;
