import { useLazyQuery } from '@apollo/client'
import { Formik } from 'formik'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { SING_IN_QUERY } from '../../../core/SignIn/signin-queries.js'
import * as yup from 'yup'
import '../form.css'

export const SignInModule = ({ history }) => {
    const [Login, { data: token }] = useLazyQuery(SING_IN_QUERY)
    const validateSchema = yup.object().shape({
        login: yup.string().typeError('Only string').required('Required'),
        password: yup.string().typeError('Only string').required('Required'),
    })
    useEffect(() => {
        if (token && token.login) {
            localStorage.setItem('token', token.login)
            history.push('/main')
        }
    }, [token, history])
    return (
        <div className="area-form">
            <Formik
                initialValues={{
                    login: '',
                    password: ''
                }}
                validateOnBlur
                onSubmit={values => {
                    Login({
                        variables: {
                            login: values.login,
                            password: values.password,
                        }
                    })
                }}
                validationSchema={validateSchema}
            >
                {({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty }) => (
                    <>
                        <h1>Welcome to my app</h1>
                        <div className="input">
                            <label className="input-label" htmlFor="login">Login:</label>
                            <input
                                type="text"
                                name="login"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.name}
                                data-testid="input" 
                            />
                            {touched.login && errors.login && <p className="errors">{errors.login}</p>}
                        </div>
                        <div className="input">
                            <label className="input-label" htmlFor="password">Password:</label>
                            <input
                                type="password"
                                name="password"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.name} 
                            />
                            {touched.password && errors.password && <p className="errors">{errors.password}</p>}
                        </div>
                        {token && !token.login ? <div className="errors">User not found</div> : <></>}
                        <button
                            className="button"
                            onClick={handleSubmit}
                            disabled={!isValid && !dirty}
                            type="submit"
                            data-testid="button-sign-in" 
                        >
                            SignIn
                        </button>
                        <Link className="link-to" to="/signup">Redirect to sing up</Link>
                    </>
                )
                }
            </Formik>
        </div>
    )
}