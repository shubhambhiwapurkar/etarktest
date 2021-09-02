import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom"
import PrivateRoute from './auth/helper/PrivateRoutes';
import UserDashBoard from './user/UserDashBoard';


import Home from './core/Home';
import Login from './user/Login';
import Signup from './user/Signup';


const Routes =() =>{
    return ( 
        <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/signup" exact component={Signup}/>
            <Route path="/login" exact component={Login}/>
            <PrivateRoute path="/user/dashboard" exact component={UserDashBoard} />

        </Switch>
        </BrowserRouter>
    );
}

export default Routes;