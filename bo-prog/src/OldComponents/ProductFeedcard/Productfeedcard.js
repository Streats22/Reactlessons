import "./Productfeedcard.css";


const Productfeedcard = ({product, select}) => {
    return (
        <>
            <article className="feedcard-main">
                <h3 onClick={select}>{product.title}</h3>
                <h2>{product.subtitle}</h2>
                <h2>{product.location} {product.rating}</h2>
                <ul>
                    {product.bullets.map(bullet => (
                        <li>{bullet}</li>
                    ))}
                </ul>
                <span>{product.posted}</span>
            </article>
        </>
    )
}
export default Productfeedcard;