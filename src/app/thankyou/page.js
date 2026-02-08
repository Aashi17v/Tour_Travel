import Image from "next/image";
import thankyou from "../../../public/images/thankyou.png";
import { Col, Container, Row } from "react-bootstrap";
import "../../../public/sass/pages/thankyou.scss";
import Link from "next/link";

export default function Thankyou() {
    return (
        <>
            <div className="main_head">
                <Container>
                    <Row>
                        <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                            <div className="inner_container">
                                <div className="image_area">
                                    <Image src={thankyou} alt="image" fetchPriority="low"></Image>
                                </div>
                                <div className="content_area">
                                    <h1>Thank You for Connecting with Us!</h1>
                                    <p>
                                        Your journey to explore the colors, culture, and beauty of BharatYatra has just begun.
                                        Our travel experts will get in touch with you shortly to help you create unforgettable memories.
                                    </p>
                                     <Link href="/homepage">
                                        <button>
                                           Back to Home
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}