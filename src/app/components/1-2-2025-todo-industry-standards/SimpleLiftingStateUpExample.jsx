  "use client"
  
  
  export const SimpleLiftingStateUpParent=()=>{

    const funcDefinition=(childValue, anotherValue)=>{

        //child value is an argument pass by onclick
      console.log("called from child", childValue, anotherValue)
    }

   return <SimpleLiftingStateUpChild  name="gowthami"  childProp={funcDefinition}  />
}


const SimpleLiftingStateUpChild=(props)=>{

    const {name,childProp}=props

    const childFunction=(event)=>{

        console.log(event,"event ")
    childProp("data", event)


    }
 

    return  <button onClick={childFunction}>Clickme</button>
}


const example=(x)=>{
     const y=1 +x()
     console.log(y,"y")
}

const z=()=>{
    const k=2
    return k
}

example(z)
