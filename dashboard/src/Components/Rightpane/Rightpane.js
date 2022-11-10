import "./Rightpane.css";
import ProductCard from "../ProductCard/ProductCard";

const Rightpane = ({  onButtonClick, headerText, buttonSymbol, buttonText, ProductCards}) =>{
   let addProduct = () =>{
       onButtonClick()
    }

    let OnCardClicking = (IdFromCard) =>{
       console.log("Hallo I'm Clicked: " + IdFromCard)


    }
    let productCardsTobeRendered = ProductCards.map(product => {
        if(product.name === "placeholder"){
        return(<li className="productList-item" key={product.id}>
            <button onClick={addProduct} className="productlist-button">{buttonSymbol || "-"}</button>
            <p className="productList-text">{buttonText || "Lorem ipsum"}</p>
        </li>
        );
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