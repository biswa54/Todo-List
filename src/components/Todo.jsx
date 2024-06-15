import React from 'react';

function Todo({ todo, index, deleteItem }) {
  return (
    <div>
      <div className="card">
        <div className="todo">
          <p>{todo}</p>
          <div className="action">
            <input type="checkbox" />
            <button onClick={() => deleteItem(index)}>Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Todo;
