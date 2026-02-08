import Image from "next/image";
import jaipur from "../../../public/images/jaipur.jpg"
import varanasi from "../../../public/images/varanasi.jpg"
import kerala from "../../../public/images/kerala.jpg"
import goa from "../../../public/images/goa.jpg"
import rishikesh from "../../../public/images/rishikesh.jpg"
import mumbai from "../../../public/images/mumbai.jpg"
import "../../../public/sass/homepage/card_section.scss";
import { Col, Container, Row } from "react-bootstrap";
import Link from "next/link";

export default function Card_section(){
    return(
        <>
        <div className="head_area">
            <h2>Top Destinations</h2>
            <div className="content_area">
                <Container>
                    <Row>
                        <Col xxl={4} xl={4} lg={4} md={4} sm={6} xs={12}>
                        <div className="card_area">
                            <div className="image_area">
                                <Image src={jaipur} alt="jaipur" fetchPriority="low"></Image>
                            </div>
                            <div className="content_area">
                                <div className="heading">
                                    Jaipur-The Pink City
                                </div>
                                <div className="description">
                                 Explore the royal heritage of Rajasthan with its magnificent palaces and forts,painted in hues of pink.
                                </div>
                                <div className="button_area">
                                    <Link href="/jaipur"> <button>Learn More</button></Link>
                                </div>
                            </div>
                        </div>
                        </Col>
                         <Col xxl={4} xl={4} lg={4} md={4} sm={6} xs={12}>
                        <div className="card_area">
                            <div className="image_area">
                                <Image src={varanasi} alt="varanasi" fetchPriority="low"></Image>
                            </div>
                            <div className="content_area">
                                <div className="heading">
                                    Varanasi-Spiritual Capital
                                </div>
                                <div className="description">
                                 Witness the mystical rituals on the Ganges River and immerse yourself in india's spiritual heartland.
                                </div>
                                <div className="button_area">
                                  <Link href="/varanasi"> <button>Learn More</button></Link>
                                </div>
                            </div>
                        </div>
                        </Col>
                         <Col xxl={4} xl={4} lg={4} md={4} sm={6} xs={12}>
                        <div className="card_area">
                            <div className="image_area">
                                <Image src={kerala} alt="kerala"  fetchPriority="low"></Image>
                            </div>
                            <div className="content_area">
                                <div className="heading">
                                    kerala-God's Own Country
                                </div>
                                <div className="description">
                                Relax amidst the tranquil backwaters,lsh greenery,and serene beaches of South India.</div>
                                <div className="button_area">
                                      <Link href="/kerala"> <button>Learn More</button></Link>
                                   
                                </div>
                            </div>
                        </div>
                        </Col>
                    </Row>
                     <Row>
                        <Col xxl={4} xl={4} lg={4} md={4} sm={6} xs={12}>
                        <div className="card_area">
                            <div className="image_area">
                                <Image src={goa} alt="goa" fetchPriority="low"></Image>
                            </div>
                            <div className="content_area">
                                <div className="heading">
                                    Goa-Sun,Sand,and Sea
                                </div>
                                <div className="description">
                                 Unwind on the golden beaches,vibrant nightlife,and Portuguese-nfluenced architecture.
                                </div>
                                <div className="button_area">
                                  <Link href="/goa"> <button>Learn More</button></Link>
                                </div>
                            </div>
                        </div>
                        </Col>
                         <Col xxl={4} xl={4} lg={4} md={4} sm={6} xs={12}>
                        <div className="card_area">
                            <div className="image_area">
                                <Image src={rishikesh} alt="rishikesh" fetchPriority="low"></Image>
                            </div>
                            <div className="content_area">
                                <div className="heading">
                                    Rishikesh-Yoga Capital
                                </div>
                                <div className="description">
                                Experience adventure sports,spiritual rtreats,and yoga on the banks of the sacred Ganges.
                                </div>
                                <div className="button_area">
                                 <Link href="/rishikesh"> <button>Learn More</button></Link>
                                </div>
                            </div>
                        </div>
                        </Col>
                         <Col xxl={4} xl={4} lg={4} md={4} sm={6} xs={12}>
                        <div className="card_area">
                            <div className="image_area">
                                <Image src={mumbai} alt="kerala" fetchPriority="low"></Image>
                            </div>
                            <div className="content_area">
                                <div className="heading">
                                    Mumbai-City of Dreams
                                </div>
                                <div className="description">
                                    Explore the vibrant metropolis,Bollywood glamour,and iconic colonial architecture.
                               </div>
                                <div className="button_area">
                                 <Link href="/mumbai"> <button>Learn More</button></Link>
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