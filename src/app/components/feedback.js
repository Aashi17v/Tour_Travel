import { Col, Container, Row } from "react-bootstrap";
import "../../../public/sass/homepage/feedback.scss";
export default function Feedback() {
    return (
        <>
            <div className="outer_area">
                <h2>
                    What Our Travelers Say
                </h2>
                <div className="inner_area">
                    <Container>
                        <Row>
                            <Col xxl={4} xl={4} lg={4} md={6} sm={6} xs={12}>
                                <div className="card_area">
                                    <div className="paragraph">
                                        "Incredible India Tours truly delivered an unforgettable experience.The planning was flawless,and our guide was exceptional."
                                    </div>
                                    <div className="name">
                                        Sarah J.
                                    </div>
                                    <div className="description">
                                        Adventurer from USA
                                    </div>
                                </div>
                            </Col>
                            <Col xxl={4} xl={4} lg={4} md={6} sm={6} xs={12}>
                                <div className="card_area">
                                    <div className="paragraph">
                                        "From the majestic Taj Mahal to the serene backwaters of kerala,every moment was magical.Thank you for showing real India."
                                    </div>
                                    <div className="name">
                                        David R.
                                    </div>
                                    <div className="description">
                                        Travel Enthusiast from UK
                                    </div>
                                </div>
                            </Col>
                            <Col xxl={4} xl={4} lg={4} md={6} sm={6} xs={12}>
                                <div className="card_area">
                                    <div className="paragraph">
                                        "The cultural immersion wa profound.I learned so much and felt completely safe and well-cared for thorughout my journey."
                                    </div>
                                    <div className="name">
                                        Priya S.
                                    </div>
                                    <div className="description">
                                        Culture Seeker from Canada
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