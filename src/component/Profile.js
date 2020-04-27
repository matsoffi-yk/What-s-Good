import React, { useEffect, useState } from 'react';
import firebase from 'firebase'
import { firestore } from '../index'
import './css/Profile.css'
import { useDispatch, useSelector } from 'react-redux'; 

const Profile = () => {
    const [user, setUser] = useState({})

    const dispatch = useDispatch()
    const foods = useSelector(state => state.foods)
    const form = useSelector(state => state.form)

    const authListener = () => {
        firebase.auth().onAuthStateChanged(user => {
            if (user)
                setUser(user)
            else
                setUser(null)
        })
    }

    const retriveData = () => {
        firestore.collection('food').onSnapshot((snapshot) => {
            let newFood = snapshot.docs.map(d => {
                const { id, name, imgUrl, detail, recipes, cook } = d.data()
                return { id, name, imgUrl, detail, recipes, cook }
            })
            dispatch({ type: 'ADD_FOOD', foods: newFood })
        })
    }
    console.log(foods)
    const addFood = () => {
        let id = foods.length === 0 ? 1 : foods[foods.length - 1].id + 1
        firestore.collection("food").doc(id + '').set({
            id,
            name: form.name,
            detail: form.detail,
            imgUrl: form.imgUrl,
            recipes: form.recipes,
            cook: form.cook
        })
    }

    useEffect(() => {
        authListener()
        retriveData()
    }, [])

    if (user) {
        return (
            <div className="form">
                <div className="form-group">
                    <label className="bmd-label-floating">ชื่ออาหาร : Food name</label>
                    <input type="text" className="form-control" onChange={e => dispatch({ type: 'NAME', name: e.target.value })} />
                </div>

                <div className="form-group">
                    <label className="bmd-label-floating">รายละเอียด : Detail</label>
                    <input type="text" className="form-control" onChange={e => dispatch({ type: 'DETAIL', detail: e.target.value })} />
                </div>

                <div className="form-group">
                    <label for="exampleTextarea" className="bmd-label-floating">ส่วนผสม : Recipes</label>
                    <textarea className="form-control" id="exampleTextarea" rows="3" onChange={e => dispatch({ type: 'RECIPES', recipes: e.target.value })}></textarea>
                </div>

                <div className="form-group">
                    <label for="exampleTextarea" className="bmd-label-floating">ขั้นตอนการทำอาหาร : Cooking steps</label>
                    <textarea className="form-control" id="exampleTextarea" rows="3" onChange={e => dispatch({ type: 'COOK', cook: e.target.value })}></textarea>
                </div>

                <div className="form-group">
                    <label for="exampleInputFile" className="bmd-label-floating">รูปภาพอาหาร</label>
                    <input type="text" className="form-control-file" id="exampleInputFile" onChange={e => dispatch({ type: 'IMGURL', imgUrl: e.target.value })} />
                    <small className="text-muted">อัพโหลดรูปและนำ URL มาใส่ในนี่(ขนาดที่เหมาะสมคือ 80x80) <a href='https://www.picz.in.th/'>กดที่นี่เพื่ออัพโหลดรูป</a></small>
                </div>
                <div>
                    <button type="submit" className="btn2 btn-primary btn-raised" onClick={addFood}>Submit</button>
                </div>
            </div>

        );
    }
    else {
        return (
            <div className="pleace">
                <h1>Pleace Login</h1>
            </div>
        )
    }

}

export default Profile;