import * as actionTypes from './todo-types';

const initialState = [];

const todoReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.ADD_TASK:
            return (
                [
                    ...state,
                    { 
                    id: action.payload.id,
                    task: action.payload.task,
                    complete: action.payload.complete
                    }
                ]
            )
        case actionTypes.DELETE_TASK:
            const arrayFIltered = state.filter(oneTask => {return oneTask.id !== action.payload.id})
            return(arrayFIltered);
        case actionTypes.COMPLETE_TASK:
            return(
                state.map((item) => {return item.id === action.payload.id? {...item, complete: true} : item })
            )
        case actionTypes.UNCOMPLETE_TASK:
            return(
                state.map((item) => {return item.id === action.payload.id? {...item, complete: false} : item })                
            )
        default:
            return state    
    }
}

export default todoReducer;