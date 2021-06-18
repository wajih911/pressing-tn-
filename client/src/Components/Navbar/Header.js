import React from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import {
  Nav,
  Container,
  Navbar,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import "./Header.css";
import { logout } from "../../Redux/actions/user";
function Header() {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.userReducer.isAuth);
  return (
    <div className="navbar_total">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Link to="/">
            {" "}
            <img src={logo} className="logo" alt="React Bootstrap logo" />
          </Link>
          ;
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" className="flexend">
            <Nav>
              <Link to="/tarifs">
                <Nav.Link href="#deets">Tarifs</Nav.Link>
              </Link>
              <Link to="/services">
                <Nav.Link eventKey={2} href="#memes">
                  Services
                </Nav.Link>{" "}
              </Link>
              {isAuth ? (
                <Link to="/">
                  <Nav.Link href="#deets" onClick={() => dispatch(logout())}>
                    Se déconnecter
                  </Nav.Link>
                </Link>
              ) : (
                <>
                  <Link to="/registre">
                    <Nav.Link href="#deets">S'inscrire</Nav.Link>
                  </Link>
                  <Link to="login">
                    <Nav.Link eventKey={2} href="#memes">
                      Se connecter
                    </Nav.Link>
                  </Link>
                </>
              )}
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="mr-2"
                aria-label="Search"
              />
              <Button variant="light">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
        <div className="footer"></div>
      </Navbar>
    </div>
  );
}

export default Header;
