import React from 'react';
import { withFormik } from 'formik';
import Button from 'ui/Button';
import Input from 'ui/Input';
import schema from './schema';

const Login = props => {
    const { authError, handleSubmit, handleChange, values, errors, touched, handleBlur, changeMode } = props;
    const usernameError = (touched['login'] && errors['login']) || authError;
    return (
        <form autoComplete="off" className="auth__form" onSubmit={ handleSubmit }>
            <h2 className="auth__title">welcome to aucodi.</h2>
            <p className="auth__desc">Please enter your credentials</p>
            <Input
                type="text"
                name="login"
                value={ values['login'] }
                onChange={ handleChange }
                onBlur={ handleBlur }
                label="Username"
                error={ usernameError }
            />
            <Input
                type="password"
                name="password"
                value={ values['password'] }
                onChange={ handleChange }
                onBlur={ handleBlur }
                label="Password"
                error={ touched['password'] && errors['password'] }
            />
            <Button 
                type="submit"
                accent
                block
                classes="auth__form-submit"
            >
                Log in
            </Button>
            <Button 
                type="button"
                ghost 
                block
                onClick={ changeMode }
            >
                Don't have an account yet? Register.
            </Button>
        </form>
    );
};

export default withFormik({
    mapPropsToValues: () => ({
        login: '',
        password: ''
    }),
    handleSubmit: (values, { props }) => {
        const { login, onSuccess } = props;
        login(values, onSuccess);
    },
    validationSchema: schema,
    displayName: 'LoginForm'
})(Login);