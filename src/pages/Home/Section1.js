import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Burger from "../../assets/hero/hero-2.png"
import { Link } from 'react-router-dom';

function Section1() {
    return (
        <section className='hero_section'>
            <Container>
                <Row>
                    <Col lg={7} className="mb-5 mb-lg-0">
                        <div className="position-relative">
                            <img src={Burger} alt="Hero" className='img-fluid' />
                            <div className='price_badge'>
                                <div className='badge_text'>
                                    <h4 className='h4_xs'>Only </h4>
                                    <h4 className='h3_lg'>₹49 </h4>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={5}>
                        <div className="hero_text text-center">
                            <h1 className='text-white'>New Burger</h1>
                            <h2 className='text-white'>With Onion</h2>
                            <p className='text-white pt-2 pb-4'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos eligendi
                            </p>
                            <Link to="/" className='btn order_now'>Order Now</Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Section1
