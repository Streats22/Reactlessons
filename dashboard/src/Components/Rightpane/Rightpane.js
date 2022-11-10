import "./Rightpane.css";

const Rightpane = ({headerText, buttonSymbol, buttonText, ProductCards}) =>{
    let productCardsTobeRendered = ProductCards.map(product => {
        if(product.name === "placeholder"){
<<<<<<< Updated upstream
        return(<li className="productList-item">
            <button className="productlist-button">{buttonSymbol || "-"}</button>
=======
        return(<li className="productList-item" key={product.id}>
            <button onClick={addProduct} className="productlist-button">{buttonSymbol || "-"}</button>
>>>>>>> Stashed changes
            <p className="productList-text">{buttonText || "Lorem ipsum"}</p>
        </li>
        );
        }
        return (
<<<<<<< Updated upstream
            <li className="productList-item">
                <button className="productlist-button">{buttonSymbol || "-"}</button>
=======
            <li className="productList-item" key={product.id}>
                <img className="productsList-img" src={product.img} alt={product.name}/>
                    <div className="product-img-div-sub">
                        <p className="productsList-img-sub">{product.name}</p>
                    </div>
>>>>>>> Stashed changes
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