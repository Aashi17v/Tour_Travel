import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";
import mumbai from "../../../public/images/mumbai.jpg";
import "../../../public/sass/pages/detailpage.scss";

export default function MumbaiDetail() {
  return (
    <div className="detail_page">
      <Container>
        <Row>
          <Col>
            <div className="detail_container">
              <div className="image_section">
                <Image src={mumbai} alt="Mumbai" />
              </div>
              <div className="content_section">
                <h1>Mumbai - City of Dreams</h1>
                <p>
                  Explore the vibrant metropolis, Bollywood glamour, and iconic
                  colonial architecture. Mumbai is where dreams meet reality.
                </p>
                <ul>
                  <li> Visit Gateway of India and Marine Drive</li>
                  <li> Explore Bollywood film studios</li>
                  <li> Try Mumbai's street food - Vada Pav & Pav Bhaji</li>
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
