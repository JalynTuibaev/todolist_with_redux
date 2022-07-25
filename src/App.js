import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import AddTaskForm from "./Components/AddTaskForm";
import Task from "./Components/Task";
import Spinner from "./Components/UI/Spinner/Spinner";
import {addTodos, deleteTodos, fetchTodos} from "./store/actions";
import './App.css';

const App = () => {
    const todos = useSelector(state => state.todos);
    const loading = useSelector(state => state.loading);
    const dispatch = useDispatch();

    const addTask = async e => {
        e.preventDefault();
        if (e.target[0].value.length > 0) {
            await dispatch(addTodos(e.target[0].value));
            await dispatch(fetchTodos());
            e.target[0].value = '';
        }
    };

    const deleteTask = async id => {
        await dispatch(deleteTodos(id));
        await dispatch(fetchTodos());
    };

    useEffect(() => {
        dispatch(fetchTodos());
    }, [dispatch]);

    let tasks = todos && Object.keys(todos).map(task => (
        <Task
            key={task}
            txt={todos[task].text}
            onDelete={() => deleteTask(task)}
        />
    ));

    if (loading) {
        tasks = <Spinner/>;
    }


    return (
        <div className='container'>
            <AddTaskForm onAddTask={addTask} />
            {tasks}
        </div>
    );
};

export default App;
