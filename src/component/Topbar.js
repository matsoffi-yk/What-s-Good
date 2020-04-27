import React, { useState, useEffect } from 'react';
import "./css/Topbar.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Profile from './Profile';
import Auth from './Auth';
import Store from './Store';
import Search from './Search'
import firebase from 'firebase';

const Topbar = props => {
    const [user, setUser] = useState(false)
    const [search, setsearch] = useState('')
    const authListener = () => {
        firebase.auth().onAuthStateChanged(user => {
            if (user)
                setUser(user)
            else
                setUser(null)
        })
    }

    const search1 = (data) => {
        console.log(data.searching, "Top")
        setsearch(data.searching)
    }

    useEffect(() => {
        authListener();
    }, [])

    return (
        <Router>
            <div className="body">
                <div>
                    <Link to="/Store">
                        <h3>What's good</h3>
                    </Link>
                </div>

                <Search search={search1} />


                <div className="menu">
                    <Link to="/Profile">
                        <h3>Profile</h3>
                    </Link>
                    <Link to="/Auth">
                        {user ? (
                            <div className='login'>
                                <h3>{firebase.auth().currentUser.displayName} </h3>
                            </div>
                        ) : (
                                <h3>Login</h3>
                            )}
                    </Link>
                </div>
            </div>
            <Switch>
                <Route path="/Store">
                    <Store search={search} />
                </Route>
                <Route path="/Profile">
                    <Profile />
                </Route>
                <Route path="/">
                    <Auth />
                </Route>
            </Switch>
        </Router>

    )
}

export default Topbar;