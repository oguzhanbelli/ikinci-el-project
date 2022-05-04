import * as yup from 'yup';

const validations = yup.object().shape({
  price: yup.number().required(),
  category: yup.number().required('Lütfen Kategori seçiniz'),
  name:yup.string().max(100,'En fazla 100 karakter girebilirsiniz').required('Zorunlu Alan'),
  description:yup.string().max(500,'En fazla 500 karakter girebilirsiniz').required('Zorunlu Alan'),
});

export default validations;
