export const sortPrior = () => {
    return async (dispatch) => {
        return dispatch({type: 'SORT_PRIOR'})
    }
}
export const addTodoAction = (task) => {
    return async (dispatch) => {
        return dispatch({type: 'ADD_TODO', task})
    }
}
export const setExpandAction = (task) => {
    return async (dispatch) => {
        return dispatch({type: 'EXPAND_TODO', task})
    }
}
export const deleteTodoAction = (id) => {
    return async (dispatch) => {
        return dispatch({type: 'DELETE_TODO', id})
    }
}
export const setTasks = () => {
    return async (dispatch) => {
        return dispatch({type: 'SET_TASKS'})
    }
}
export const setProjectOptions = () => {
    return async (dispatch) => {
        return dispatch({type: 'SET_OPTIONS'})
    }
}
export const filterTasksAction = (project) => {
    return async (dispatch) => {
        return dispatch({type: 'FILTER_TASKS', project})
    }
}
export const editTaskAction = (entity) => {
    return async (dispatch) => {
        return dispatch({type: 'EDIT_TASK', entity})
    }
}
export const setFilteringProjectAction = (name) => {
    return async (dispatch) => {
        return dispatch({type: 'SET_FILTERING_PROJECT', name})
    }
}
export const doneTodoAction = (id) => {
    return async (dispatch) => {
        return dispatch({type: 'DONE_TODO', id})
    }
}
export const sortFilteredAction = () => {
    return async (dispatch) => {
        return dispatch({type: 'SORT_FILTERED'})
    }
}