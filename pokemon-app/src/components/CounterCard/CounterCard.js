import "./CounterCard.css";

const CounterCard = (props) =>{
    return(

            <section className="counterCard">
                <h2 className="counterCard-h2">{props.counter}</h2>
            </section>

    );
}

export default CounterCard;