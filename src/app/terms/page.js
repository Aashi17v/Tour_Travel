import { Col, Container, Row } from "react-bootstrap";
import "../../../public/sass/pages/terms.scss";

export default function Terms() {
  return (
    <>
      <div className="main_area">
        <Container>
          <Row>
            <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
              <div className="inner_area">
                <h1>Terms and Conditions</h1>
                <h2>General Information</h2>
                <p>Our website provides ticket booking services for travel, cultural events, and tourism experiences across India. We also share information about India’s destinations, traditions, and heritage to help travelers plan meaningful journeys.</p>
                <h2>Use of Our Platform</h2>
                  <ul>
                    <li>You are responsible for providing accurate details during booking or registration.</li>
                    <li>You agree to use the website only for lawful purposes.</li>
                    <li>You shall not misuse the website for fraudulent, illegal, or harmful activities.</li>
                  </ul>
                <h2>Travel and Heritage Content</h2>
                <p>
                  We provide content on India’s culture, heritage sites, and destinations for informational purposes only.
                  While we strive for accuracy, we do not guarantee that all travel information, timings, or details are completely up-to-date or error-free.
                </p>
                <h2>Third-Party Links</h2>
                <p>Our Platform may include links to third-party websites or services. We are not responsible for the content, accuracy, or privacy practices of such sites.</p>
                
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}