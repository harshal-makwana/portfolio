import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import chatbot from "../../Assets/Projects/thechatbot.png";
import tictactoe from "../../Assets/Projects/tictactoe.png";
import mailandesha from "../../Assets/Projects/mailandesha.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mailandesha}
              isBlog={false}
              title="Mailandesha"
              description="An email marketing site with wich you can create your  personized campaigns "
              ghLink="https://github.com/harshal-makwana/mailandesha-client"
              demoLink="https://mailandesha.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tictactoe}
              isBlog={false}
              title="Tic-Tac-Toe"
              description="TIC_TAC_TOE game with minimax algorithm which is unbeatable"
              ghLink="https://unbeatable-tic-tac-toe-ai.netlify.app/"
              demoLink="https://unbeatable-tic-tac-toe-ai.netlify.app/"
            />
          </Col>

          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={"https://cdn.analyticsvidhya.com/wp-content/uploads/2020/08/Sentiment-Analysis-scaled.jpg"}
              isBlog={false}
              title="Sentiment_Analysis"
              description="Sentiment_Analysis for movie reviews using LSTM and Attension mechanism "
              ghLink="https://unbeatable-tic-tac-toe-ai.netlify.app/"
              // demoLink="hhttps://unbeatable-tic-tac-toe-ai.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatbot}
              isBlog={false}
              title="Ana_the_chatBot"
              description="AI chatbot for tasks like : Text summarey , Ai chatbot, Image creation and JS converter"
              ghLink="https://github.com/harshal-makwana/chatbotgpt"
              demoLink="https://anathechatbot.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
