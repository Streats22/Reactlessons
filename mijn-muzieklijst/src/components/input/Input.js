import "./Input.css";
import React from "react";

class Input extends React.Component{

    constructor(props) {
        super(props);
        this.state = {inputValue: ""}
    }

    enter = (event) =>{
        console.log('het werkt wel')
        if(event.keyCode === 13 && this.state.inputValue !== ""){
            this.props.inputPressedEnter(this.state.inputValue);
        }
    }

    click = () =>{


            this.props.inputPressedEnter(this.state.inputValue);
    }




    input = (event) => {
        this.setState({inputValue: event.target.value});
    }
    render(){
        return(
            <>
                <input type="text" value={this.state.inputValue} className="input" onChange={this.input} onKeyUp={this.enter}/>
                <button type="text" value={this.state.inputValue} className="Button" onClick={this.click} >Submit</button>
            </>
    );
    }
}

export default Input;