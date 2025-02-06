export const TodoItem = (props) => {

    console.log(props, "props in todoItem")

    const { todoData, handleDeleteFromParent, handleCompleteTodotaskProp } = props

    const handleDeleteButton = () => {
        handleDeleteFromParent()
    }





    return <div className="flex gap-6 items-center justify-center">

        <p>{todoData.name}</p>
        {todoData.isCompleted ?  <button onClick={handleCompleteTodotaskProp}>make it as not completed</button> :
            <button onClick={handleCompleteTodotaskProp}>complete todo</button>}
        <button onClick={handleDeleteButton}>delete</button>

    </div>
}