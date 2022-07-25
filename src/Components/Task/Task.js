import React from 'react';
import './Task.css';

const Task = props => {
    return (
        <div className='todo-block'>
            <h4 className='todo-txt'>{props.txt}</h4>
            <button onClick={props.onDelete} className='btnDelete'>Delete</button>
        </div>
    );
};

export default Task;