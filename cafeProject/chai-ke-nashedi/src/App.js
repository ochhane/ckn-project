import './App.css';
import Header from './Header';
import Navbars from './Navbars';
import Specialdish from './Specialdish';
import Menu from './Menu';
import Gorgeous from './Gorgeous';
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Navbars/>
      <Specialdish/>
      <Menu/>
      <Gorgeous/>
      
    </div>
  );
}

export default App;
