import React from 'react';
import { Redirect, Route } from 'react-router-dom'

export const PrivateRoute = (props) => {
    const { component: Component, signed, ...rest } = props
    return (
        <Route
            {...rest}
            render={props => {
                const token = localStorage.getItem('token')
                if(token) {
                    return (
                        <Component {...props} {...rest}/>
                    )
                }
                return (
                        <Redirect to="/" />
                    )
            }}
        />
    )
}