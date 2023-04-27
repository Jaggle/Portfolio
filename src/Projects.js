import React, { useState } from "react";
import { Container, Row, Col, ListGroup, Image } from "react-bootstrap";
import "./scss/index.scss";

const projects = [
  {
    id: 1,
    title: "Project 1",
    image: "https://via.placeholder.com/350x150",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed volutpat nisl id sapien consectetur, a sodales ipsum blandit.",
  },
  {
    id: 2,
    title: "Project 2",
    image: "https://via.placeholder.com/350x150",
    description:
      "Sed volutpat nisl id sapien consectetur, a sodales ipsum blandit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 3,
    title: "Project 3",
    image: "https://via.placeholder.com/350x150",
    description:
      "Aenean tempor est eu felis luctus, non commodo enim rhoncus. Integer quis velit vitae nulla vehicula sagittis in eget augue.",
  },
];

function Projects() {
  const [selectedProjectId, setSelectedProjectId] = useState(1);

  const handleProjectClick = (projectId) => {
    setSelectedProjectId(projectId);
  };

  return (
    <Container fluid id="projects">
      <Row>
        <Col lg={6} md={6}>
          <ListGroup>
            {projects.map((project) => (
              <ListGroup.Item
                key={project.id}
                action
                active={selectedProjectId === project.id}
                onClick={() => handleProjectClick(project.id)}
              >
                {project.title}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
        <Col lg={6} className="d-none d-md-block">
          <div>{selectedProjectId}</div>
          <Image
            src={projects.find((p) => p.id === selectedProjectId).image}
            fluid
            rounded
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Projects;
