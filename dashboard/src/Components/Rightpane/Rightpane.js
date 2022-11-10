import "./Rightpane.css";

const Rightpane = ({onButtonClick, headerText, buttonSymbol, buttonText, ProductCards}) =>{
   let addProduct = () =>{
       onButtonClick()
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
            <li className="productList-item" key={product.id}>
                <img className="productsList-img" src={product.img} alt={product.name}/>
                    <div className="product-img-div-sub">
                        <p className="productsList-img-sub">{product.name}</p>
                    </div>
            </li>
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