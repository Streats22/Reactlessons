import "../CSS/Card.css";

const Card  = (props) =>{
    let CardImage = <img src={"/img/" + props.image} alt="coffee" />
    if(props.image === undefined) {
        CardImage = <img src={"/img/Coffee_House_fun.jpg"}  alt="Cofee"/>;
        }
    return(
        <article class="card">
            <figure class="card_figure">
                {CardImage}
            </figure>
            <section class="card_section">
                <p>{props.text || "This is the basic text for a card"}</p>
            </section>
        </article>
    )
}

export default Card;