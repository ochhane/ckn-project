import React from 'react';
import { Carousel } from "react-bootstrap"

function Qutes() {
    return (
        <>
            <div className='marginTopClass' style={{
                backgroundImage: `url('images/Qutes.jpg')`, height: 400,
                /* Create the parallax scrolling effect */
                backgroundAttachment: "fixed",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
            }}>
                <div className=" text-center p" style={{ padding: "8.5rem", }}>
                    <Carousel>
                        <Carousel.Item interval={1500}>
                            <blockquote className='text-center fs-5 text-light'>
                                “ We enjoy sharing the projects and posts we make just as much as we enjoy creating them. consectetur adipiscing elit, sed do eiusmod tempor incididunt Sit back &amp; take a moment to browse through some of our recent completed work.”
                            </blockquote>
                            <div className='text-warning p-3 text-center'>
                                <h2><i>- Steve Smeeth</i></h2>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item interval={500}>
                            <blockquote className='text-center text-light fs-5'>
                                “ We enjoy sharing the projects and posts we make just as much as we enjoy creating them. consectetur adipiscing elit, sed do eiusmod tempor incididunt Sit back &amp; take a moment to browse through some of our recent completed work.”
                            </blockquote>
                            <div className='text-warning p-3 text-center'>
                                <h2><i>- Steve Smeeth</i></h2>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item interval={500}>
                            <blockquote className='text-center text-light fs-5'>
                                “ We enjoy sharing the projects and posts we make just as much as we enjoy creating them. consectetur adipiscing elit, sed do eiusmod tempor incididunt Sit back &amp; take a moment to browse through some of our recent completed work.”
                            </blockquote>
                            <div className='text-warning p-3 text-center'>
                                <h2><i>- Steve Smeeth</i></h2>
                            </div>
                        </Carousel.Item>
                    </Carousel>
                </div>

            </div>
        </>
    );
}
export default Qutes;