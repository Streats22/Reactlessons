
import React from "react";

class Items extends React.Component{
    constructor(props) {
        super(props);
        this.className = "";
        this.state ={done: this.props.done}
    }

    onItemClick = () =>{
        this.setState({done: !this.state.done});

    }

    render(){
        if(this.state.done){
            this.className = "todo-item todo-item-done";

        }
        else {
            this.className = "todo-item";
        }
    if(this.done === true) {
        this.className += " todo-item-done";
    }
    return(
        <li onClick={this.onItemClick} className={this.className}>{this.props.name}</li>
        )
     }
}


export default Items;