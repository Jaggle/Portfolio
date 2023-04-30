import React from "react";
import { Container, Row, Col, ListGroup } from "react-bootstrap";
import "./scss/info.scss";

const Info = () => {
  return (
    <Container fluid id="info">
      <Row>
        <Col md={8}>
          <div className="info-header">
            <h2>Info</h2>
            <div className="info-content">
              <p>
                I'm a reliable and kind professional with a passion for creative
                problem-solving with interaction, user experience, research, and
                human-centered design. My exceptional communication and
                management skills, honed through my experience as a team lead,
                make me an asset to any project. My ultimate goal is to
                understand users and their needs, developing intuitive design
                solutions and insightful interactions that exceed expectations.
              </p>
              <p>
                I'm always open to explore full-time or freelance opportunities
                in UI/UX and Front End development fields, eager to utilize my
                expertise and creativity to make a significant impact on any
                project.
              </p>
            </div>
          </div>
        </Col>
        <Col md={4}></Col>
      </Row>
      <Row>
        <Col xs={10} sm={8} md={6}>
          <h1>
            Do I have your attention? <br />
            Let's do this!
          </h1>
        </Col>
      </Row>
      <Row>
        <Col xs={10} sm={8} md={6}>
          <ListGroup>
            <ListGroup.Item>
              <a href="/">link</a>
            </ListGroup.Item>
            <ListGroup.Item>
              <a href="/">link</a>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default Info;
