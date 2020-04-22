import React from 'react';
import './TaskStore.css';

const TaskStore = props => {
    const { task, deleteTask, editTask } = props;
    const { id, name } = task;

    return (
        <li>
            <div className='id'>
                {id}
            </div>
            <div className='name'>
                {name}
            </div>
            <div className='container'>
                <button className="Buy" onClick={() => deleteTask(id)} >Buy</button>
                <button className="Rent" onClick={() => editTask(id)} >Rent</button>
            </div>
        </li>
    )
}

export default TaskStore;