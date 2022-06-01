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

    const addTask = (event) => {
        event.preventDefault();
        if (event.target[0].value.length > 0) {
            const newTask = {text: event.target[0].value, id: nanoid()}
            setTodoList([...todoList, newTask]);
        }
    };

    const deleteTask = id => {
        setTodoList(todoList.filter(task => task.id !== id));
    };

    const tasks = todoList.map(task => {
        return (
            <Task
                key={task.id}
                txt={task.text}
                onDelete={() => deleteTask(task.id)}
            />
        );
    });


    return (
        <div className='container'>
            <AddTaskForm onAddTask={addTask} />
            {tasks}
        </div>
    );
};

export default App;
