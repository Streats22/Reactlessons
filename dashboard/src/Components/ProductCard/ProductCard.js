import "./ProductCard.css";

const ProductCard = (props) =>{
    const ProductCardClicked = () =>{
        props.OnCardClicking(props.id);
    }
    return(
    <li  onClick={ProductCardClicked} className="productList-item" >
        <img className="productsList-img" src={props.img} alt={props.name}/>
        <div className="product-img-div-sub">
            <p className="productsList-img-sub">{props.name}</p>
        </div>
    </li>
    )
}

export default ProductCard;