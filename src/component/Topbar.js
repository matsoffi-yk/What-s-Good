import React from 'react'
import "./Topbar.css"
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Profile from '../Profile';
import Auth from '../Auth';
import Store from '../Store';

const Topbar = () => {

    return (
        <Router>
            <div className="body">
                <div>
                    <Link to="/Store">
                        <h3>What's good</h3>
                    </Link>
                </div>

                <div className="search">
                    <input type="text" id="fname" name="fname" placeholder="Search.." size="50"></input>
                    <button type="button" className="btn btn-outline-warning"><svg className="bi bi-search" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M10.442 10.442a1 1 0 011.415 0l3.85 3.85a1 1 0 01-1.414 1.415l-3.85-3.85a1 1 0 010-1.415z" clip-rule="evenodd" />
                        <path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 100-11 5.5 5.5 0 000 11zM13 6.5a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z" clip-rule="evenodd" />
                    </svg></button>
                </div>

                <div className="menu">
                    <Link to="/Profile">
                        <h3>Profile</h3>
                    </Link>
                    <Link to="/Auth">
                        <h3>Login</h3>
                    </Link>
                </div>
            </div>
            <Switch>
                <Route path="/Store">
                    <Store />
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