"use client"

import { useEffect, useState } from "react"
// if want to update Ui , dom should be rerender( re execute), in react, if you want to rerender the Ui , the only way is you need to update state variable value ,==> when every state variable values changes, dom will rerender and UPdates the UI
export const BasicButtonClick = () => {
  const [text, setText] = useState("This is my para graph")
  const list = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  const [stateList, setList] = useState(list)
  const [todos, setTodos]=useState(null)

  const handleClick = () => {
    setText("updated new paragraph text")
  }// to perform side effects like data fetching and to update the Ui again
  //


const fetchingDataFromAPI = async () => {
    try {
      let response = await fetch("https://jsonplaceholder.typicode.com/todos")
      response = await response.json()
      console.log(response, "response from api")
      if(response)
      {
        setTodos(response)
      }
    }
    catch (error) {
    }
  }
  // fetchingDataFromAPI()

  //mounting phase
  useEffect(() => {
    fetchingDataFromAPI()
  }, [])


   // updating phase
   useEffect(() => {
    console.log(text, "text")
  }, [text, stateList])


  const handleElementClick = (e, index) => {
    list[index] = list[index] + 1
    setList([...list])
  }

  console.log( todos &&todos,"state varaiable")
  return <div>
    <p>{text}</p>
    <button onClick={handleClick}> This is my button</button>
    {list.map((ele, index) => <p onClick={(e) => handleElementClick(e, index)}>{ele}</p>)}
    { todos && todos?.map((ele, index)=>{ 
        return <p key={`${ele?.id}${index}  `}> {ele.title}</p>})}
  </div>
} 
