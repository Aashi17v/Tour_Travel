import { Col, Container, Row } from "react-bootstrap";
import "../../../public/sass/pages/contact_us.scss";
import Link from "next/link";

export default function ContactUs() {
    return (
        <>
            <div className="contact">
                <div className="content_area">
                    <Container>
                        <Row>
                            <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                                <div className="head_area">
                                    <h2>Connect With Us</h2>
                                    <p>Heve questions or need assistance planning your dream trip? Reach to our expert team.</p>
                                </div>
                                <div className="form_area">
                                    <div className="form_content">
                                        <Row>
                                            <Col xxl={6} xl={6} lg={6} md={6} sm={12} xs={12}>
                                                <div className="form">
                                                    <label>Full Name</label>
                                                    <input type="text" placeholder="Your Name" />
                                                </div>
                                            </Col>
                                            <Col xxl={6} xl={6} lg={6} md={6} sm={12} xs={12}>
                                                <div className="form">
                                                    <label>Email</label>
                                                    <input type="email" placeholder="your.email@example.com" />
                                                </div>
                                            </Col>
                                        </Row>
                                        <div className="form">
                                            <label>Subject</label>
                                            <input type="text" placeholder="Inquiry about tours, booking, etc." />
                                        </div>
                                        <div className="form">
                                            <label>Message</label>
                                            <textarea rows="5" placeholder="Tell us about your travel plans or questions." />
                                        </div>
                                        <Link href="/thankyou">
                                            <button type="submit">Submit Inquiry</button>
                                        </Link>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </>
    )
}