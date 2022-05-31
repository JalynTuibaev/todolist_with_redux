import React from 'react';
import './Task.css';

const Task = props => {
    return (
        <div className='todo-block'>
            <h4 className='todo-txt'>{props.txt}</h4>
            <button className='btnDelete'>Delete</button>
        </div>
    );
};

export default Task;