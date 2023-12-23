import React, { useState } from 'react';

const TodoItem = ({ todo, index, handleToggleComplete, handleEditTodo, handleDeleteTodo }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editText, setEditText] = useState(todo.text);

    const handleInputChange = (event) => {
        setEditText(event.target.value);
    };

    const handleEdit = () => {
        if (editText.trim() !== '') {
            handleEditTodo(index, editText);
            setIsEditing(false);
        }
    };

    return (
            <li className='todo-item'>
                <span >
                    <input
                        type="checkbox"
                        checked={todo.completed}
                        onChange={() => handleToggleComplete(index)}
                    />
                    {isEditing ? (
                        <input
                            type="text"
                            value={editText}
                            onChange={handleInputChange}
                            onBlur={handleEditTodo}
                        />
                    ) : (
                        !todo.completed ? <span >{todo.text}</span> : <del >{todo.text}</del>
                    )}
                </span>

                <span>
                    {!isEditing && <button
                        onClick={() => setIsEditing(true)}
                    >
                        Edit
                    </button>}
                    {isEditing && <button
                        onClick={handleEdit}
                    >
                        Save
                    </button>}
                    <button
                        onClick={() => handleDeleteTodo(index)}
                    >
                        Delete
                    </button>
                </span>

            </li>
    );
};

export default TodoItem;


