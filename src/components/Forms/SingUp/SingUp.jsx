import React from 'react';
import { useMutation } from '@apollo/react-hooks';
import { Link } from 'react-router-dom'
import { SIGN_UP_MUTATION } from '../../../core/SignUp/signup-mutation.js';
import { Formik } from 'formik';
import '../form.css'

export const SignUpModule = ({ history }) => {
    const [SignUp] = useMutation(SIGN_UP_MUTATION);

    const onSignUp = async ({ login, nick, password }) => {
        await SignUp({ variables: { login: login, nick: nick, password: password } });
        history.push('/')
    }
    const validation = (values) => {
        const errors = {};
        if (!values.login) {
            errors.login = 'Required';
        } else if (values.login.length < 6) {
            errors.login = 'Invalid login. Min 6 simbol';
        }
        if (!values.nick) {
            errors.nick = 'Required';
        } else if (values.nick.length < 4) {
            errors.nick = 'Invalid nick. Min 4 simbol';
        }
        if (!values.password) {
            errors.password = 'Required';
        } else if (values.password.length < 4) {
            errors.password = 'Invalid password. Min 4 simbol';
        }
        if (!values.repeatPass) {
            errors.repeatPass = 'Required';
        } else if (values.repeatPass !== values.password) {
            errors.repeatPass = 'Invalid repeatPass. Password does not match';
        }
        return errors;
    }
    return (
        <div className="area-form">
            <h1>Registration</h1>
            <Formik
                initialValues={{
                    login: '',
                    nick: '',
                    password: '',
                    repeatPass: ''
                }}
                validate={validation}
                onSubmit={(values, { setSubmitting }) => {
                    onSignUp(values)
                    setSubmitting(false);
                }}
            >
                {(
                    {
                        values,
                        errors,
                        touched,
                        handleBlur,
                        isSubmitting,
                        handleChange,
                        handleSubmit
                    }
                ) => (
                    <form onSubmit={handleSubmit}>
                        <p className="input">
                            <label className="input-label">Login:</label>
                            <input
                                type="text"
                                name="login"
                                value={values.login}
                                onBlur={handleBlur}
                                onChange={handleChange}
                            />
                            <span className="errors">{errors.login && touched.login && errors.login}</span>
                        </p>
                        <p className="input">
                            <label className="input-label">Nick:</label>
                            <input
                                type="text"
                                name="nick"
                                value={values.nick}
                                onBlur={handleBlur}
                                onChange={handleChange}
                            />
                            <span className="errors">{errors.nick && touched.nick && errors.nick}</span>
                        </p>
                        <p className="input">
                            <label className="input-label">Password:</label>
                            <input
                                type="password"
                                name="password"
                                value={values.pass}
                                onBlur={handleBlur}
                                onChange={handleChange}
                            />
                            <span className="errors">{errors.pass && touched.pass && errors.pass}</span>
                        </p>
                        <p className="input">
                            <label className="input-label">Repeat Password:</label>  
                            <input
                                type="password"
                                name="repeatPass"
                                value={values.repeatPass}
                                onBlur={handleBlur}
                                onChange={handleChange}
                            />
                            <span className="errors">{errors.repeatPass && touched.repeatPass && errors.repeatPass}</span>
                        </p>
                        <button className="button" type="submit" disabled={isSubmitting}>
                            SignUp
                        </button>
                        <Link className="link-to" to="/">Redirect to sing in</Link>
                    </form>
                )}
            </Formik>
        </div>
    )
}