import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";
import goa from "../../../public/images/goa.jpg";
import "../../../public/sass/pages/detailpage.scss";

export default function GoaDetail() {
  return (
    <div className="detail_page">
      <Container>
        <Row>
          <Col>
            <div className="detail_container">
              <div className="image_section">
                <Image src={goa} alt="Goa" />
              </div>
              <div className="content_section">
                <h1>Goa - Sun, Sand, and Sea</h1>
                <p>
                  Unwind on golden beaches, enjoy vibrant nightlife, and explore
                  Portuguese heritage architecture. Goa is India's tropical paradise.
                </p>
                <ul>
                  <li> Relax at Baga and Calangute beaches</li>
                  <li> Party at beach shacks and clubs</li>
                  <li> Visit Old Goa churches and forts</li>
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
