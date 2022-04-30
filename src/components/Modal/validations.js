import * as yup from 'yup';

const validations = yup.object().shape({
  offerPrice: yup
    .number()
    .required(),
});

export default validations;