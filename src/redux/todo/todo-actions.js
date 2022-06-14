import * as actionTypes from './todo-types';

export const addTask = (newTask) => {
    return {
        type: actionTypes.ADD_TASK,
        payload: {
            id: newTask.id,
            task: newTask.task,
            complete: newTask.complete
        }
    }
}

export const deleteTask = (itemId) => {
    return {
        type: actionTypes.DELETE_TASK,
        payload: {
            id: itemId
        }
    }
}

export const completeTask = (itemId) => {
    return {
        type: actionTypes.COMPLETE_TASK,
        payload: {
            id: itemId,
        }
    }
}

export const uncompleteTask = (itemId) => {
    return {
        type: actionTypes.UNCOMPLETE_TASK,
        payload: {
            id: itemId
        }
    }
}

