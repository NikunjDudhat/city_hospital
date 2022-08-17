import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import {useSelector } from 'react-redux';
import { isLogin } from '../utils';

function PrivateRoute({component : Component, ...rest}) {
    const authUser = useSelector(state => state.auth)

    console.log(authUser);
    return (
        <Route {...rest} render={props => (
            authUser.user === null ? <Redirect to={"/Login"} /> : <Component {...props} />
        )}
        />
    );
}

export default PrivateRoute;