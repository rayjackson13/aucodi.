import * as yup from 'yup';

function equalsToRef(ref, msg) {
    return this.test({
        name: 'equalTo',
        exclusive: false,
        // eslint-disable-next-line
        message: msg || '${path} must be the same as ${reference}',
        params: {
            reference: ref.path
        },
        test: function(value) {
            return value === this.resolve(ref);
        }
    });
}

yup.addMethod(yup.string, 'equalsToRef', equalsToRef);

export default yup.object().shape({
    username: yup.string()
        .required('Please enter a correct login')
        .min(3, 'Username is too small')
        .max(20, 'Username is too large'),
    password: yup.string()
        .required('Please enter your password')
        .min(6, 'Password is too short'),
    confirm: yup.string()
        .required('Please confirm your password')
        .equalsToRef(yup.ref('password'), 'Passwords do not match')
});