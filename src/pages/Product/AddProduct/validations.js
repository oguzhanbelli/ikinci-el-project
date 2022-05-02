import * as yup from 'yup';

const validations = yup.object().shape({
  price: yup.number().required(),
  category: yup.number().required('Lütfen Kategori seçiniz'),
});

export default validations;
