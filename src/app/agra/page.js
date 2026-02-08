import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";
import agra from "../../../public/images/agra.jpg";
import "../../../public/sass/pages/detailpage.scss";

export default function AgraDetail() {
  return (
    <div className="detail_page">
      <Container>
        <Row>
          <Col>
            <div className="detail_container">
              <div className="image_section">
                <Image src={agra} alt="Agra" />
              </div>
              <div className="content_section">
                <h1>Agra - The City of Love</h1>
                <p>
                  Home to the iconic Taj Mahal, Agra stands as a symbol of eternal love and
                  Mughal grandeur. Walk through the pages of history and witness architectural brilliance.
                </p>
                <ul>
                  <li> Visit the Taj Mahal and Agra Fort</li>
                  <li> Explore Mehtab Bagh for a sunset view of the Taj</li>
                  <li> Shop for marble crafts and leather goods</li>
                </ul>
                <div className="buttons">
                  <Link href="/ticket_booking"><button className="book_now">Book Now</button></Link>
                  <Link href="/homepage"><button className="back_btn">Back to Home</button></Link>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
