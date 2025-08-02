import React from 'react';
import { useState } from 'react';

// Todo list component
function TodoList() {
  const [todos, setTodos] = useState(['Learn React', 'Build an app']);
  const [inputValue, setInputValue] = useState('');

  const addTodo = () => {
    if (inputValue.trim()) {
      setTodos([...todos, inputValue]);
      setInputValue('');
    }
  };

  const removeTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div className="todo-card">
      <h3>Todo List</h3>
      
      <div className="todo-input-group">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Add a new todo..."
          className="todo-input"
          onKeyPress={(e) => e.key === 'Enter' && addTodo()}
        />
        <button
          onClick={addTodo}
          className="btn btn-add"
        >
          Add
        </button>
      </div>

      <ul className="todo-list">
        {todos.map((todo, index) => (
          <li key={index} className="todo-item">
            <span>{todo}</span>
            <button
              onClick={() => removeTodo(index)}
              className="btn-remove"
            >
              ×
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;