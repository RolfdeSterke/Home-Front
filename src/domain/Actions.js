import axios from 'axios'

export async function fetchMessage(message, returnValue) {
    await Promise.all([
        axios.get("http://127.0.0.1:5000/"+message).then(function (response) {
            console.log(response);
            returnValue(response.data.message)
        })
    ])
}

export async function fetchTodoList(returnValue, hidden) {
    if (hidden) {
        await Promise.all([
            axios.get("http://192.168.178.14:5000/api/todos/hidden=True").then(function(response) {
                returnValue(response.data.todos)
            })
        ])
    } else {
        await Promise.all([
            axios.get("http://192.168.178.14:5000/api/todos").then(function (response) {
                returnValue(response.data.todos)
            })
        ])
    }
}

export async function deleteTodo(id) {
    await Promise.all([
        axios.delete("http://192.168.178.14:5000/api/todos/"+id)
    ])
}

export async function saveTodoChanges(id, comment, uri, image_uri, is_hidden, returnValue) {
    let url = "";
    if (id === -1){
        url = "http://192.168.178.14:5000/api/todos"
    } else {
        url = "http://192.168.178.14:5000/api/todos/"+id
    }
    await Promise.all([
        axios.post(url,
            {
                "comment": comment,
                "uri": uri,
                "image_uri": image_uri,
                "is_hidden": is_hidden,
                "is_done": false
            }).then(function(response) {
                returnValue(response.data)
        })
    ])
}