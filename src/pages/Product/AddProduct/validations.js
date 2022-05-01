import * as yup from 'yup';

const validations = yup.object().shape({
  price: yup
    .number()
    .required(),
});

export default validations;