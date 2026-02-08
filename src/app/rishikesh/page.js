import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";
import rishikesh from "../../../public/images/rishikesh.jpg";
import "../../../public/sass/pages/detailpage.scss";

export default function RishikeshDetail() {
  return (
    <div className="detail_page">
      <Container>
        <Row>
          <Col>
            <div className="detail_container">
              <div className="image_section">
                <Image src={rishikesh} alt="Rishikesh" />
              </div>
              <div className="content_section">
                <h1>Rishikesh - The Yoga Capital</h1>
                <p>
                  Find peace and adventure in Rishikesh. Meditate by the Ganges,
                  attend yoga retreats, or enjoy thrilling river rafting.
                </p>
                <ul>
                  <li> Join yoga sessions by the river</li>
                  <li> Try white-water rafting on the Ganga</li>
                  <li> Walk across the famous Laxman Jhula</li>
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
