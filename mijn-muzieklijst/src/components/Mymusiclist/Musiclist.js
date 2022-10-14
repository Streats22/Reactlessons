import Items from "../item/Items";
import Input from "../input/Input";
import "./Musiclist.css";
import React from "react";
import { tasksObject } from "../../data/tasks";
class MusicList extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            tasks: [],
        }


    }
    //component DidMount runt na het aanmaken en tekenen een component
    componentDidMount(){
        this.setState({
            tasks: tasksObject,
        });
    }
    //Compontnent Didupdate na het updaten van de stat
    componentDidUpdate(){

    }
    update = () =>{
        let tempArray = this.state.tasks;
        let combindedArray = tempArray.concat([
            {
                name: "test",
                done: false,
                id: 10,
            }
        ]);
        this.setState({
            tasks: combindedArray,
        })
    }
    inputPressedEnter = (inputFromInputComponent) => {
        let toBeAdded = [{
            name: inputFromInputComponent,
            done: false,
            genre: "hip-hop",
            id: this.state.tasks.length + 1,
        }]

        let mergedArray = this.state.tasks.concat(toBeAdded);
        this.setState({
            tasks: mergedArray,
        })
    }
    mouseClick = (inputFromButton) =>{
        let ButtonsSubmit = [{
            name: inputFromButton,
            done: false,
            genre: "hip-hop",
            id: this.state.tasks.length + 1,
        }]
        let mergedArray = this.state.tasks.concat(ButtonsSubmit);
        this.setState({
            tasks: mergedArray,
        })
    }
    render() {

        let items = this.state.tasks.map(task => {
            return <Items done={task.done} name={task.name} key={task.id}> </Items>
        });
        return(
            <section className="todo-section">
                <article  className="todo">
                    <header className="todo-header">
                        <h1>{this.props.title}</h1>
                    </header>
                    <ul className="todo-list">
                        {items}
                    </ul>
                    <Input inputPressedEnter={this.inputPressedEnter} />

                </article>
            </section>
        )
    }
}
export default MusicList;