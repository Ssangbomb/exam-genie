import React from "react";
import Particle from "./Particle";
import { Container, Row, Col } from "react-bootstrap";
import "../styles/style.scss";
import Exam from "../components/ExamGenerated";
import Sidebar from "../components/sidebar/Sidebar";

function Home() {
  return (
    <Container fluid className="project-section">
      <div><Sidebar /></div>
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <Exam />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home;
