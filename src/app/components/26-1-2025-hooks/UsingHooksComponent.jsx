"use client"

import { useState } from "react"

export const UsingHooksComponent = () => {

    const [customName, setName] = useState("dummy")
    const handleCallback = (event) => {
        console.log(event, "event")
        setName(event.target.value)
     }
   

     



 return <div>
        <p> using predefined hooks like useState and call back functions</p>
        <input type="text" id="input" placeholder="enter the name" value={customName} onChange={handleCallback} />
        <p> {` ${2 + 3} +abc  ${customName}`}</p>
    </div>


}



