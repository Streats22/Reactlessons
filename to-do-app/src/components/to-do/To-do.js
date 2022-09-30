import Items from "../item/Items";
import "./To-do.css";

const Todo = () =>{
    const tasks = [
        {
            name: "Groceries",
            done: false,
            id: 1,
        },
        {
            name: "Gaming",
            done: false,
            id: 2,
        },
        {
            name: "Homework",
            done: false,
            id: 3,
        },
        {
            name: "Coding cool stuff",
            done: false,
            id: 4,
        },
        {
            name: "Studying",
            done: false,
            id: 5,
        },
        {
            name: "Cooking",
            done: true,
            id: 6,
        },
        {
            name: "React",
            done: true,
            id: 7,
        },
    ];


    let listItems = tasks.map( task => {
        return <Items key={task.id} name={task.name} done={task.done}/>
    });



    return(
        <section className="todo-section">
            <article className="todo">
                <header className="todo-header">
                    <h1>Things todo:</h1>
                </header>
                <ul className="todo-list">
                    {listItems}
                </ul>
            </article>
        </section>
    )
}

export default Todo;