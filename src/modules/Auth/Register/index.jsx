import React from 'react';
import { withFormik } from 'formik';
import Button from 'ui/Button';
import Input from 'ui/Input';
import schema from './schema';

const Register = props => {
    const { authError, handleSubmit, handleChange, values, errors, touched, handleBlur, changeMode } = props;
    const usernameError = (touched['username'] && errors['username']) || authError;
    return (
        <form autoComplete="off" className="auth__form" onSubmit={ handleSubmit }>
            <h2 className="auth__title">sign up.</h2>
            <p className="auth__desc">create a free <b>aucodi.</b> account</p>
            <Input
                type="text"
                name="username"
                value={ values['username'] }
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
            <Input
                type="password"
                name="confirm"
                value={ values['confirm'] }
                onChange={ handleChange }
                onBlur={ handleBlur }
                label="Confirm Password"
                error={ touched['confirm'] && errors['confirm'] }
            />
            <Button 
                type="submit"
                accent
                block
                classes="auth__form-submit"
            >
                Sign up
            </Button>
            <Button 
                type="button"
                ghost 
                block
                onClick={ changeMode }
            >
                Already have an account? Sign in.
            </Button>
        </form>
    );
};

export default withFormik({
    mapPropsToValues: () => ({
        username: '',
        password: '',
        confirm: '',
    }),
    handleSubmit: (values, { props }) => {
        const { register, onSuccess } = props;
        register(values, onSuccess);
    },
    validationSchema: schema,
    displayName: 'RegisterForm'
})(Register);