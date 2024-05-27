import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/1.jpg";
import projImg2 from "../assets/img/2.jpg";
import projImg3 from "../assets/img/3.jpg";
import projImg4 from "../assets/img/4.jpg";
import projImg5 from "../assets/img/5.jpg";
import projImg6 from "../assets/img/6.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Improved Reading Fluency",
      description: "Tools and techniques designed to enhance reading speed and accuracy, helping users read more fluently.",
      imgUrl: projImg1,
    },
    {
      title: "Enhanced Writing Skills",
      description: "Features that focus on improving handwriting, spelling, and overall writing abilities, allowing users to express themselves more clearly.",
      imgUrl: projImg2,
    },
    {
      title: "Personalized Learning Paths",
      description: "Customized learning plans tailored to individual needs, providing targeted exercises and activities for each user.",
      imgUrl: projImg3,
    },
    {
      title: "Interactive Learning Tools",
      description: "Engaging and interactive resources, such as quizzes, games, and exercises, designed to make learning enjoyable and effective.",
      imgUrl: projImg4,
    },
    {
      title: "Confidence Building",
      description: "Supportive features that encourage progress and build self-assurance, fostering a positive attitude toward learning.",
      imgUrl: projImg5,
    },
    {
      title: "Reduced Frustration",
      description: "Solutions that address common pain points, reducing stress and making the learning process smoother and more enjoyable.",
      imgUrl: projImg6,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Empowering Learning Experiences</h2>
                <p>Innovative Tools for Reading, Writing, and Personalized Development</p>
                <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
