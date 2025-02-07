export const TodoItem = (props) => {

    console.log(props, "props in todoItem")

    const { todoData, handleDeleteFromParent, handleCompleteTodotaskProp } = props

    const handleDeleteButton = () => {
        // handleDeleteFromParent()
        try {
            fetch('https://jsonplaceholder.typicode.com/posts/1', {
                method: 'DELETE',
            });
        }
        catch (error) {
            console.log(error, "error")
        }

    }

    const update = async () => {
        // handleCompleteTodotaskProp
        try {
            let response = await fetch("https://jsonplaceholder.typicode.com/posts/1", {

                method: "PATCH",
                body: JSON.stringify({

                    title: "nre record",

                }),

                headers: {
                    "conten-type": "application/json"
                }

            })

            response = response.json()




        }
        catch (error) {

        }



    }





    return <div className="flex gap-6 items-center justify-center">

        <p>{todoData.title}</p>
        <div class='todo-item'>
            <input type="checkbox" checked={todoData.completed} onChange={update} />



            {todoData.completed ? "done" : "needs to be done"}

            <button onClick={handleDeleteButton} className="delete-todoItem">delete</button>
        </div>

    </div>
}