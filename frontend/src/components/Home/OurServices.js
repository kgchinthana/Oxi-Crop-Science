import { Container, Col, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import agricultureServiceImg1 from "../images/soil.jpg";
import agricultureServiceImg2 from "../images/spreding.jpg";
import agricultureServiceImg3 from "../images/watersupply.jpg";
import agricultureServiceImg4 from "../images/technology.jpg";
import agricultureServiceImg5 from "../images/expert.jpg";
import agricultureServiceImg6 from "../images/equipment.jpg";
import recoveryImg from "../images/contact.jpg";
import brandLogos from "../images/logo.png";
import "../../styles/ourservices.css";

function OurServices() {
  const hotline = "01234567891";
  const cardStyle = { height: "100%" }; // Set a fixed height for the cards

  return (
    <>
      <section>
        <Container>
          <h2>Agriculture Services</h2>
          <Row>
            <Col md={6} lg={4} className="mb-4">
              <Card style={cardStyle}>
                <Card.Img variant="top" src={agricultureServiceImg1} />
                <Card.Body>
                  <Card.Title>Soil Analysis</Card.Title>
                  <div className="cardText">
                    In-depth soil analysis for precise nutrient management,
                    ensuring optimal conditions for your crops.
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={4} className="mb-4">
              <Card style={cardStyle}>
                <Card.Img variant="top" src={agricultureServiceImg2} />
                <Card.Body>
                  <Card.Title>Pest Control</Card.Title>
                  <div className="cardText">
                    Effective pest control solutions to protect your crops from
                    infestations and ensure healthy growth.
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={4} className="mb-4">
              <Card style={cardStyle}>
                <Card.Img variant="top" src={agricultureServiceImg3} />
                <Card.Body>
                  <Card.Title>Water Management</Card.Title>
                  <div className="cardText">
                    Advanced water management strategies to optimize irrigation
                    and conserve water resources in agriculture.
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col md={6} lg={4} className="mb-4">
              <Card style={cardStyle}>
                <Card.Img variant="top" src={agricultureServiceImg4} />
                <Card.Body>
                  <Card.Title>Crop Monitoring</Card.Title>
                  <div className="cardText">
                    Utilize cutting-edge technology for real-time crop
                    monitoring, ensuring early detection of issues.
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={4} className="mb-4">
              <Card style={cardStyle}>
                <Card.Img variant="top" src={agricultureServiceImg5} />
                <Card.Body>
                  <Card.Title>Organic Farming</Card.Title>
                  <div className="cardText">
                    Expert guidance on transitioning to sustainable and organic
                    farming practices for healthier produce.
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={4} className="mb-4">
              <Card style={cardStyle}>
                <Card.Img variant="top" src={agricultureServiceImg6} />
                <Card.Body>
                  <Card.Title>Equipment Maintenance</Card.Title>
                  <div className="cardText">
                    Comprehensive maintenance services for agricultural
                    equipment, ensuring their longevity and efficiency.
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <div className="row align-items-center">
            <div className="col-md-6">
              <h2>24x7 Agriculture Recovery Service</h2>
              <div className="recTxt">
                Crop Consultation Assistance Field Emergency Support Harvesting Equipment Breakdowns Crop Transport Services
              </div>
              <a
                className="btn btn-primary btn-xlg"
                href={`tel:${hotline}`}
                style={{ padding: "20px", marginTop: "20px" }}
              >
                ☎️ Click to Call {hotline}
              </a>
            </div>
            <div className="col-md-6">
              <img src={recoveryImg} alt="Recovery Service" />
            </div>
          </div>
        </Container>
      </section>
      <section>
        <Container className="my-5">
          <h2>We've Got All Your Agriculture Needs Covered</h2>
          <img src={brandLogos} alt="Brand Logos" />
        </Container>
      </section>
    </>
  );
}

export default OurServices;
