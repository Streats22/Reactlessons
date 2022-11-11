import "./Popup.css";
import React from "react";

class Popup extends React.Component{
    constructor(props) {
        super(props);
        this.state = {input: ""}
    }
    componentDidMount(){
        if(this.props.cardClicked !== {})
        this.setState({input: this.props.cardClicked.name})
    }
    input = (event) =>{
        this.setState({input: event.target.value});
    }

    AddProducts = () => {
        if( this.state.input !== "" ){
        this.props.addButtonClick(this.state.input);
        }
    }

    EditProduct = () => {
        this.props.editButtonClicked(this.state.input);
    }
    render(){
        let button = <button onClick={this.AddProducts} className="popup-button" id="name">ADD</button>;
        if(this.props.editMode === true){ button = <button  onClick={this.EditProduct} className="popup-button" id="name">Edit</button>;
        }
        return(
            <>
                <article className="popup">
                    <div className="popup-wrapper">
                        <label htmlFor="name" className="popup-label">Naam</label>
                        <input value={this.state.input} onChange={this.input} type="text" className="popup-input"/>
                    </div>
                    {button}
                </article>

            </>
        )
    }
}
export default Popup;