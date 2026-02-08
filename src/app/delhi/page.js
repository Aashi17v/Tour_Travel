import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";
import delhi from "../../../public/images/delhi.jpg";
import "../../../public/sass/pages/detailpage.scss";

export default function DelhiDetail() {
  return (
    <div className="detail_page">
      <Container>
        <Row>
          <Col>
            <div className="detail_container">
              <div className="image_section">
                <Image src={delhi} alt="Delhi" />
              </div>
              <div className="content_section">
                <h1>Delhi - The Heart of India</h1>
                <p>
                  Experience the vibrant blend of history and modernity in India&apos;s capital.
                  From ancient Mughal monuments to bustling markets, Delhi offers a journey
                  through time and culture.
                </p>
                <ul>
                  <li> Visit Red Fort and Qutub Minar</li>
                  <li> Explore India Gate and Lotus Temple</li>
                  <li> Shop at Chandni Chowk and Connaught Place</li>
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
