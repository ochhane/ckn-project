import React from "react";
import { Carousel } from "react-bootstrap";
function Marquee() {
    return (
        <>
            <div className=" text-center bg-light p-4 marginTopClass" >
                <div className="row">
                    <div className="col-4">
                        <Carousel> 
                            <Carousel.Item interval={500}>
                                <img className="border rounded-circle"  src="images/chef-2.jpg" alt="" />
                            </Carousel.Item>
                            <Carousel.Item interval={500}>
                                <img className="border rounded-circle"   src="images/chef-1.jpg" alt="" />
                            </Carousel.Item>
                            <Carousel.Item className="" interval={500}>
                                <img className="border rounded-circle"  src="images/chef-2.jpg" alt="" />
                            </Carousel.Item>
                            <Carousel.Item interval={500} className="">
                                <img className="border rounded-circle"  src="images/chef-3.jpg" alt="" />
                            </Carousel.Item>
                        </Carousel>

                    </div>
                    <div className="col-4">
                        <Carousel>
                           
                            <Carousel.Item interval={500}>
                                <img className="border rounded-circle"  src="images/chef-1.jpg" alt="" />
                            </Carousel.Item>
                            <Carousel.Item className="" interval={500}>
                                <img className="border rounded-circle"  src="images/chef-2.jpg" alt="" />
                            </Carousel.Item >
                            <Carousel.Item interval={500} className="">
                                <img className="border rounded-circle"  src="images/chef-3.jpg" alt="" />
                            </Carousel.Item>
                            <Carousel.Item interval={500}>
                                <img className="border rounded-circle"  src="images/chef-2.jpg" alt="" />
                            </Carousel.Item>
                        </Carousel>
                    </div>
                    <div className="col-4">
                        <Carousel>
                            <Carousel.Item interval={500} className="">
                                <img className="border rounded-circle"  src="images/chef-3.jpg" alt="" />
                            </Carousel.Item>
                            <Carousel.Item interval={500}>
                                <img className="border rounded-circle"  src="images/chef-2.jpg" alt="" />
                            </Carousel.Item>
                            <Carousel.Item interval={500}>
                                <img className="border rounded-circle"  src="images/chef-1.jpg" alt="" />
                            </Carousel.Item>
                            <Carousel.Item className="" interval={500}>
                                <img className="border rounded-circle"  src="images/chef-2.jpg" alt="" />
                            </Carousel.Item>
                        </Carousel>

                    </div>
                </div>
            </div>
        </>
    );
}
export default Marquee;