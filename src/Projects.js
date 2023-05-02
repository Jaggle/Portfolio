import React, { useState } from "react";
import { Container, Row, Col, ListGroup, Image } from "react-bootstrap";
import "./scss/projects.scss";
import { Link } from "react-router-dom";
const projects = [
  {
    id: 1,
    route: "/Portfolio",
    title: "Portfolio",
    image: "https://via.placeholder.com/350x150",
    description: "AI Development Exercise",
    topic: "AI, Web Design",
  },
  {
    id: 2,
    route: "/ArcticFX",
    title: "ArcticFX Graphics",
    image: "https://via.placeholder.com/350x150",
    description: "Ecommerce Platform",
    topic: "Branding, Web Design",
  },
  {
    id: 3,
    route: "/NightSky",
    title: "Night Sky Shader",
    image: "https://via.placeholder.com/350x150",
    description: "Unity Shader Material",
    topic: "Graphics, Game Development",
  },
];

function Projects() {
  const [selectedProjectId, setSelectedProjectId] = useState(1);

  const handleProjectHover = (projectId) => {
    setSelectedProjectId(projectId);
  };

  return (
    <Container fluid id="projects">
      <Row>
        <Col lg={6} md={6} className="proj-col">
          <h2>Projects</h2>
          <ListGroup>
            {projects.map((project) => (
              <ListGroup.Item
                key={project.id}
                action
                active={selectedProjectId === project.id}
                onMouseOver={() => handleProjectHover(project.id)}
              >
                <Link to={project.route}>
                  <div className="title">{project.title}</div>
                  <div className="desc">{project.description}</div>
                  <div className="topic">{project.topic}</div>
                </Link>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
        <Col lg={6} md={6} className="d-none d-md-block img-col">
          <Image
            src={projects.find((p) => p.id === selectedProjectId).image}
            fluid
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Projects;
