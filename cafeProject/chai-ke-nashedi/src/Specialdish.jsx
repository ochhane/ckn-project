import React from "react";
import { Button, Card } from "react-bootstrap";

function Specialdish() {
    return (
        [
            <div className="text-center container spDish marginTopClass">
                <div className="spDish1">
                    <h2>Our Special Dishes</h2>
                    <h3>We Create Delicious Moments</h3>
                </div>
                <div className="row p-4">
                    <Card className="col">
                        <Card.Img variant="top" src="images/dish-1.jpg" />
                        <Card.Body>
                            <Card.Title align="left" style={{justifyContent:"space-between"}} className="d-flex ">
                                <h6>Trio Sausages</h6>
                                <p  align="right">&#8377; 200</p>
                            </Card.Title>
                            <Card.Text align="left" >
                                Mussel with tomato sauce,wine
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="col " style={{marginLeft:"1%"  }}>
                        <Card.Img variant="top" src="images/dish-2.jpg" />
                        <Card.Body>
                            <Card.Title align="left" style={{justifyContent:"space-between"}} className="d-flex ">
                                <h6>Cabernet Sauvignon</h6>
                                <p align="right">&#8377; 300</p>
                            </Card.Title>
                            <Card.Text align="left">
                                Mussel with tomato sauce,wine
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="col" style={{marginLeft:"1%"  }}>
                        <Card.Img variant="top" src="images/dish-3.jpg" />
                        <Card.Body>
                            <Card.Title align="left" style={{justifyContent:"space-between"}} className="d-flex ">
                                <h6>Delirium Tremens</h6>
                                <p align="right">&#8377; 150</p>
                            </Card.Title>
                            <Card.Text align="left">
                                Mussel with tomato sauce,wine
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    </div>
            </div>
        ]
    );
}
export default Specialdish;