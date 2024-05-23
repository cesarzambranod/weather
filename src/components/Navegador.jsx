import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import reactLogo from '../assets/react.svg'

const Navegador = () => {
  return (
    <>
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={reactLogo}
              width="30"
              height="30"
              className="d-inline-block align-top logo"
            />{" "}
            React Bootstrap
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default Navegador;
