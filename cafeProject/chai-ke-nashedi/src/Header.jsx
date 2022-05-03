import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css"

function Header() {
    return (
        [
            <div className="row" style={{ backgroundColor: "#222222" }}>
                <div className="col-2 p-2" style={{marginLeft:"7%" , color:"#dddddd",fontSize:"0.9rem"}}>
                    <a href="#"><span className="p-3 bi bi-facebook "></span></a>
                    <a href="#"><span className="p-3 bi bi-twitter"></span></a>
                    <a href="#"><span className="p-3 bi bi-clouds-fill"></span></a>
                    <a href="#"><span className="p-3 bi bi-cup-straw "></span></a>
                    
                </div>
                <div className="" style={{ borderRight: '1px solid grey', height: '38px', width:"2px", marginTop: '' }}></div>
                
                <div className="col-3 text-white p-2">
                    <h6 style={{color:"#dddddd",fontSize:"0.9rem"}}>Call for reservation : +91 8212158012</h6>
                </div>
                <div className="" style={{ borderRight: '1px solid grey', height: '38px', width:"2px", marginTop: '' }}></div>
                <div className="col-2 p-2">
                    <h6 style={{color:"#dddddd",fontSize:"0.9rem"}}>Opening Hours : 5:00am-12:00pm</h6>
                </div>
                <div className="" style={{ borderRight: '1px solid grey', height: '38px', width:"2px", marginTop: '' }}></div>
                <div className="col-1">
                <select className="form-select text-white" style={{ backgroundColor: "#222222",border:"none",color:"#dddddd" }} aria-label="Default select example">
                    <option selected style={{color:"#dddddd",fontSize:"0.9rem"}}>Eng</option>
                    <option value="1">French</option>
                    <option value="2">Arabic</option>
                    <option value="3">Bengali</option>
                    <option value="4">Hindi</option>
                    </select>
                </div>
                <div className="" style={{ borderRight: '1px solid grey', height: '38px', width:"2px", marginTop: '' }}></div>
                <div className="col-1 p-2" style={{fontSize:"0.9rem"}}>
                <a href="#"><span className="p-3 bi bi-basket-fill text-white"></span></a>
                </div>

            </div>
        ]
    );
}

export default Header;