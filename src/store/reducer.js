import {ADD, DELETE, FETCH_TODO_FAILURE, FETCH_TODO_REQUEST, FETCH_TODO_SUCCESS} from "./actions";

const initialState = {
    todos: null,
    loading: false,
    error: null,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_TODO_REQUEST:
            return {...state, loading: true};
        case FETCH_TODO_SUCCESS:
            return {...state, loading: false, todos: action.payload};
        case FETCH_TODO_FAILURE:
            console.log('asd');
            return {...state, loading: false};
        case ADD:
            const id = Object.keys(action.payload)[0];
            const text = Object.keys(action.payload).map(id => action.payload[id].text);
            return {...state, todos: {...state.todos, [id]: {text: text[0]}}};
        case DELETE:
            if (state.todos) {
                delete state.todos[action.payload];
                return {...state.todos};
            } else {
                return null;
            }
        default:
            return state;
    }
};

export default reducer;