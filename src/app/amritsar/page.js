import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";
import amritsar from "../../../public/images/amritsar.jpg";
import "../../../public/sass/pages/detailpage.scss";

export default function AmritsarDetail() {
  return (
    <div className="detail_page">
      <Container>
        <Row>
          <Col>
            <div className="detail_container">
              <div className="image_section">
                <Image src={amritsar} alt="Amritsar" />
              </div>
              <div className="content_section">
                <h1>Amritsar - The Golden City</h1>
                <p>
                  The spiritual heart of Punjab, Amritsar shines with faith, culture, and
                  hospitality. Visit the serene Golden Temple and experience unity in diversity.
                </p>
                <ul>
                  <li> Seek peace at the Golden Temple</li>
                  <li> Witness the Wagah Border ceremony</li>
                  <li> Relish authentic Punjabi cuisine at local dhabas</li>
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
