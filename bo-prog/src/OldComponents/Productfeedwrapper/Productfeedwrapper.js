import "./Productfeedwrapper.css";
import Productfeedinfo from "../Productfeedinfocard/Productfeedinfo";
import Productfeedcard from "../ProductFeedcard/Productfeedcard";
import {useState} from "react";

const ProductFeedWrapper = ({allProducts}) => {
    const [selectedProduct, setSelectedProduct] = useState();

    console.log("selectedProduct", selectedProduct);

    return (
        <div className="wrapper-main">
            {/*TODO: Style this section so the children appear in a column*/}
            <section className="wrapper-section">
                {allProducts.map(product => (
                    <Productfeedcard product={product} select={() => setSelectedProduct(product.id)}/>
                ))}
                {selectedProduct !== undefined &&
                    <Productfeedinfo product={allProducts.find(product => product.id === selectedProduct)} />
                }
            </section>
            <section className="more-info">
                <button className="button-lm">Load more</button>
            </section>
        </div>
    )
}
export default ProductFeedWrapper;