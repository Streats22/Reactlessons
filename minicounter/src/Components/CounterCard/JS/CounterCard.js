import React from "react";
import "../CSS/Countercard.css";


class CounterCard extends React.Component{
    //als een countercard wordt aangemaakt voert de contstructor zichzelf uit
    constructor(){
        super();
        this.state ={} = {number: 0};

    }
     increase = () => {
        this.setState({number: this.state.number  +1});
    }
    decrease = () => {
        this.setState({number: this.state.number -1});

    }
    render(){
        return(
            <container className="Box">
                <article className="counter-card">
                    <section className="counter-number">
                    <h1>{this.state.number}</h1>
                    </section>
                    <section className="counter-buttons">
                        <button className="counter-lower" onClick={this.decrease}>
                         Less
                        </button>
                        <button onClick={this.increase} className="counter-higher">
                          More
                        </button>
                    </section>

             </article>
          </container>
        )
    }
}
export default CounterCard;