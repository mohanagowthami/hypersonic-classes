"use client"
import { useEffect } from "react"

const BasicPropExampleParent = () => {
     const customArrowFunction = () => {
          alert("button clicked")
        // console.log("clicked")
    }
    return <div>
        this is parent coomponent
        <BasicPropExampleChildOne title="this is child one" age={26} isMarried={false} func={customArrowFunction} />
        <BasicPropExampleChildOne title="this is child Two" age={27} isMarried={true} func={customArrowFunction} />
        <BasicPropExampleChildOne title="this is child Three" age={28} isMarried={true} func={customArrowFunction} />
    </div>
}
const BasicPropExampleChildOne = (props: any) => {
   console.log(props, "props in child component")
    const { title, age, isMarried, func } = props
    // only once at the time of mounting
    useEffect(() => {
        func()
    }, [])
   return <div>
        {title} {age} {isMarried ? "true" : "false"}
        </div>
}

// const BasicPropExampleChildTwo = () => {
//     return <div>
//         this is child component two
//     </div>
// }

// const BasicPropExampleChildThree = () => {
//     return <div>
//         this is child component three
//     </div>
// }


export default BasicPropExampleParent