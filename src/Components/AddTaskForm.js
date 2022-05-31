import React from 'react';
import './AddTaskForm.css';

const AddTaskForm = () => {
    return (
        <div className='form-body'>
            <form>
                <input className='input' type='text' placeholder='Add new task' />
                <button className='btn' type='button'>Add</button>
            </form>
        </div>
    );
};

export default AddTaskForm;