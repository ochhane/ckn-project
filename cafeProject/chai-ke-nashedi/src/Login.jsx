import React,{useState} from "react";
import styled from "styled-components";
import Icon from "./components/Icon";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { Button } from "react-bootstrap";
import Signup from "./Signup";
import axios from "axios"

function Login() {  
  
  const [Username,setUsername] =useState();
  const [Password,setPassword]=useState();

  const user = {
    'email': Username,
    'password':Password
  };

 


  
  
  
  const FacebookBackground =
    "linear-gradient(to right, #0546A0 0%, #0546A0 40%, #663FB6 100%)";
  const InstagramBackground =
    "linear-gradient(to right, #A12AC4 0%, #ED586C 40%, #F0A853 100%)";
  const TwitterBackground =
    "linear-gradient(to right, #56C1E1 0%, #35A9CE 50%)";
    const loginClick = () =>{
      debugger
      axios.post(`https://reqres.in/api/login`, user )
      .then(res => {
        alert(res.data.token === 'QpwL5tke4Pnpja7X4');
      }, err => {
        debugger
        alert(err);
      })
  
    }
  return (
     
    <div className="loginPage">
    <MainContainer >
    <WelcomeText><img src="images/png.png" style={{width:"150px",height:"150px"}}></img> </WelcomeText>
    
      <input type="email" name="email" id="email" autoComplete="off" 
    
      onChange={(e)=>{setUsername(e.target.value)}} 
      placeholder="Email" />
      <input type="password"  name="password" id="password" autoComplete="off" 
      
      onChange={(e)=>{setPassword(e.target.value)}}  placeholder="Password" />
    
    <ButtonContainer>
      <Button   onClick={loginClick}  >Login 123</Button>
      
    </ButtonContainer>
    <LoginWith>OR LOGIN WITH</LoginWith>
    <HorizontalRule />
    <IconsContainer>
      <Icon color={FacebookBackground}>
        <FaFacebookF />
      </Icon>
      <Icon color={InstagramBackground}>
        <FaInstagram />
      </Icon>
      <Icon color={TwitterBackground}>
        <FaTwitter />
      </Icon>
    </IconsContainer>
    <ForgotPassword>Forgot Password ?</ForgotPassword>
  </MainContainer>
    </div>
  );
}

const MainContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 80vh;
  width: 30vw;
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(8.5px);
  -webkit-backdrop-filter: blur(8.5px);
  border-radius: 10px;
  color: #ffffff;
  text-transform: uppercase;
  letter-spacing: 0.4rem;
  @media only screen and (max-width: 320px) {
    width: 80vw;
    height: 90vh;
    hr {
      margin-bottom: 0.3rem;
    }
    h4 {
      font-size: small;
    }
  }
  @media only screen and (min-width: 360px) {
    width: 80vw;
    height: 90vh;
    h4 {
      font-size: small;
    }
  }
  @media only screen and (min-width: 411px) {
    width: 80vw;
    height: 90vh;
  }

  @media only screen and (min-width: 768px) {
    width: 80vw;
    height: 80vh;
  }
  @media only screen and (min-width: 1024px) {
    width: 70vw;
    height: 50vh;
  }
  @media only screen and (min-width: 1280px) {
    width: 30vw;
    height: 80vh;
  }
`;

const WelcomeText = styled.h2`
  margin: 0 0 0 0;
`;

const InputContainer = styled.div`
  display: block;
  
  line-height:55px;
  align-items: center;
  height: 20%;
  width: 100%;
`;

const ButtonContainer = styled.div`
  margin: 1rem 0 2rem 0;
  width: 70%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const LoginWith = styled.h5`
  cursor: pointer;
`;

const HorizontalRule = styled.hr`
  width: 90%;
  height: 0.3rem;
  border-radius: 0.8rem;
  border: none;
  background: linear-gradient(to right, #14163c 0%, #03217b 79%);
  background-color: #ebd0d0;
  margin: 1.5rem 0 1rem 0;
  backdrop-filter: blur(25px);
`;

const IconsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 0rem 0 2rem 0;
  width: 80%;
`;

const ForgotPassword = styled.h4`
  cursor: pointer;
`;

export default Login;
