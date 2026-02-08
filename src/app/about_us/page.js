import { Col, Container, Row } from "react-bootstrap";
import "../../../public/sass/pages/about_us.scss";
import about1 from "../../../public/images/about1.png";
import about2 from "../../../public/images/about2.png";
import about3 from "../../../public/images/about3.png";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpenReader, faCrown, faGlobe, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { faGem, faHeart } from "@fortawesome/free-regular-svg-icons";

export default function AboutUs() {
    return (
        <>
            <div className="outer_area">
                <div className="first_area">
                    <Container>
                        <Row>
                            <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                                <div className="content_area">
                                    <h2>Our Mission & Values</h2>
                                    <p>
                                        At Incredible India Tours,our mission is to showcase the breathtaing beauty,rich culture,and profound history of india to travelers worldwide.We are committted to providing authentic,sustainable,and personalized journeys that go beyond sightseeing,fosterig deep connections and unforgettable memories.
                                    </p>
                                    <p>
                                        our values of respect,integrity,passion,and excellence guide every aspect of our operations,ensuring that every tour contributes positively to local communities and preserves India's heritage for future generations.
                                    </p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className="second_area">
                    <Container>
                        <Row>
                            <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                                <div className="section_area">
                                    <h2>Our Story: A Journey Through India</h2>
                                    <div className="section">
                                        <Row>
                                            <Col xxl={6} xl={6} lg={6} md={6} sm={6} xs={12}>
                                                <div className="image_area">
                                                    <Image src={about1} alt="about1" fetchPriority="low"></Image>
                                                </div>

                                            </Col>
                                            <Col xxl={6} xl={6} lg={6} md={6} sm={6} xs={12}>
                                                <div className="description">
                                                    <h3>The Beginning: A Dream Unfolded(2005)</h3>
                                                    <p>
                                                        Incredible India Tours was founded in 2005 by a group of passionate travelers with a shared dream: to share the magic of India with the World.Starting with humble beginnings,organinizing small group tours to Rajasthan's vibrant cities,we focused on authentic experiences and personlized service.
                                                    </p>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="section">
                                        <Row>
                                            <Col xxl={6} xl={6} lg={6} md={6} sm={6} xs={12}>
                                                <div className="description">
                                                    <h3>Expanding Horizons & Cultural Immersion(2010)</h3>
                                                    <p>
                                                        By 2010,our reputation for unique cultural Immersion grew. We expanded our offerings to include spiritual journeys to varanasi,culinary tours in Delhi,and wildlife safaris in natioal parks.We established strong patnership with local guides and artisans,enriching every traveler's experience.
                                                    </p>
                                                </div>
                                            </Col>
                                            <Col xxl={6} xl={6} lg={6} md={6} sm={6} xs={12}>
                                                <div className="image_area">
                                                    <Image src={about2} alt="about2" fetchPriority="low"></Image>
                                                </div>

                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="section">
                                        <Row>
                                            <Col xxl={6} xl={6} lg={6} md={6} sm={6} xs={12}>
                                                <div className="image_area">
                                                    <Image src={about3} alt="about3" fetchPriority="low"></Image>
                                                </div>
                                            </Col>
                                            <Col xxl={6} xl={6} lg={6} md={6} sm={6} xs={12}>
                                                <div className="description">
                                                    <h3>Sustainable Growth & Global Recognition(Present)</h3>
                                                    <p>
                                                        Today,Incredible India Tours is a recognized leader in bespoke Indian travel,lauded for our commitment to sustainable tourism practices and exceptional customer service.We continue to innovate,offering new itineraries that cater to every passion,from adventure to wellness,always with the spirit of India at heart.
                                                    </p>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className="third_area">
                    <Container>
                        <Row>
                            <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                                <div className="head_area">
                                    <h2>What Makes Us Different</h2>
                                    <div className="content_area">
                                        <Container>
                                            <Row>
                                                <Col xxl={4} xl={4} lg={4} md={4} sm={6} xs={12}>
                                                    <div className="card">
                                                        <div className="icon_area">
                                                            <FontAwesomeIcon icon={faGlobe} className="icons" />
                                                        </div>
                                                        <div className="heading">
                                                            Authentic Experiences
                                                        </div>
                                                        <div className="paragraph">
                                                            We connect you with local communities,traditions,and hidden gems for a truly immersive journey.
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col xxl={4} xl={4} lg={4} md={4} sm={6} xs={12}>
                                                    <div className="card">
                                                        <div className="icon_area">
                                                            <FontAwesomeIcon icon={faHeart} className="icons" />
                                                        </div>
                                                        <div className="heading">
                                                            Sustainable Travel
                                                        </div>
                                                        <div className="paragraph">
                                                            Committed to eco-friendly practices and supporting local economies for responsible tourism.
                                                        </div>
                                                    </div>

                                                </Col>
                                                <Col xxl={4} xl={4} lg={4} md={4} sm={6} xs={12}>
                                                    <div className="card">
                                                        <div className="icon_area">
                                                        <FontAwesomeIcon icon={faUserGroup} className="icons"/>
                                                        </div>
                                                        <div className="heading">
                                                            Personalized  Itineraries
                                                        </div>
                                                        <div className="paragraph">
                                                            Every journey is crafted to your preferences,ensuring a unique and unforgettable adventure.
                                                        </div>
                                                    </div>

                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col xxl={4} xl={4} lg={4} md={4} sm={6} xs={12}>
                                                    <div className="card">
                                                        <div className="icon_area">
                                                            <FontAwesomeIcon icon={faBookOpenReader} className="icons"/>
                                                        </div>
                                                        <div className="heading">
                                                            Expert Local Guides
                                                        </div>
                                                        <div className="paragraph">
                                                         Explore with Knowledgeable guides wo bring India's history and culture to life.
                                                        </div>
                                                    </div>

                                                </Col>
                                                <Col xxl={4} xl={4} lg={4} md={4} sm={6} xs={12}>
                                                    <div className="card">
                                                        <div className="icon_area">
                                                           <FontAwesomeIcon icon={faCrown} className="icons"/>
                                                        </div>
                                                        <div className="heading">
                                                        Unrivaled Comfort
                                                        </div>
                                                        <div className="paragraph">
                                                          Enjoy premium accommodations and seamless logistics,prioritizing your relaxation and ease.
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col xxl={4} xl={4} lg={4} md={4} sm={6} xs={12}>
                                                    <div className="card">
                                                        <div className="icon_area">
                                                        <FontAwesomeIcon icon={faGem} className="icons"/>
                                                        </div>
                                                        <div className="heading">
                                                            24/7 Support
                                                        </div>
                                                        <div className="paragraph">
                                                            Our dedicated team is available around the clock to ensure a smooth and worry-free trip.
                                                        </div>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Container>
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