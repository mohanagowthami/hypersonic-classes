"use client"
import { useState } from "react"
import { AddTodo } from "./AddTodo"
import { TodoItem } from "./TodoItem"

const TodoList = () => {
    const todos = [{
        name: "brushing",
        isCompleted: true,
    },
    {
        name: "break fast",
        isCompleted: false
    }]
    const [todosList, setterFunOfTodosList] = useState(todos)


    // const [ ]=useSta


    const buttonClickFromParent = (value, value2) => {

        console.log("button clicked in child and passing from child to parent", value, value2)
        setterFunOfTodosList([...todosList, { name: value, isCompleted: false }])


    }


    const handleDeleteFromParent = (index) => {
        console.log("delete button triggered and it index", index)

        const todosListCopy = [...todosList]
        todosListCopy.splice(index, 1)
        setterFunOfTodosList([...todosListCopy])
    }

    return <>
        <p>Todo  List</p>
        {/* this is one way to pass value in call back when you want to some extra details , this way will be more usable */}
        {/* <AddTodo title="this is title from parent passing as prop" buttonClickFromParent={(value) => buttonClickFromParent(value, "custom input")} /> */}

        <AddTodo title="this is title from parent passing as prop" buttonClickFromParent={buttonClickFromParent} />
        {todosList.map((ele, index) => {
            return <TodoItem todoData={ele} key={index} handleDeleteFromParent={() => handleDeleteFromParent(index)} />
        })
        }
    </>
}

export default TodoList