import React, { useState, useEffect } from 'react';
import { firestore } from './index.js'
import TaskProfile from './component/TaskProfile'

const Admin = () => {
    const [tasks, setTasks] = useState([])

    const [name, setName] = useState('')

    const retriveData = () => {
        firestore.collection("tasks").onSnapshot((snapshot) => {
            console.log(snapshot.docs)
            let mytask = snapshot.docs.map(d => {
                const { id, name } = d.data()
                console.log(id, name)
                return { id, name }
            })
            setTasks(mytask)
        })
    }

    useEffect(() => {
        retriveData()
    }, [])

    const deleteTask = (id) => {
        firestore.collection("tasks").doc(id + '').delete()
    }

    const editTask = (id) => {
        firestore.collection("tasks").doc(id + '').set({ id, name })
    }

    const renderTask = () => {
        if (tasks && tasks.length)
            return (
                tasks.map((task, index) => {
                    return (
                        <TaskProfile key={index} task={task}
                            deleteTask={deleteTask}
                            editTask={editTask}
                        />
                    )
                })
            )
        else
            return (<li>No tasks</li>)
    }

    const addTask = () => {
        let id = (tasks.length === 0) ? 1 : tasks[tasks.length - 1].id + 1
        firestore.collection("tasks").doc(id + '').set({ id, name })
    }

    return (
        <div>
            <div style={{ margin: 15 }}>
                <h1>Admin</h1>
                <input type="text" name="name" onChange={(e) => setName(e.target.value)} />
                <button onClick={addTask}>Submit</button>
                <ul style={{ display: 'flex', slistStyle: 'none' }}>{renderTask()}</ul>
            </div>
        </div>

    );
}

export default Admin;