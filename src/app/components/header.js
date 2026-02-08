import Image from "next/image";
import logo from "../../../public/images/logo.png";
import { Col, Container, Row } from "react-bootstrap";
import "../../../public/sass/homepage/header.scss";

export default function Header() {
    return (
        <>
        <div className="main_container">
            <Container>
                <Row>
                    <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                    <div className="inner_area">
                        <div className="logo">
                        <Image src={logo} alt="logo" height={100} width={216} fetchPriority="high"></Image>
                        </div>
                        <div className="listing">
                           <ul>
                            <li><a href="/homepage">Home</a></li>
                            <li><a href="/about_us">About Us</a></li>
                            <li><a href="/destinations">Destinations</a></li>
                            <li><a href="/cultural">Culture & Heritage</a></li>
                            <li><a href="/ticket_booking">Ticket Booking</a></li>
                            <li><a href="/contact_us">Contact Us</a></li>
                           </ul>
                        </div>
                    </div>
                    </Col>
                </Row>
            </Container>
        </div>
        </>
    )
}
