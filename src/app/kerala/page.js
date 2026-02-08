import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";
import kerala from "../../../public/images/kerala.jpg";
import "../../../public/sass/pages/detailpage.scss";

export default function KeralaDetail() {
  return (
    <div className="detail_page">
      <Container>
        <Row>
          <Col>
            <div className="detail_container">
              <div className="image_section">
                <Image src={kerala} alt="Kerala" />
              </div>
              <div className="content_section">
                <h1>Kerala - God&apos;s Own Country</h1>
                <p>
                  Relax amidst the tranquil backwaters, lush greenery, and serene
                  beaches of South India. Kerala offers peace, nature, and culture
                  in perfect harmony.
                </p>
                <ul>
                  <li> Cruise through Alleppey backwaters</li>
                  <li> Walk through Munnar's tea gardens</li>
                  <li> Enjoy Ayurvedic spas and beaches in Kovalam</li>
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
