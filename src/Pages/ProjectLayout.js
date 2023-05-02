import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../scss/ProjectLayout.scss"; // import your SCSS file

function ProjectLayout({
  title,
  description,
  scope,
  completedAs,
  duration,
  tools,
  headerVideo,
  process,
}) {
  return (
    <Container fluid>
      <h1 className="project-title">{title}</h1>
      <Row>
        <Col md={6}>
          <p className="project-description">{description}</p>
        </Col>
        <Col md={6}>
          <div className="project-info">
            <p>
              <strong>Scope:</strong> {scope}
            </p>
            <p>
              <strong>Completed As:</strong> {completedAs}
            </p>
            <p>
              <strong>Duration:</strong> {duration}
            </p>
            <p>
              <strong>Tools:</strong> {tools}
            </p>
          </div>
        </Col>
      </Row>
      <video className="project-video" controls>
        <source src={headerVideo} type="video/mp4" />
      </video>
      <p className="project-process">{process}</p>
    </Container>
  );
}

export default ProjectLayout;
