export const TodoItem=(props)=>{

    console.log(props,"props in todoItem")
   
    const {name , isCompleted}=props.todoData

    const handleDeleteButton=()=>{
       props.handleDeleteFromParent()
    }


    return <div className="flex gap-6 items-center justify-center">
    
    <p>{name}</p>
    <button>update</button>
    <button onClick={handleDeleteButton}>delete</button>

    </div>
}