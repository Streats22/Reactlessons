import "../CSS/Countercard.css";

const CounterCard = () =>{
    return(
        <body class="Box">
            <article class="CounterCard">
                <section class="counter_number">
                    0
                </section>
                <section class="counter_buttons">
                    <button className="Counter_lower">
                        Less
                    </button>
                    <button class="Counter_higher">
                        More
                    </button>
                </section>

            </article>
        </body>
    );
}
export default CounterCard;