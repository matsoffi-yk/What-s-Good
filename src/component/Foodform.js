import React, { useState } from 'react';
import './css/Foodform.css';

const Foodform = props => {
    const [taskrecipe, settaskrecipe] = useState('')
    const [taskcook, settaskcook] = useState('')
    const { name, imgUrl, detail, recipes, cook } = props.foods;

    const clickrecipes = () => {
        if (taskrecipe.length && taskrecipe)
            settaskrecipe('')
        else
            settaskrecipe(recipes)
    }

    const clickcooks = () => {
        if (taskcook.length && taskcook)
            settaskcook('')
        else
            settaskcook(cook)
    }

    const recipe = () => {
        return (
            <div>
                <p>{taskrecipe}</p>
                <button className="btn1 btn-primary btn-lg" onClick={clickcooks} role="button">ขั้นตอนการทำอาหาร : Cooking steps</button>
                <br />
                <p>{taskcook}</p>
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
                        <button className="btn1 btn-primary btn-lg" onClick={clickrecipes} role="button">ส่วนผสม : Recipes</button>
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