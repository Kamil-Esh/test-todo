import React from 'react';

const TodoTitle = ({todos}) => {
    return (
        <div className='d-flex justify-content-between align-items-center'>
            <h1 className="todo-title text-center">TodoList</h1>
            <div className='d-flex'>
                <p className='me-4'>Total tasks: {todos.length}</p>
            </div>
        </div>
    );
};

export default TodoTitle;