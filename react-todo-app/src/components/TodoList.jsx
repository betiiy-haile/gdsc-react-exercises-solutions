import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, handleToggleComplete, handleEditTodo, handleDeleteTodo }) => {
    return (
        <ul>
            {todos.map((todo, index) => (
                <TodoItem
                    key={index}
                    todo={todo}
                    index={index}
                    handleToggleComplete={handleToggleComplete}
                    handleEditTodo={handleEditTodo}
                    handleDeleteTodo={handleDeleteTodo}
                />
            ))}
        </ul>
    );
};

export default TodoList;


