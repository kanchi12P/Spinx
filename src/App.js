import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/Navbar";
import Foot from "./components/Footer";
import Home from "./components/home";
import PageTwo from "./components/page2";
import PageThree from "./components/page3";
import Acc from "./components/page4";
import PageFive from "./components/page5";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
    return ( <
        div className = "App" >
        <
        NavBar fixed = "top" / >

        p < Home / > <
        PageTwo / >
        <
        PageThree / >
        <
        Acc / >
        <
        PageFive / >
        <
        Foot / > < /
        div >
    );
}

export default App;