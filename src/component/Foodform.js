import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { firestore } from '../index'
import './css/Foodform.css';

const Foodform = props => {
    const dispatch = useDispatch()
    const foods = useSelector(state => state.foods)
    const [cooka, setcook] = useState('')
    const { name, imgUrl, detail, recipes, cook } = props.foods;

    const cooks = () => {
        setcook(cook)
    }

    const recipe = () => {
        return (
            <div>
                <p>{cooka}</p>
                <a onClick={() => setcook('')}>close</a>
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
                        <button className="btn1 btn-primary btn-lg" onClick={cooks} role="button">สูตรการทำ</button>
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