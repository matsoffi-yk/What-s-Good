import React, { useState, useEffect } from 'react';
import { firestore } from './index.js'
import TaskStore from './component/TaskStore'

const Store = () => {
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

    const buyTask = (id) => {
        firestore.collection("tasks").doc(id + '').delete()
    }

    const rentTask = (id) => {
        firestore.collection("tasks").doc(id + '').set({ id, name })
    }

    const renderTask = () => {
        if (tasks && tasks.length)
            return (
                tasks.map((task, index) => {
                    return (
                        <TaskStore key={index} task={task}
                            
                        />
                    )
                })
            )
        else
            return (<li>No tasks</li>)
    }

    return (
        <div>
            <div style={{ margin: 15 }}>
                <h1>Store</h1>
                <ul style={{ display: 'flex', slistStyle: 'none' }}>{renderTask()}</ul>
            </div>
        </div>

    );
}

export default Store;