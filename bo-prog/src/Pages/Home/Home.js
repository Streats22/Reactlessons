import "./Home.css";
import Jumbotron from "../../Components/Jumbotron/Jumbotron";
import AboutSection from "../../Components/AboutSection/AboutSection";
import Features from "../../Components/Features/Features";
import Subscriptions from "../../Components/Subscriptions/Subscriptions";

const Home = () => {
    return(
        <>
            <Jumbotron/>
            <AboutSection alt={"Iphone-12"} image={"https://images.pexels.com/photos/9555131/pexels-photo-9555131.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"}/>
            <Features/>
            <Subscriptions />

        </>
    )
}
export default Home;