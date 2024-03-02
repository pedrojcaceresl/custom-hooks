
export const todoReducer = (initialState, action) => {

    switch (action.type) {
        case 'ADD_TODO':
            return [...initialState, action.payload]

        case 'TOGGLE_TODO':
            return initialState.map(todo => {
                if (todo.id === action.payload) { // id
                    return {
                      ...todo,
                        done:!todo.done
                    }
                }
                return todo
            });
        
        case 'REMOVE_TODO':
            return initialState.filter(todo => todo.id !== action.payload);
        
        case 'UPDATE_TODO':
            return initialState.map(todo => {
                if (todo.id === action.payload.id) {
                    return action.payload
                }
                return todo
            });
        default:
            return initialState;
    }
}