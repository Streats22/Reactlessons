import "./Rightpane.css";
import ProductCard from "../ProductCard/ProductCard";
import Placeholder from "../Placeholder/Placeholder";

const Rightpane = ({ onProductCardClicked ,onButtonClick, headerText, buttonSymbol, buttonText, ProductCards}) =>{


    let OnCardClicking = (IdFromCard) =>{
        onProductCardClicked(IdFromCard);

    }
    let productCardsTobeRendered = ProductCards.map(product => {
        if(product.name === "placeholder"){
        return <Placeholder id={product.id} key={product.id} OnCardClicking={OnCardClicking} buttonText="Add Product"/>
        }
        return (
            <ProductCard OnCardClicking={OnCardClicking} id={product.id} key={product.id} name={product.name} img={product.img}/>

        );
    });
    return(
      <section className="rightpane-warpper">
          <header className="header">
              <h1 className="header-h1">{headerText || "My Dashboard"}</h1>
          </header>
          <ul className="productsList">
              {productCardsTobeRendered}
          </ul>
      </section>
    );

}

export default Rightpane;