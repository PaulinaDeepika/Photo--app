import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import "./components/NavbarStyles.css";
import "./App.css";
import Navbar from "./components/Navbar.js";
import Home from "./components/Home.js";
import Share from "./components/Share.js";
import About from "./components/About.js";
import Login from "./components/Login.js";
import Images from './components/Images.js';
import Downloads from './components/Downloads.js';
import Videos from './components/Videos.js';
import Snapchat from './components/Snapchat.js';
import Register from './components/Register.js';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/share" element={<Share/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/images" element={<Images/>}/>
        <Route path="/downloads" element={<Downloads/>}/>
        <Route path="/Videos" element={<Videos/>}/>
        <Route path="/Snapchat" element={<Snapchat/>}/>
        <Route path="/Register" element={<Register/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
