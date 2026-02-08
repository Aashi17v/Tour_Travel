import Image from "next/image";
import heritage from "../../../public/images/heritage.png";
import "../../../public/sass/homepage/heritage.scss";
import { Col, Container, Row } from "react-bootstrap";
import Link from "next/link";

export default function Heritage() {
    return (
        <>
            <div className="heritage">
                <h2>Rich Culture & Heritage</h2>
                <div className="content_area">
                    <Container>
                        <Row>
                            <Col xxl={6} xl={6} lg={6} md={6} sm={12} xs={12}>
                                <div className="left_area">
                                    <p>
                                        India is a land where ancient traditions meet modernity.Its rich tapestry of cultures,languages,and religions has shaped a unique heritage that dates back thousands of years.From the grandeur of its historical monuments to the intricate details of its art forms,every corner of india tells a story.Experience the magic of classical dances,soulful music,vibrant festivals,and diverse culinary delights that reflect the true essence of its people.
                                    </p>
                                    <Link href="/cultural">
                                        <button>
                                            Discover Culture
                                        </button>
                                    </Link>
                                </div>
                            </Col>
                            <Col xxl={6} xl={6} lg={6} md={6} sm={12} xs={12}>
                                <div className="right_area">
                                    <Image src={heritage} alt="heritage" fetchPriority="low"></Image>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </>
    )
}