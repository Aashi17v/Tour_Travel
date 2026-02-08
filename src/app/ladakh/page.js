import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";
import ladakh from "../../../public/images/ladakh.jpg";
import "../../../public/sass/pages/detailpage.scss";

export default function LadakhDetail() {
  return (
    <div className="detail_page">
      <Container>
        <Row>
          <Col>
            <div className="detail_container">
              <div className="image_section">
                <Image src={ladakh} alt="Ladakh" />
              </div>
              <div className="content_section">
                <h1>Ladakh - The Land of High Passes</h1>
                <p>
                  Adventure meets tranquility in the rugged landscapes of Ladakh.
                  Explore serene monasteries, turquoise lakes, and breathtaking mountain passes.
                </p>
                <ul>
                  <li> Visit Pangong Lake and Nubra Valley</li>
                  <li> Drive through Khardung La - one of the highest motorable roads</li>
                  <li> Explore ancient monasteries like Hemis and Thiksey</li>
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
