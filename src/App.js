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

const projects = [
  {
    id: 1,
    title: "Project 1",
    image: "https://via.placeholder.com/350x150",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed volutpat nisl id sapien consectetur, a sodales ipsum blandit.",
    link: "https://example.com/project1",
  },
  {
    id: 2,
    title: "Project 2",
    image: "https://via.placeholder.com/350x150",
    description:
      "Sed volutpat nisl id sapien consectetur, a sodales ipsum blandit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    link: "https://example.com/project2",
  },
  {
    id: 3,
    title: "Project 3",
    image: "https://via.placeholder.com/350x150",
    description:
      "Aenean tempor est eu felis luctus, non commodo enim rhoncus. Integer quis velit vitae nulla vehicula sagittis in eget augue.",
    link: "https://example.com/project3",
  },
];

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
        <Container>
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
        <p>Copyright &copy; 2023</p>
      </footer>
    </div>
  );
}

export default App;
