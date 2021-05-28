import { useLazyQuery } from '@apollo/client'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { SING_IN_QUERY } from '../../core/SignIn/signin-queries.js'

export const SignInModule = ({ history }) => {
    const [login, setLogin] = useState('')
    const [pass, setPass] = useState('')
    const [Login, { data: token }] = useLazyQuery(SING_IN_QUERY)
    const changeLogin = ({ target }) => {
        setLogin(target.value)
    }
    const changePass = ({ target }) => {
        setPass(target.value)
    }
    const onSingIn = () => {
        Login({
            variables: {
                login: login,
                password: pass,
            }
        })
    }
    useEffect(() => {
        if (token && token.login) {
            localStorage.setItem('token', token.login)
            history.push('/main')
        }
    }, [token, history])
    return (
        <div className="form">
            <h1>Login Modal</h1>
            <input type="text" value={login} onChange={changeLogin} name="Login" />
            <input type="password" value={pass} onChange={changePass} name="Password" />
            <button onClick={onSingIn}>SignIn</button>
            <Link to="/signup">Redirect to sing up</Link>
        </div>
    )
}
