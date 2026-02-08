import { Col, Container, Row } from "react-bootstrap";
import "../../../public/sass/pages/destinations.scss";
import Image from "next/image";
import delhi from "../../../public/images/delhi.jpg";
import agra from "../../../public/images/agra.jpg";
import jaipur from "../../../public/images/jaipur.jpg";
import goa from "../../../public/images/goa.jpg";
import kerala from "../../../public/images/kerala.jpg";
import varanasi from "../../../public/images/varanasi.jpg";
import mumbai from "../../../public/images/mumbai.jpg";
import amritsar from "../../../public/images/amritsar.jpg";
import ladakh from "../../../public/images/ladakh.jpg";
import Link from "next/link";


export default function Destinations() {
    return (
        <>
            <div className="main_area">
                <div className="head_area">
                    <Container>
                        <Row>
                            <Col>
                                <div className="content_area">
                                    <h2>Explore Incredible Destinations</h2>
                                    <p>
                                        Discover the mesmerizing beauty and rich cultural tapesary of India.From ancient wonders to serene landscapes,your adventure awaits.
                                    </p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className="card_area">
                    <Container>
                         <Row>
                            <Col xxl={4} xl={4} lg={4} md={4} sm={6} xs={12}>
                                <div className="card">
                                    <div className="image_area">
                                        <Image src={mumbai} alt="mumbai" fetchPriority="low"></Image>
                                    </div>
                                    <div className="content_area">
                                        <h2>Mumbai</h2>
                                        <div className="tags">
                                            <span className="tag">Modern</span>
                                            <span className="tag">Metropolitan</span>
                                            <span className="tag">Entertainment</span>
                                        </div>
                                        <p>
                                            The dynamic financial capital and Bollywood city,a vibrant blend of dreams,history,and blushing street life.
                                        </p>
                                          <div className="button_area">
                                             <Link href="/mumbai"> <button>View Details</button></Link>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col xxl={4} xl={4} lg={4} md={4} sm={6} xs={12}>
                                <div className="card">
                                    <div className="image_area">
                                        <Image src={amritsar} alt="amritsar" fetchPriority="low"></Image>
                                    </div>
                                    <div className="content_area">
                                        <h2>Amritsar</h2>
                                        <div className="tags">
                                            <span className="tag">Spiritual</span>
                                            <span className="tag">Culture</span>
                                            <span className="tag">Historic</span>
                                        </div>
                                        <p>
                                            Home to the revered Golden Temple,Amritsar is a city of spiritual significance an rich Punjabi culture.
                                        </p>
                                         <div className="button_area">
                                            <Link href="/amritsar"> <button>View Details</button></Link>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col xxl={4} xl={4} lg={4} md={4} sm={6} xs={12}>
                                <div className="card">
                                    <div className="image_area">
                                        <Image src={ladakh} alt="ladakh" fetchPriority="low"></Image>
                                    </div>
                                    <div className="content_area">
                                        <h2>Ladakh</h2>
                                        <div className="tags">
                                            <span className="tag">Adventure</span>
                                            <span className="tag">Nature</span>
                                            <span className="tag">Mountains</span>
                                        </div>
                                        <p>
                                            The 'Land of High Passes' offers breathtaking landscapes,serene monasteries,and adventurous trekking trails.
                                        </p>
                                          <div className="button_area">
                                             <Link href="/ladakh"> <button>View Details</button></Link>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col xxl={4} xl={4} lg={4} md={4} sm={6} xs={12}>
                                <div className="card">
                                    <div className="image_area">
                                        <Image src={delhi} alt="delhi" fetchPriority="low"></Image>
                                    </div>
                                    <div className="content_area">
                                        <h2>Delhi</h2>
                                        <div className="tags">
                                            <span className="tag">Historic</span>
                                            <span className="tag">Metropolitan</span>
                                            <span className="tag">Culture</span>
                                        </div>
                                        <p>
                                            Explore the bustling capital,a city where ancient history meets modern life.Visit iconic landmarks nd vibrant markets.
                                        </p>
                                        <div className="button_area">
                                             <Link href="/delhi"> <button>View Details</button></Link>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col xxl={4} xl={4} lg={4} md={4} sm={6} xs={12}>
                                <div className="card">
                                    <div className="image_area">
                                        <Image src={agra} alt="agra" fetchPriority="low"></Image>
                                    </div>
                                    <div className="content_area">
                                        <h2>Agra</h2>
                                        <div className="tags">
                                            <span className="tag">Iconic</span>
                                            <span className="tag">Historic</span>
                                            <span className="tag">Romantic</span>
                                        </div>
                                        <p>
                                            Home to the magnificent Taj Mahal,Agra offers a glimpse into the Mughal era's architectural grandeur and romantic tales.
                                        </p>
                                         <div className="button_area">
                                             <Link href="/agra"> <button>View Details</button></Link>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col xxl={4} xl={4} lg={4} md={4} sm={6} xs={12}>
                                <div className="card">
                                    <div className="image_area">
                                        <Image src={jaipur} alt="jaipur" fetchPriority="low"></Image>
                                    </div>
                                    <div className="content_area">
                                        <h2>Jaipur</h2>
                                        <div className="tags">
                                            <span className="tag">Royal</span>
                                            <span className="tag">Historic</span>
                                            <span className="tag">Culture</span>
                                        </div>
                                        <p>
                                            The 'Pink City' of Rajasthan,Known for its opulent palaces,colorful bazaars,and rich Rajput heritage.
                                        </p>
                                          <div className="button_area">
                                             <Link href="/jaipur"> <button>View Details</button></Link>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col xxl={4} xl={4} lg={4} md={4} sm={6} xs={12}>
                                <div className="card">
                                    <div className="image_area">
                                        <Image src={goa} alt="goa" fetchPriority="low"></Image>
                                    </div>
                                    <div className="content_area">
                                        <h2>Goa</h2>
                                        <div className="tags">
                                            <span className="tag">Beach</span>
                                            <span className="tag">Relaxation</span>
                                            <span className="tag">Adventure</span>
                                        </div>
                                        <p>
                                            India's beach paradise,offering stunning coastlines,vibrant nightlife,and a unique blend of Indian and portoguese culture.
                                        </p>
                                        <div className="button_area">
                                             <Link href="/goa"> <button>View Details</button></Link>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col xxl={4} xl={4} lg={4} md={4} sm={6} xs={12}>
                                <div className="card">
                                    <div className="image_area">
                                        <Image src={kerala} alt="kerala" fetchPriority="low"></Image>
                                    </div>
                                    <div className="content_area">
                                        <h2>Kerala</h2>
                                        <div className="tags">
                                            <span className="tag">Nature</span>
                                            <span className="tag">Backwaters</span>
                                            <span className="tag">Relaxation</span>
                                        </div>
                                        <p>
                                            Experience the serene backwaters,lush greenery,and unique culture traditionsof 'God's Own Country'.
                                        </p>
                                         <div className="button_area">
                                            <Link href="/kerala"> <button>View Details</button></Link>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col xxl={4} xl={4} lg={4} md={4} sm={6} xs={12}>
                                <div className="card">
                                    <div className="image_area">
                                        <Image src={varanasi} alt="varanasi" fetchPriority="low"></Image>
                                    </div>
                                    <div className="content_area">
                                        <h2>Varanasi</h2>
                                        <div className="tags">
                                            <span className="tag">Spiritual</span>
                                            <span className="tag">Historic</span>
                                            <span className="tag">Culture</span>
                                        </div>
                                        <p>
                                            One of the oldest living cities in the world,a spiriual hub known for its ghats,temples,and Ganges rituals.
                                        </p>
                                          <div className="button_area">
                                            <Link href="/varanasi"> <button>View Details</button></Link>
                                        </div>
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