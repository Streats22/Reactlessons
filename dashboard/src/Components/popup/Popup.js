import "./Popup.css";
import React from "react";

class Popup extends React.Component{
    constructor(props) {
        super(props);
        this.state = {input: ""}
    }
    input = (event) =>{
        this.setState({input: event.target.value});
    }

    updateProducts = () => {
        if( this.state.input !== "" ){
        this.props.addButtonClick(this.state.input);
        }
    }
    render(){
        return(
            <>
                <article className="popup">
                    <div className="popup-wrapper">
                        <label htmlFor="name" className="popup-label">Naam</label>
                        <input value={this.state.input} onChange={this.input} type="text" className="popup-input"/>
                    </div>
                    <button  onClick={this.updateProducts} className="popup-button" id="name">ADD</button>

                </article>

            </>
        )
    }
}
export default Popup;