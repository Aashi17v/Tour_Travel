import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";
import jaipur from "../../../public/images/jaipur.jpg";
import "../../../public/sass/pages/detailpage.scss";

export default function JaipurDetail() {
  return (
    <div className="detail_page">
      <Container>
        <Row>
          <Col>
            <div className="detail_container">
              <div className="image_section">
                <Image src={jaipur} alt="Jaipur" />
              </div>
              <div className="content_section">
                <h1>Jaipur - The Pink City</h1>
                <p>
                  Discover the royal charm of Rajasthan through the magnificent palaces,
                  forts, and vibrant markets of Jaipur. From the majestic Amber Fort
                  to the historic Hawa Mahal, Jaipur paints a picture of regal splendor.
                </p>
                <ul>
                  <li> Visit Amber Fort and Nahargarh Fort</li>
                  <li> Explore colorful bazaars for handicrafts</li>
                  <li> Relish Rajasthani cuisine at local dhabas</li>
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
