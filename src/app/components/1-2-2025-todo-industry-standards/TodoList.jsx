"use client"
import { AddTodo } from "../1-2-2025-todo-industry-standards/AddTodo"

const TodoList = () => {
    const todos = [{
        name: "brushing",
        isCompleted: true,
    },
    {
        name: "break fast",
        isCompleted: false
    }]


    const buttonClickFromParent = (value, value2) => {

        console.log("button clicked in child and passing from child to parent", value, value2)

    }

    return <>
        <p>Todo  List</p>
        {/* this is one way to pass value in call back when you want to some extra details , this way will be more usable */}
        <AddTodo title="this is title from parent passing as prop" buttonClickFromParent={(value) => buttonClickFromParent(value, "custom input")} />

        {/* <AddTodo  title="this is title from parent passing as prop"  buttonClickFromParent={buttonClickFromParent}/> */}
        {todos.map((ele, index) => {
            return <p>{ele.name}</p>
        })
        }
    </>
}

export default TodoList