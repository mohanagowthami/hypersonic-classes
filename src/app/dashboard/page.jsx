import X, { Y } from "../components/NewHeader"

const Dashboard=()=>{


    const list=[1,2,3,4,5,"new array element"]
    return <div> 
    
    <p> this is dashboard</p>
    <p>this is another </p>

    { list.map((ele, index)=>{
        return <p >{ele+2}</p>

    })}
    <X/>
   <Y/>
    </div>
}


export default Dashboard


