import {setProjectOptions} from "../actions/TodoActions";

const initialState = {
    tasks: [
        {
            "id": 1,
            "task": 'Задача 1',
            "info": 'Описание',
            "project": 'project-2',
            "prior": 1,
            "expanded": false,
            "done": false
        },
        {
            "id": 2,
            "task": 'Задача 2',
            "info": 'Описание',
            "project": 'project-3',
            "prior": 2,
            "expanded": false,
            "done": false
        },
        {
            "id": 3,
            "task": 'Задача 3',
            "info": 'Описание',
            "project": 'project-1',
            "prior": 3,
            "expanded": false,
            "done": false
        },
        {
            "id": 4,
            "task": 'Задача 4',
            "info": 'Описание',
            "project": 'project-2',
            "prior": 4,
            "expanded": false,
            "done": false
        },
        {
            "id": 5,
            "task": 'Задача 5',
            "info": 'Описание',
            "project": 'project-3',
            "prior": 1,
            "expanded": false,
            "done": false
        },
        {
            "id": 6,
            "task": 'Задача 6',
            "info": 'Описание',
            "project": 'project-1',
            "prior": 2,
            "expanded": false,
            "done": false
        },
        {
            "id": 7,
            "task": 'Задача 7',
            "info": 'Описание',
            "project": 'project-2',
            "prior": 3,
            "expanded": false,
            "done": false
        },
        {
            "id": 8,
            "task": 'Задача 8',
            "info": 'Описание',
            "project": 'project-1',
            "prior": 4,
            "expanded": false,
            "done": false
        },
        {
            "id": 9,
            "task": 'Задача 9',
            "info": 'Описание',
            "project": 'project-3',
            "prior": 1,
            "expanded": false,
            "done": false
        }
    ],
    projectOptions: [],
    filteredItems: [],
    filteringProject: ''
}
export const TodoReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SORT_PRIOR':
            let sorted;
            if(state.filteredItems.length !== 0) {
                sorted = [...state.filteredItems].sort((a, b) => (a.prior < b.prior) ? 1 : -1).reverse()
            } else {
                sorted = [...state.tasks].sort((a, b) => (a.prior < b.prior) ? 1 : -1).reverse()
            }
            return {...state, filteredItems: sorted}
        case 'ADD_TODO':
            return {...state, tasks: [...state.tasks, action.task]}
        case 'EXPAND_TODO':
            return {...state, tasks: [...state.tasks]}
        case 'DELETE_TODO':
            return {...state, tasks: [...state.tasks].filter(el => el.id !== action.id)}
        case 'SET_TASKS':
            return {...state, filteredItems: [...state.tasks]}
        case 'SET_OPTIONS':
            let options = []
            if (state.filteredItems.length !== 0) {
                state.filteredItems.forEach(el => options.push(el.project))
                let projects = Array.from(new Set(options))
                return {...state, projectOptions: projects}
            } else {
                state.tasks.forEach(el => options.push(el.project))
                let projects = Array.from(new Set(options))
                return {...state, projectOptions: projects}
            }
        case 'FILTER_TASKS':
            let filtered = [...state.tasks].filter(el => el.project === action.project)
            return {...state, filteredItems: filtered}

        case 'EDIT_TASK':
            return state.filteredItems.length === 0
            ? {...state, tasks: [...state.tasks].map(el => el.id === action.entity.id ? action.entity : el)}
            : {...state, tasks: [...state.tasks].map(el => el.id === action.entity.id ? action.entity : el)}
        case "SORT_FILTERED":
            return {...state, filteredItems: [...state.filteredItems].sort((a, b) => (a.prior < b.prior) ? 1 : -1).reverse()}
        case 'SET_FILTERING_PROJECT':
            return {...state, filteringProject: action.name}
        case 'DONE_TODO':
            return {...state, tasks: [...state.tasks].map(el => el.id === action.id ? {...el, done: !el.done} : el)}
        default:
            return state
    }
}