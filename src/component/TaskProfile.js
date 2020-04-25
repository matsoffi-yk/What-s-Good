import React, { useEffect } from 'react'
import { firebase } from '../index'
import { useDispatch, useSelector} from 'react-redux';
import './css/TaskProfile.css'


const TaskAdmin = props => {
    const dispatch = useDispatch()
    const foods = useSelector(state => state.foods)

    return (
        <div>
            
        </div>
    )
}

export default TaskAdmin;