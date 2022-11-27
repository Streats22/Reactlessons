import "./Features.css";
import {featuresData} from "./FeatureData";


const Features = () =>
    <div className="features-main">
        {featuresData.map(feature => (
            <div className="feature-items" key={feature.id}>
                <i className={feature.icon}></i>
                <h3>{feature.title}</h3>
                <span>{feature.description}</span>
            </div>
        ))}
    </div>;

export default Features;