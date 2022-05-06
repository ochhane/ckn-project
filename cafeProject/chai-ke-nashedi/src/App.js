import './App.css';
import $ from "jquery"
import {Route, Routes, Switch} from "react-router-dom"
import Header from './Header';
import Navbars from './Navbars';
import Specialdish from './Specialdish';
import Menu from './Menu';
import Gorgeous from './Gorgeous';
import Carousell from "./Carousell";
import Discover from "./Discover";
import Back1 from "./Back1";
import Recipes from "./Recipes";
import Qutes from "./Qutes";
import Marquee from "./Marquee";
import Booking from "./Booking";
import Footer from "./Footer";
import Login from './Login';
import Signup from './Signup';
function App() {
  return (
    <div className="App">
    <Routes>
    <Route path='/Signup' element={<Signup/>}/>
    </Routes>
      
  
      <Header></Header>
      <Navbars/>
      <Carousell/>
      <Discover/>
      <Back1/>
      <Specialdish/>
      <Recipes/>
      <Menu/>
      
      <Qutes/>
      <Marquee/>
      <Booking/>
      <Gorgeous/>
      <Footer/>
      <Login/>

    </div>
  );
}

export default App;
