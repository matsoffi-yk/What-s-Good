import React, { useState, useEffect } from 'react';
import "./css/Topbar.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import AddFood from './AddFood';
import Auth from './Auth';
import Store from './Store';
import Search from './Search'
import firebase from 'firebase';

const Topbar = () => {
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
                        <div className='logo'>
                            <img src="Logo.jpg" className="mr-3" className="img" alt="..." />
                            <h3>What's good</h3>
                        </div>

                    </Link>
                </div>

                <Search search={search1} />


                <div className="menu">
                    <Link to="/AddFood">
                        <h3>Add Food</h3>
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
                <Route path="/AddFood">
                    <AddFood />
                </Route>
                <Route path="/">
                    <Auth />
                </Route>
            </Switch>
        </Router>

    )
}

export default Topbar;