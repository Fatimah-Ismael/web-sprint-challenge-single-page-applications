import * as yup from 'yup';

const schema = yup.object().shape({
    inputName: yup.string().required('missing credentials').min(2,'name must be at least 2 characters'),
    size: yup.string().oneOf(['small', 'medium', 'large'], 'select a siz pizza'),
    sauce: yup.string().oneOf(['red', 'white'], 'select a sauce'),
    specialText: yup.string().required('enter something').min(4,'4 characters min' ),
});

export default schema; 