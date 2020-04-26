import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { firestore } from '../index'
import './css/Foodform.css';

const Foodform = props => {
    const dispatch = useDispatch()
    const foods = useSelector(state => state.foods)
    const [taskrecipe, settaskrecipe] = useState('')
    const [taskcook, settaskcook] = useState('')
    const [click, seclick] = useState('')
    const { name, imgUrl, detail, recipes, cook } = props.foods;

    const task = () => {
        settaskrecipe('')
        settaskcook('')
    }
    const cooks = () => {

    }

    const recipe = () => {
        return (
            <div>
                <p>{taskrecipe}</p>
                <button className="btn1 btn-primary btn-lg" onClick={() => settaskcook(cook)} role="button">ขั้นตอน</button>
                <br />
                <p>{taskcook}</p>
                <button onClick={task}>close</button>
            </div>
        )
    }
    const foodform = () => {
        return (
            <div className="form">
                <div className="media">
                    <img src={imgUrl} className="mr-3" alt="..." />
                    <div className="media-body">
                        <h5 className="mt-0">{name}</h5>
                        <p>{detail}</p>
                        <button className="btn1 btn-primary btn-lg" onClick={() => settaskrecipe(recipes)} role="button">ส่วนผสม</button>
                        {recipe()}
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div>
            {foodform()}
        </div>
    )
}

export default Foodform;