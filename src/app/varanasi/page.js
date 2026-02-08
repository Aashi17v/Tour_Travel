import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";
import varanasi from "../../../public/images/varanasi.jpg";
import "../../../public/sass/pages/detailpage.scss";

export default function VaranasiDetail() {
  return (
    <div className="detail_page">
      <Container>
        <Row>
          <Col>
            <div className="detail_container">
              <div className="image_section">
                <Image src={varanasi} alt="Varanasi" />
              </div>
              <div className="content_section">
                <h1>Varanasi - The Spiritual Capital</h1>
                <p>
                  Experience the divine atmosphere of India&apos;s oldest living city.
                  Watch the mesmerizing Ganga Aarti, explore ancient ghats, and
                  feel the spiritual pulse of the sacred river.
                </p>
                <ul>
                  <li> Witness the Ganga Aarti at Dashashwamedh Ghat</li>
                  <li> Take a boat ride on the Ganges at sunrise</li>
                  <li> Visit Kashi Vishwanath Temple</li>
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
