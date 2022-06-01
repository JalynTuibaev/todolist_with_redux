import React from 'react';
import './AddTaskForm.css';

const AddTaskForm = props => {
    return (
        <div className='form-body'>
            <form onSubmit={props.onAddTask}>
                <input className='input' type='text' placeholder='Add new task' />
                <button className='btn' type='submit'>Add</button>
            </form>
        </div>
    );
};

export default AddTaskForm;