import axios from "axios";

export const ADD = 'ADD';
export const DELETE = 'DELETE';

export const FETCH_TODO_REQUEST = 'FETCH_TODO_REQUEST';
export const FETCH_TODO_SUCCESS = 'FETCH_TODO_SUCCESS';
export const FETCH_TODO_FAILURE = 'FETCH_TODO_FAILURE';

export const addTodo = todo => ({type: ADD, payload: todo});
export const deleteTodo = id => ({type: DELETE, payload: id});

export const fetchTodoRequest = () => ({type: FETCH_TODO_REQUEST});
export const fetchTodoSuccess = todos => ({type: FETCH_TODO_SUCCESS, payload: todos});
export const fetchTodoFailure = () => ({type: FETCH_TODO_FAILURE});

export const fetchTodos = () => {
    return async dispatch  => {
       try {
           dispatch(fetchTodoRequest());

           const response = await axios('https://my-blog-tuibaev-default-rtdb.europe-west1.firebasedatabase.app/todos.json');

           if (response.data) {
               dispatch(fetchTodoSuccess(response.data));
           } else {
               dispatch(fetchTodoSuccess(null));
           }
       } catch (e) {
            dispatch(fetchTodoFailure());
       }
    };
};



export const addTodos = (text) => {
  return async dispatch => {
      try {
          const request = await axios.post('https://my-blog-tuibaev-default-rtdb.europe-west1.firebasedatabase.app/todos.json', {
              text,
          });

          const id = request.data.name;

          const todo = {
            [id]: {
                text,
            }
          };

          dispatch(addTodo(todo));
      } catch (e) {
          console.error(e);
      }
  };
};


export const deleteTodos = (id) => {
    return async dispatch => {
        try {
            await axios.delete(`https://my-blog-tuibaev-default-rtdb.europe-west1.firebasedatabase.app/todos/${id}.json`);

            dispatch(deleteTodo(id));
        } catch (e) {
            console.error(e);
        }
    };
};