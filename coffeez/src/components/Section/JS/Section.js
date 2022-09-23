import "../../Card/CSS/Card.css";
import "../CSS/Section.css";
const Section = (props) =>{
    return(
        <section class="section">
            <header class="section_header">
                <i className="fas fa-coffee"></i>
                <h2 class="section_h2">{props.titleH2 || "Default H2"}</h2>
            </header>
            <div class="section_wrapper">
                {props.children}
            </div>
        </section>
    )
}

export default Section;