import "./Productfeedinfo.css";


const Productfeedinfo = ({product}) => {
    return(
        <>
            <article className="productfeedinfo-main">
                <h1>{product.title}</h1>
                <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aspernatur delectus dignissimos dolore dolorum, id iste laudantium magni necessitatibus nemo omnis, placeat porro quas, tenetur voluptate. Enim minima reprehenderit ut. </p>
            </article>
        </>
    )
}
export default Productfeedinfo;