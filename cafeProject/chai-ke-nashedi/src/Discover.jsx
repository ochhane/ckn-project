import React from "react";
import { Carousel } from 'react-bootstrap';

function Discover() {
    return (
        <div className="container marginTopClass">
            <div className="row p-5">
                <div className="col-6 p-5" style={{textAlign:"justify"}}>
                    <h1 className="text-warning"><i>Greate New Dishes</i></h1>
                    <h2>Discover Our Restaurant</h2>
                    <p>A cappuccino is an Italian coffee drink which is traditionally prepared with espresso, hot milk and steamed milk foam. Coffee makes up a very important part of the Italian gastronomic culture. Cream may be used instead of milk and is often topped with cinnamon.

                        It is typically smaller in volume than a caffe latte, with a thicker layer of micro foam. in this context referring to the color of the beverage when milk</p>
                    <button className="btn btn-warning"> button</button>
                </div>
                <div className="col-6">
                    <Carousel>
                        <Carousel.Item>
                            <img className="border border-light border-2" src="images/image-1.jpg"
                                style={{ height: 400, width: '100%', }}
                                alt="" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="border border-light border-2" src="images/image-2.jpg" style={{ height: 400, width: '100%' }} alt="" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src="images/slideGirl-1.jpg" style={{ height: 400, width: '100%', }} alt="" />
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
        </div>
    )
}
export default Discover;