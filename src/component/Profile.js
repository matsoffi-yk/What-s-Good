import React, { useEffect, useState } from 'react';
import firebase from 'firebase'
import './css/Profile.css'

const Admin = () => {
    const [user, setUser] = useState({})
    const authListener = () => {
        firebase.auth().onAuthStateChanged(user => {
            if (user)
                setUser(user)
            else
                setUser(null)
        })
    }

    useEffect(() => {
        authListener()
    }, [])

    console.log(user)
    if (user) {
        return (
            <div className="form">
                <div class="form-group">
                    <label className="bmd-label-floating">ชื่ออาหาร : Food name</label>
                    <input type="text" className="form-control" />
                </div>

                <div class="form-group">
                    <label className="bmd-label-floating">รายละเอียด : Detail</label>
                    <input type="text" className="form-control" />
                </div>

                <div class="form-group">
                    <label for="exampleTextarea" className="bmd-label-floating">ส่วนผสม : Recipes</label>
                    <textarea className="form-control" id="exampleTextarea" rows="3"></textarea>
                </div>

                <div class="form-group">
                    <label for="exampleTextarea" className="bmd-label-floating">ขั้นตอนการทำอาหาร : Cooking steps</label>
                    <textarea className="form-control" id="exampleTextarea" rows="3"></textarea>
                </div>

                <div class="form-group">
                    <label for="exampleInputFile" class="bmd-label-floating">รูปภาพอาหาร</label>
                    <input type="file" class="form-control-file" id="exampleInputFile" />
                    <small class="text-muted">ขนาดที่เหมาะสมคือ 80x80</small>
                </div>
                <div>
                    <button type="submit" class="btn btn-primary btn-raised">Submit</button>
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

export default Admin;