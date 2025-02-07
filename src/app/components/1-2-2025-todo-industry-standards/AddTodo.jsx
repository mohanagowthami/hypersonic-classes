"use client"

const { useState } = require("react")

export const AddTodo = (props) => {

    const { title, buttonClickFromParent } = props

    const [todoText, setTodoText] = useState("")

    const handleChange = (event) => {
        setTodoText(event.target.value)

    }

    const handleButtonClickFromChild = async() => {

        // buttonClickFromParent(todoText)

        try{

        let response= await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
              title: 'hypersonic new record',
              body: 'bar',
              userId: 1,
            }),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          })
         response= await response.json()
        }
        catch(error)
        {
            console.log(error,"error in post method")
        }
         



    }
    return <>
        <p> {title}</p>
        <input type="text" placeholder="enter todo" value={todoText} onChange={handleChange} />
        <button onClick={handleButtonClickFromChild}> Add ToDo</button>
    </>

}

