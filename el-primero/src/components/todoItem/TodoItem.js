import React from 'react'
import './todoItem.css'


const TodoItem = ({todo, onDelete}) => {
    return (
        <div className='toDo'>
            <span className='toDoText'>{todo.text}</span>
            <button className='toDoButton' onClick={onDelete}>Eliminar</button>
        </div>
    );

}

export default TodoItem;
