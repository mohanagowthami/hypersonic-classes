export const TodoItem = (props) => {

    console.log(props, "props in todoItem")

    const { todoData, handleDeleteFromParent, handleCompleteTodotaskProp } = props

    const handleDeleteButton = () => {
        handleDeleteFromParent()
    }





    return <div className="flex gap-6 items-center justify-center">

        <p>{todoData.title}</p>
        <div class='todo-item'>
            <input type="checkbox"  checked={todoData.completed} onChange={handleCompleteTodotaskProp} /> 

            

            {todoData.completed ? "done" : "needs to be done"}

            <button onClick={handleDeleteButton} className="delete-todoItem">delete</button>
        </div>

    </div>
}