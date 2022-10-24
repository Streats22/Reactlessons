import "./PokemonCard.css";
import React from "react";
class PokemonCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {hp: 0, caughtOrRan: false,}
    }
    componentDidMount(){
        setTimeout(() => {
            this.setState({hp: this.props.HP})
        },500);
    }
    attack  = () =>{
        let randomNumber = Math.floor(Math.random() * (30 - 1) + 1);
        this.setState({
            hp: this.state.hp - randomNumber
        }, function(){
            if(this.state.hp <= 0){
                this.setState({
                    hp: 0,
                    caughtOrRan: true,
                })

            }
        })
    }
    catch  = () =>{

        this.setState({caughtOrRan: true})
        let damagePercentage = 100 - Math.floor(this.state.hp / this.props.HP * 100 );
        let dice = Math.floor(Math.random() * (100 - 1 ) + 1);
        if(damagePercentage > dice){
            this.props.updateCounter();
        }

    }
        render()
        {
            let buttons = null;
            if(this.state.caughtOrRan === false){
                buttons =
                    <>
                        <button className="pokemonCard-button pokemonCard-button-attack" onClick={this.attack}>Attack</button>
                        <button className="pokemonCard-button pokemonCard-button-catch" onClick={this.catch}>
                        Catch
                        </button>

                    </>
            }
            let types = this.props.pokemonType.map(function (type) {
                return <span key={type} className={`pokemonCard-type pokemonCard-type-${type}`}>{type}</span>
            });
            return (
                <article className="pokemonCard">
                    <header className="pokemonCard-header">
                        <h2 className="pokemonCard-title">{this.props.Name}</h2>
                        <div className="pokemonCard-labelWrapper">
                            {types}
                        </div>
                    </header>
                    <section className="pokemonCard-section">
                        <figure>
                            <img
                                src={this.props.img}
                                alt="" className="pokemonCard-img"/>
                        </figure>
                        <div className="pokemonCard-hp-ability">
                            <h3 className=" pokemonCard-HP">{this.state.hp}</h3>
                            <h5 className="pokemonCard-ability">{this.props.ability}</h5>
                        </div>
                    </section>
                    <footer className="pokemonCard-footer">

                        {buttons}
                    </footer>
                </article>
            )
        }
    }

export default PokemonCard;