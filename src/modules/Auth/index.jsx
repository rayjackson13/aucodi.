import React from 'react';
import { Redirect } from 'react-router-dom';
import DisableScroll from 'ui/DisableScroll';
import LoginForm from './Login';
import RegisterForm from './Register';

class Auth extends React.Component {
    state = {
        mode: 'login'
    }

    changeMode = (mode) => {
        const { resetErrors } = this.props;
        resetErrors();
        this.setState({ mode });
    }

    onSuccess = () => {
        const { history } = this.props;
        history.push('/');
    }

    render() {
        const { mode } = this.state;
        const { auth, login, register, authError } = this.props;

        if (auth) {
            return (
                <Redirect to="/" />
            );
        }

        return (
            <DisableScroll fullScreen>
                <div className="auth">
                    <div className="container container--fluid not-found__wrap">
                        {mode === 'login' && (
                            <LoginForm 
                                onSuccess={ this.onSuccess } 
                                authError={ authError } 
                                login={ login } 
                                changeMode={ () => this.changeMode('register') }
                            />
                        )}
                        {mode === 'register' && (
                            <RegisterForm 
                                onSuccess={ this.onSuccess } 
                                authError={ authError } 
                                register={ register } 
                                changeMode={ () => this.changeMode('login') }
                            />
                        )}
                    </div>
                </div>
            </DisableScroll>
        );
    }
}

export default Auth;