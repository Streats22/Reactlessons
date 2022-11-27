import "./AboutSection.css";


const AboutSection = (props) =>(

    <div className="about">
        <div className="about-text">
            <h2 >The <i className="fa-solid fa-mobile-notch "></i> Shop</h2>
            <span>This is just a bit of text about YourIphoneStore</span>
        </div>
        <div className="about-img">
            <img className="about-img-info" src={props.image} alt={props.alt}/>
        </div>
   </div>
);

export default AboutSection;