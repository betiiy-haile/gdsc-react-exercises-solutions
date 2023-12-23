import React, { useState } from 'react'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'

const App = () => {

  const [todos, setTodos] = useState([]);

  const handleAddTodo = (newTodo) => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, { text: newTodo, completed: false }]);
    }
  };

  const handleToggleComplete = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
  };

  const handleEditTodo = (index, newText) => {
    const updatedTodos = [...todos];
    updatedTodos[index].text = newText;
    setTodos(updatedTodos);
  };

  const handleDeleteTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  return (
    <div>
      
        <h1>Task List</h1>

        <TodoInput handleAddTodo={handleAddTodo} />

        <h2>Your Tasks</h2>

        <TodoList
          todos={todos}
          handleToggleComplete={handleToggleComplete}
          handleEditTodo={handleEditTodo}
          handleDeleteTodo={handleDeleteTodo} />      
    </div>
  )
}

export default App


