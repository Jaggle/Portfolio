import { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Navbar,
  Nav,
} from "react-bootstrap";
import { Linkedin } from "react-bootstrap-icons";
import Projects from "./Projects";
import "./scss/index.scss";
import Info from "./Info";
import Background from "./background";

function App() {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  });

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <div className="App">
      <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
        <Container fluid>
          <Navbar.Brand href="#home">Jason Miller</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon "></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link
                href="#home"
                className={
                  activeLink === "home" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("home")}
              >
                Home
              </Nav.Link>
              <Nav.Link
                href="#projects"
                className={
                  activeLink === "projects"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("projects")}
              >
                Projects
              </Nav.Link>
              <Nav.Link
                href="#info"
                className={
                  activeLink === "info" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("info")}
              >
                Info
              </Nav.Link>
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

      <header className="App-header" id="home">
        <Background></Background>
      </header>
      <Projects></Projects>
      <Info></Info>
      <footer className="App-footer" id="about">
        <div>Copyright &copy; 2023</div>
        <div>
          This website was made for a AI assisted development experiment!
        </div>
      </footer>
    </div>
  );
}

export default App;
