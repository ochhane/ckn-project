import React from "react";

function Gorgeous(){
    return(
        [
            <div className="container marginTopClass" style={{marginTop:"5%"}}>
            <div className="row">
            <div className="col">
            <div className="inner-box" style={{textAlign:"justify"}}>
                
            <div className="sec-title spDish1">
                <h2>Gorgeous Halls</h2>
                <h3>Find Perfect Place For Any Meeting </h3>
            </div>
            <div className="content">
                <div className="text">sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</div>
                
                <div className="meeting-info">
                    <h4>Seat Up 155 Company Meatings</h4>
                    <div className="text">sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation </div>
                </div>
                

                <div className="meeting-info">
                    <h4>Traditional Home hall</h4>
                    <div className="text">sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation </div>
                </div>
                
                <a href="#" className="read-more btn bg-warning btn-warn">Book Now</a>
            </div>
            
        </div>
            </div>
            <div className="col" >
               <div className="row">
               <img className="col " src="images/meeting-1.jpg"></img>
               <img className="col " style={{marginRight:"5%"}} src="images/meeting-2.jpg"></img>
               </div>
            </div>
        </div>
            </div>
        ]
    );
}
export default Gorgeous;