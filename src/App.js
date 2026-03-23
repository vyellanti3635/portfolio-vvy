import React, { useState } from 'react';
import { Navbar, Nav, Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message, ' + formData.name + '!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="App">
      {/* Navigation */}
      <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
        <Container>
          <Navbar.Brand href="#home" className="brand-text">VVY</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#projects">Projects</Nav.Link>
              <Nav.Link href="#resume">Resume</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Hero Section */}
      <section id="home" className="hero-section">
        <Container>
          <h1 className="hero-title">Vivek Yellanti</h1>
          <h3 className="hero-subtitle">Full Stack Web Developer</h3>
          <p className="hero-bio">
            Passionate about building web applications with modern technologies.
            Currently studying at Westcliff University, specializing in front-end
            and back-end development.
          </p>
          <Button variant="outline-light" href="#projects" className="mt-3">
            View My Work
          </Button>
        </Container>
      </section>

      {/* About Section */}
      <section id="about" className="about-section py-5">
        <Container>
          <h2 className="section-title">About Me</h2>
          <Row className="justify-content-center">
            <Col md={8}>
              <p>
                I am a web developer with experience in HTML, CSS, JavaScript,
                React, Node.js, and MongoDB. I enjoy creating clean, responsive
                websites and web applications. I am always looking to learn new
                technologies and improve my skills.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects-section py-5">
        <Container>
          <h2 className="section-title">Projects</h2>
          <Row>
            <Col md={4} className="mb-4">
              <Card className="project-card">
                <Card.Body>
                  <Card.Title>Shop 2 React</Card.Title>
                  <Card.Text>
                    A shopping cart application built with React featuring product
                    listing, cart management, and Facebook OAuth login.
                  </Card.Text>
                  <Button variant="primary" size="sm" className="me-2">Live Demo</Button>
                  <Button variant="outline-secondary" size="sm">GitHub</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="project-card">
                <Card.Body>
                  <Card.Title>CRUD App</Card.Title>
                  <Card.Text>
                    A full CRUD application using React with JSON Server for
                    creating, reading, updating, and deleting book lists.
                  </Card.Text>
                  <Button variant="primary" size="sm" className="me-2">Live Demo</Button>
                  <Button variant="outline-secondary" size="sm">GitHub</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="project-card">
                <Card.Body>
                  <Card.Title>Facebook Login App</Card.Title>
                  <Card.Text>
                    A React application integrating Facebook OAuth for user
                    authentication with profile data display.
                  </Card.Text>
                  <Button variant="primary" size="sm" className="me-2">Live Demo</Button>
                  <Button variant="outline-secondary" size="sm">GitHub</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Resume Section */}
      <section id="resume" className="resume-section py-5">
        <Container>
          <h2 className="section-title">Resume</h2>
          <Row className="justify-content-center">
            <Col md={8}>
              <Card>
                <Card.Body>
                  <h4>Skills</h4>
                  <p>HTML, CSS, JavaScript, React, Node.js, MongoDB, Bootstrap, Git</p>
                  <h4>Education</h4>
                  <p>Westcliff University - Web Development Bootcamp</p>
                  <Button variant="primary" className="mt-2">Download Resume (PDF)</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section py-5">
        <Container>
          <h2 className="section-title">Contact</h2>
          <Row className="justify-content-center">
            <Col md={6}>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="Your email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={4}
                    name="message"
                    placeholder="Your message"
                    value={formData.message}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Button variant="primary" type="submit">Send Message</Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Footer */}
      <footer className="footer-section py-3">
        <Container>
          <p className="mb-0">&copy; 2026 Vivek Yellanti. All rights reserved.</p>
        </Container>
      </footer>
    </div>
  );
}

export default App;
