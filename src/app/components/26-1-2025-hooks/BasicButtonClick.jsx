"use client"

import { useEffect, useState } from "react"


// if want to update Ui , dom should be rerender( re execute), in react, if you want to rerender the Ui , the only way is you need to update state variable value ,==> when every state variable values changes, dom will rerender and UPdates the UI

export const BasicButtonClick = () => {
    const [text, setText] = useState("This is my para graph")
    const list = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    const [ stateList, setList]=useState(list)
    
    const handleClick = () => {
    setText("updated new paragraph text")
    }// to perform side effects like data fetching and to update the Ui again
    //
   useEffect(() => {
    }, [])
    const handleElementClick = (e, index) => {
      list[index] = list[index] + 1
      setList([...list])
    }
    return <div>
        <p>{text}</p>
        <button onClick={handleClick}> This is my button</button>
        {list.map((ele, index) => <p onClick={(e) => handleElementClick(e, index)}>{ele}</p>)}
 </div>
}
