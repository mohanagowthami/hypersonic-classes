"use client"

const { useState } = require("react")

export const AddTodo = (props) => {

    const { title, buttonClickFromParent } = props

    const [todoText, setTodoText] = useState("")

    const handleChange = (event) => {
        setTodoText(event.target.value)

    }

    const handleButtonClickFromChild = () => {

        buttonClickFromParent(todoText)

    }
    return <>
        <p> {title}</p>
        <input type="text" placeholder="enter todo" value={todoText} onChange={handleChange} />
        <button onClick={handleButtonClickFromChild}> Add ToDo</button>
    </>

}

