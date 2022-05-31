import React, {useState} from 'react';
import {nanoid} from "nanoid";
import './App.css';
import AddTaskForm from "./Components/AddTaskForm";
import Task from "./Components/Task";

const App = () => {
    const [todoList, setTodoList] = useState([
        {text: 'Do homework', id: nanoid()},
        {text: 'Play football', id: nanoid()},
        {text: 'Programming', id: nanoid()},
        {text: 'Cleaning', id: nanoid()}
    ]);

    const tasks = todoList.map(task => {
        return (
            <Task
                key={task.id}
                txt={task.text}
            />
        );
    });


    return (
        <div className='container'>
            <AddTaskForm />
            {tasks}
        </div>
    );
};

export default App;
