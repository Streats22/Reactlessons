import "../CSS/Header.css";
const Header = (props) =>{
    return(
       <header class="header">
           <h1 class="header_h1">{props.bigTitle || "Defeault big Title"}</h1>
           <h2 class="header_h2">{props.smallTitle || "Default small Title"}</h2>
           <button class="header_button">{props.buttonText || "default" }</button>
       </header>

    )
}

export default Header;