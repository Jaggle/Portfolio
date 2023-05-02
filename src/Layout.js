import { Container, Navbar, Nav } from "react-bootstrap";
import { Linkedin } from "react-bootstrap-icons";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="App">
      <Navbar expand="lg">
        <Container fluid>
          <Navbar.Brand href="#home">Jason Miller</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon "></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#projects">Projects</Nav.Link>
              <Nav.Link href="#info">Info</Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://www.linkedin.com/in/jason-miller-01/">
                  <Linkedin size={32} />
                </a>
              </div>
              <a href="#contact">
                <button className="vvd">
                  <span>Let's Connect</span>
                </button>
              </a>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
      <footer className="App-footer">
        <div>Copyright &copy; 2023</div>
        <div>
          This website was made for a AI assisted development experiment!
        </div>
      </footer>
    </div>
  );
}

export default Layout;
