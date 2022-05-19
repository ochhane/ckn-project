import React, { useState } from "react";
import $ from "jquery";
import './Style.css';
import Icon from "./components/Icon";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import {Route, Routes, Switch} from "react-router-dom";
import axios from "axios";
// import './Sign.js'

function Signup (){
  const [isSignupVisible, setIsSignupVisible]  = useState(false);
  // state = {
  //   isSignupVisible:false,
  //   username: '',
  //   email: '',
  //   password: ''
  // };
  const [Username,setUsername] =useState();
  const [Password,setPassword]=useState();

  const user = {
    'email': Username,
    'password':Password
  };

 
  const add = () => {
    setIsSignupVisible(!isSignupVisible);
    // this.setState(st => ({ isSignupVisible: !st.isSignupVisible }));
  }

  
  

    const addEmailPassword = () => {
      debugger
      axios.post(`https://reqres.in/api/login`, user )
      .then(res => {
        alert(res.data.token === 'QpwL5tke4Pnpja7X4');
      }, err => {
        debugger
        alert(err);
      })
      
    }
    
    
    const FacebookBackground =
    "linear-gradient(to right, #0546A0 0%, #0546A0 40%, #663FB6 100%)";
  const InstagramBackground =
    "linear-gradient(to right, #A12AC4 0%, #ED586C 40%, #F0A853 100%)";
  const TwitterBackground =
    "linear-gradient(to right, #56C1E1 0%, #35A9CE 50%)";
    // const { isSignupVisible } = this.state;
    return([
      <div className={`container1 ${isSignupVisible ? "sign-up-mode" : ""}`}>
    <div className="forms-container1">
      <div className="signin-signup">
        <form action="#" className="sign-in-form">
          <h2 className="title">Sign in</h2>
          <div className="input-field">
            <i className="fas fa-user"></i>
            <input type="email" placeholder="email" name="email"  onChange={(e)=>{setUsername(e.target.value)}}  />
          </div>
          <div className="input-field">
            <i className="fas fa-lock"></i>
            <input type="password" placeholder="Password" name="email" onChange={(e)=>{setPassword(e.target.value)}}  />
          </div>
          <input type="button" onClick={addEmailPassword} value="Login" className="btns solid" />
          <p className="social-text">Or Sign in with social platforms</p>
          <div className="social-media">
          <Icon color={FacebookBackground}>
          <FaFacebookF />
        </Icon>
        <Icon color={InstagramBackground}>
          <FaInstagram />
        </Icon>
        <Icon color={TwitterBackground}>
          <FaTwitter />
        </Icon>
          </div>
        </form>
        <form action="#" className="sign-up-form">
          <h2 className="title">Sign up</h2>
          <div className="input-field">
            <i className="fas fa-user"></i>
            <input type="text" placeholder="Username"  />
          </div>
          <div className="input-field">
            <i className="fas fa-envelope"></i>
            <input type="email" placeholder="Email" />
          </div>
          <div className="input-field">
            <i className="fas fa-lock"></i>
            <input type="password" placeholder="Password" />
          </div>
          <input type="submit" className="btns" value="Sign up" />
          <p className="social-text">Or Sign up with social platforms</p>
          <div className="social-media">
            <a href="#" className="social-icon">
              <i className="bi bi-facebook-f"></i>
            </a>
            <a href="#" className="social-icon">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="social-icon">
              <i className="fab fa-google"></i>
            </a>
            <a href="#" className="social-icon">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </form>
      </div>
    </div>

    <div className="panels-container1">
      <div className="panel left-panel">
        <div className="content text-center ">
        <img style={{width:"250px",height:"250px"}} src="images/png.png" alt="ckn" />
          <br></br>
          <button onClick={add} className="btns transparent" id="sign-up-btn">
            Sign up
          </button>
        </div>
        <img src="img/log.svg" className="image" alt="" />
      </div>
      <div className="panel right-panel">
        <div className="content">
        <img style={{width:"250px",height:"250px"}} src="images/png.png" alt="ckn" />
          <button   onClick={add} className="btns transparent" id="sign-in-btn">
            Sign in
          </button>
        </div>
        <img src="img/register.svg" className="image" alt="" />
      </div>
    </div>
    
  </div>
  

  ]
  );
  
}

export default Signup;