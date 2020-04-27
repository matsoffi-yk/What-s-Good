import React, { useEffect, useState } from 'react';
import firebase from 'firebase'

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
    return (
        <div className="form">
            Profile
        </div>

    );
}

export default Admin;