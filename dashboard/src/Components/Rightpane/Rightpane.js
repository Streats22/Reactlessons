import "./Rightpane.css";

const Rightpane = ({headerText, buttonSymbol, buttonText, ProductCards}) =>{
    let productCardsTobeRendered = ProductCards.map(product => {
        if(product.name === "placeholder"){
        return(<li className="productList-item">
            <button className="productlist-button">{buttonSymbol || "-"}</button>
            <p className="productList-text">{buttonText || "Lorem ipsum"}</p>
        </li>
        );
        }
        return (
            <li className="productList-item">
                <button className="productlist-button">{buttonSymbol || "-"}</button>
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