import react from "react";
import { Container, Navbar, Button } from "react-bootstrap";
import LogoRedux from "../assets/img/redux.png";

export default function Menu() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>
          <img
            alt="Tweets Simulator Redux"
            src={LogoRedux}
            width="30"
            height="30"
            className="d-inline-block align-top me-4"
          />
          Tweets Simulator REDUX
        </Navbar.Brand>
        <Button variant="outline-success">Nuevo Tweet</Button>
      </Container>
    </Navbar>
  );
}
