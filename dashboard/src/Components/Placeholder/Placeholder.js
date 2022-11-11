import "./Placeholder.css";

const Placeholder = (props) =>{
    const PlacholderClicked = () =>{
        props.OnCardClicking(props.id);
    }
    return(
        <li className="productList-item" >
            <button onClick={PlacholderClicked} className="productlist-button" ></button>
            <p className="productList-text">{props.buttonText || "Lorem ipsum"}</p>
        </li>
    );
}

export default Placeholder;