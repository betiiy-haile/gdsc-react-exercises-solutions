import React, { useState } from 'react';

const TodoInput = ({ handleAddTodo }) => {

    const [newTodo, setNewTodo] = useState('');

    const handleInputChange = (event) => {
        setNewTodo(event.target.value);
    };

    const handleAddClick = () => {
        handleAddTodo(newTodo);
        setNewTodo('');
    };

    return (
        <div>
            <input
                type="text"
                placeholder='Add task here...'
                value={newTodo}
                onChange={handleInputChange}
            />
            <button
                onClick={handleAddClick}
            >
                Add Todo
            </button>
        </div>
    );
};

export default TodoInput;


