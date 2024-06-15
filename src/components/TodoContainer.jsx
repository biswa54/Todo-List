import React from 'react';
import Todo from './Todo';

function TodoContainer({ todos, deleteItem }) {
  return (
    <div>
      {todos.map((todo, index) => (
        <Todo key={index} todo={todo} index={index} deleteItem={deleteItem} />
      ))}
    </div>
  );
}

export default TodoContainer;
