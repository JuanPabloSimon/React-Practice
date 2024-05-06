import React, { useState } from 'react'
import './todoForm.css'

const TodoForm = ({ addTodo }) => {
    const [text, setText] = useState('');

    const handleChange = (e) => {
        setText(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim() !== '') {
            addTodo(text);
            setText('');
        }
    }

    return (
        <form id='form' onSubmit={handleSubmit}>
            <input 
                type='text'
                value={text}
                onChange={handleChange}
                placeholder='Agregar Tarea..'
            />
            <button type='submit'>Agregar ToDo</button>
        </form>
    )
};

export default TodoForm;
