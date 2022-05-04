import React from "react";
function Booking() {
    return (
        <>
            <div className="marginTopClass"  style={{
                backgroundImage: `url('images/Booking.jpg')`, height: "100%",
                /* Create the parallax scrolling effect */
                backgroundAttachment: "fixed",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
            }}>
                <div className=" text-center " style={{ padding: "8.5rem", }}>
                    <h1 className="text-warning"><i>Relaxing Atmosphere</i></h1>
                    <br />
                    <h1 className="text-light">Book Your Table</h1>
                </div>
                <div className="row px-4   " style={{paddingBottom:"150px"}}>
                    <div className="col-4 align-items-start">
                        <input className="form-control text-light text-center  mb-4 bg-transparent" type="text" placeholder="Your Name*" />
                        <input className="form-control text-light text-center mt-4 bg-transparent " type="date" placeholder="Date*" />
                    </div>
                    <div className="col-4">
                        <input className="form-control text-light text-center mb-4 bg-transparent" type="text" placeholder="Your Email*" />
                        <input className="form-control text-light text-center mt-4 bg-transparent" type="Time" placeholder="Time*" />
                    </div>
                    <div className="col-4">
                        <input className="form-control text-light text-center  mb-4 bg-transparent" type="telphone" placeholder="Mobile Number*" />
                        <input className="form-control text-light text-center mt-4 bg-transparent " type="number" placeholder="Number Of Person*" />
                    </div>
                </div>
            </div>
        </>
    );
}
export default Booking;