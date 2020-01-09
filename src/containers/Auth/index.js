import { connect } from 'react-redux';
import Auth from 'modules/Auth';
import { login, register, resetErrors } from 'actions/auth';

const mapStateToProps = ({ auth }) => ({
    auth: auth.token,
    authError: auth.error
});

const mapDispatchToProps = {
    login,
    register,
    resetErrors
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);