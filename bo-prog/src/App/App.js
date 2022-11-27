/*Importing Pages*/
import Contact from "../Pages/Contact/Contact";
import Login from "../Pages/Login/Login";
import About from "../Pages/About/About";
import Shop from "../Pages/Shop/Shop";
import Home from "../Pages/Home/Home";
/*Importing CSS*/
import './App.css';
/*Importing Components*/
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import {Route, Routes} from "react-router-dom";


const App = () => {
    return (
        //TODO: main should not contain a nav, but should wrap the main content
        <main className="full-app">
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/Shop" element={<Shop/>}/>
                <Route path="/About" element={<About/>}/>
                <Route path="/Contact" element={<Contact/>}/>
                <Route path="/Login" element={<Login/>}/>
            </Routes>
            <Footer/>
        </main>
    );
}

export default App;
