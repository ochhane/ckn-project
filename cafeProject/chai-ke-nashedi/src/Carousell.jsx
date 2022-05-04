import React from "react";
import { Carousel } from "react-bootstrap";
//import "../../node_modules/react-bootstrap/Carousel";
//import "../../node_modules/react-bootstrap/CarouselItem";
//import 'bootstrap/dist/css/bootstrap.css';
//import"../../node_modules/bootstrap/dist/css/bootstrap.css"

function Carousell() {
    return (
        <>
            <div className="" style={{ display: 'block',  width: "100%", }}>
                <Carousel>
                    <Carousel.Item interval={1500}>
                        <img
                        style={{ height: "600px" }}
                            className="d-block w-100"
                            src="images/image-1.jpg"
                            alt="Image One"
                        />
                        <Carousel.Caption>
                            <img src="images/icon-1.png" alt="" />
                            <h3>Label for first slide</h3>
                            <p>Sample Text for Image One</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={1500}>
                        <img
                            style={{ height: "600px" }}
                            className="d-block w-100"
                            src="images/image-2.jpg"
                            alt="Image Two"
                        />
                        <Carousel.Caption>
                            <h3>Label for second slide</h3>
                            <p>Sample Text for Image Two</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={1500}>
                        <div className="row bg-black">
                            <div className="col-6 text-light p-4 mt-4" >
                                <img src="images/icon-2.png" alt="icon-2" />
                                <h2>Lorem ipsum dolor sit amet consectetur.</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus similique harum et, ducimus deserunt fugit!</p>
                                <button className="btn btn-warning">button</button>
                            </div>
                            <div className="col-6">
                            <img
                            style={{ height: "600px"  }}
                            className="d-block  w-100"
                            src="images/content-image-3.png"
                            alt="Image Two"
                        />
                            </div>
                        </div>
                       
                        <Carousel.Caption>
                            <h3>Label for second slide</h3>
                            <p>Sample Text for Image Two</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </>
    )
}
export default Carousell;