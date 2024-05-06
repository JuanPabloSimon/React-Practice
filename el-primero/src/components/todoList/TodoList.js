import React, {useState} from 'react';
import TodoForm from '../todoForm/TodoForm';
import TodoItem from '../todoItem/TodoItem';

const TodoList = () => {
    const [toDos, setToDos] = useState([]);

    const handleAddToDo = (text) => {
        setToDos([...toDos, {id: toDos.length + 1, text: text}])
    }

    const handleDeleteToDo = (id) => {
        const updatedToDos = toDos.filter(todo => todo.id !== id);
        setToDos(updatedToDos);
    }

    return (
        <div> 
            <h2> To-Do List </h2>
            <TodoForm addTodo={handleAddToDo} />
            {toDos.map(todo => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    onDelete={() => handleDeleteToDo(todo.id)}
                    />
            ))}
        </div>
    )
}

export default TodoList;