import * as yup from 'yup';

export default yup.object().shape({
    login: yup.string()
        .required('Please enter a correct login'),
    password: yup.string()
        .required('Please enter your password')
});