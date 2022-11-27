import "./SubscriptionData";
import {SubscriptionData} from "./SubscriptionData";

const Subscriptions = () =>(
    <div>
    {SubscriptionData.map(Subscription => (
            <div className="subscription-list" key={Subscription.id}>
                <h3>{Subscription.title}</h3>
                <span>{Subscription.description}</span>
                <ul className="subscription-items">
                    <li>{Subscription.tier1}</li>
                    <li>{Subscription.tier2}</li>
                    <li>{Subscription.tier3}</li>
                    <li>{Subscription.tier4}</li>
                </ul>
            </div>
        ))}
        </div>
)

export default Subscriptions;