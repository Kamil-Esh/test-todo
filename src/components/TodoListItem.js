import React, {useState} from 'react';
import tasks from "../tasks";
import {setExpandAction, editTaskAction, doneTodoAction} from "../redux/actions/TodoActions";
import {useDispatch, useSelector} from "react-redux";

const TodoListItem = ({el, deleteTodo}) => {
    const [editable, setEditable] = useState(false)
    const [edited, setEdited] = useState({})
    const dispatch = useDispatch()
    const tasks = useSelector(s => s.todolist.tasks)
    const handleTask = (e) => {
        setEdited({...edited, [e.target.name]: e.target.value})
    }
    const isDoneStyle = {
        textDecorationLine: 'line-through'
    }
    const expandTodo = (value) => {
        const task = tasks.find(t => t.id === el.id)
        task.expanded = value
        dispatch(setExpandAction(task))
    }
    const doneTodo = (id) => {
        dispatch(doneTodoAction(id))
    }
    const editTask = (entity) => {
        setEdited(entity)
        setEditable(!editable)
        console.log(edited)
        dispatch(editTaskAction(edited))
    }
    return (
        <li
            className="list-group-item d-flex justify-content-between align-items-center flex-column"
        >
            {editable ? (<div className='d-flex flex-column'>
                    <input type="text" name='task' value={edited.task} onChange={handleTask}/>
                    <input type="text" name='project' value={edited.project} onChange={handleTask}/>
                    <input type="text" name='prior' value={edited.prior} onChange={handleTask}/>
                    <input type="text" name='info' value={edited.info} onChange={handleTask}/>
                </div>) :
                <h4 style={el.done ? isDoneStyle : null} onClick={() => doneTodo(el.id)}>{el.task}</h4>
            }
            <p>Проект: {el.project}</p>
            <p>Приоритет: {el.prior}</p>
            <div>
                <button
                    className='btn btn-success me-2'
                    onClick={() => el.expanded ? expandTodo(false) : expandTodo(true)}
                >
                    {el.expanded ? 'Свернуть' : 'Развернуть'}
                </button>
                <button
                    className='btn btn-warning me-2'
                    onClick={() => editTask(el)}
                >{editable ? 'Save' : 'Edit'}
                </button>
                <button
                    className='btn btn-danger'
                    onClick={() => {
                        deleteTodo(el.id)
                        setEditable(false)
                    }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                         className="bi bi-trash" viewBox="0 0 16 16">
                        <path
                            d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                        <path fill-rule="evenodd"
                              d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                    </svg>
                </button>
            </div>
            {el.expanded ? (
                <p>{el.info}</p>
            ) : null}
        </li>
    );
};

export default TodoListItem;