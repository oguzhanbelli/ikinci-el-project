import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../../../components/Input';
import Select from '../../../components/Select';
import SelectImage from '../../../components/SelectImage';
import Spinner from '../../../components/Spinner';
import { useAuth } from '../../../contexts/AuthContext';
import { useProduct } from '../../../contexts/ProductContext';
import validationSchema from './validations';

function AddProduct() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [pictureAsFile, setPictureAsFile] = useState([]);
  const [fileError, setFileError] = useState(false);
  // eslint-disable-next-line no-unused-vars

  const {
    getColors,
    loading,
    allCategories, setActiveCategory,
    allColors,
    getBrands,
    allBrands,
    getUsingStatuses,
    allStatuses,
    addProduct,
  } = useProduct();

  const allCategoriesOptions = allCategories.map((item) => {
    return { id: item.id, label: item.name, value: item.name };
  });



  const setImageAction = async () => {
    let newObject = {
      ...formik.values,
      isSold: false,
      users_permissions_user: user.id,
    };

    const formData = new FormData();
    formData.append('files.image', pictureAsFile[0]);
    formData.append('data', JSON.stringify(newObject));

    await addProduct(formData);
    handleHome();
  };

  const handleHome = async () => {
    await setActiveCategory('all');
    navigate('/');
  };

  const formik = useFormik({
    initialValues: {
      name: '',
      description: '',
      category: '',
      status: '',
      color: '',
      brand: '',
      price: '',

      isOfferable: false,
    },
    validationSchema,

    onSubmit: async () => {
      if(pictureAsFile.length === 0){

        setFileError(true);

        return;

      }
      setImageAction();
    },
  });
 
  useEffect(() => {
    getColors();
    getBrands();
    getUsingStatuses();
  }, []);

  return (
    <div className="w-screen h-screen   bg-[#F2F2F2] flex flex-row lg:flex-col items-center pb-3 overflow-x-hidden lg:overflow-x-scroll justify-center lg:justify-start">
      <div className="flex flex-col  xl:flex-row  w-[355px] h-auto my-auto mt-[16px] lg:mt-[20px] lg:w-[800px] lg:h-auto pb-5 xl:w-[1480px] xl:h-[812px] bg-white rounded-[8px] ">
        <form
          onSubmit={formik.handleSubmit}
          className="flex flex-col lg:ml-[30px]  mx-auto h-fit"
        >
          <div className="mt-[25px]  flex flex-col">
            <h1 className=" text-[1.563em] font-bold text-[#525252]">
              Ürün Detayları
            </h1>
          </div>
          <div className="mt-[25px] mb-[25px] lg:w-[730px] h-[45px]">
            <label className="text-[0.938em] text-[#525252] mb-[5px]">
              Ürün Adı
            </label>
            <Input
              type="text"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`focus:ring-[#4B9CE2] focus:bg-[#F0F8FF] focus:border-[#4B9CE2] focus:border-[1px] block w-full h-full font-normal pl-7 pr-12 mt-[5px] text-[1em] border-[1px] border-gray-300 bg-[#F4F4F4] rounded-[8px] ${
                formik.touched.name && formik.errors.name
                  ? 'border-[1px] border-[#F77474] bg-[#FFF2F2] text-[#F77474] placeholder:text-[#F77474]'
                  : ' text-gray-500 border-gray-300 bg-[#F4F4F4] placeholder:text-[#99A0A7] '
              } `}
              placeholder="Örnek: Iphone 12 Pro Max"
            />
            {/* <p className="text-red-400">
              {formik.touched.name && formik.errors.name}
            </p> */}
          </div>
          <div className="mt-[25px] mb-[25px] lg:w-[730px] h-[100px]">
            <label className="text-[0.938em] text-[#525252] ">Açıklama</label>
            <textarea
              id="description"
              name="description"
              onChange={formik.handleChange}
              maxLength={501}
              onBlur={formik.handleBlur}
              value={formik.values.description}
              rows="4"
              className={`block p-2.5 w-full mt-[5px] resize-none  text-[1em] font-normal text-gray-500 pl-7 pr-12 bg-[#F4F4F4]  border-[1px] border-gray-300 rounded-[8px] focus:ring-[#4B9CE2] focus:bg-[#F0F8FF] focus:border-[#4B9CE2] focus:border-[1px] focus:text-[#3E3E3E] ${
                formik.touched.description && formik.errors.description
                  ? 'border-[1px] border-[#F77474] bg-[#FFF2F2] text-[#F77474] placeholder:text-[#F77474]'
                  : ' text-gray-500 border-gray-300 bg-[#F4F4F4] placeholder:text-[#99A0A7] '
              }`}
              placeholder="Ürün açıklaması girin."
            ></textarea>
            {/* <p className="text-red-400">
              {formik.touched.description && formik.errors.description}
            </p> */}
          </div>

          <div className="mt-[40px] w-full  lg:w-[730px] flex flex-col lg:flex-row">
            <div className="lg:w-[353px]">
              <label className="text-[0.938em] text-[#525252] mb-[5px]">
                Kategori
              </label>
              <Select
                area={'Kategori'}
                name="category"
                options={allCategoriesOptions}
                onChange={(value) => formik.setFieldValue('category', value.id)}
                value={formik.values.category}
                onBlur={formik.handleBlur}
              />
              <p className="text-red-400">
                {formik.touched.category && formik.errors.category}
              </p>
            </div>
            <div className="lg:ml-[24px] lg:w-[353px]">
              <label className="text-[0.938em] text-[#525252] mb-[5px]">
                Marka
              </label>
              <Select
                area={'Marka'}
                name="brand"
                options={allBrands}
                onChange={(value) => formik.setFieldValue('brand', value.value)}
                value={formik.values.brand}
                onBlur={formik.handleBlur}
              />
            </div>
          </div>
          <div className="mt-[25px] mb-[25px] lg:w-[720px]  flex flex-col lg:flex-row">
            <div className="lg:w-[353px]">
              <label className="text-[0.938em] text-[#525252] mb-[5px]">
                Renk
              </label>
              <Select
                area={'Renk'}
                id="color"
                name="color"
                options={allColors}
                onChange={(value) => formik.setFieldValue('color', value.value)}
                value={formik.values.color}
              />
            </div>
            <div className="lg:ml-[24px] lg:w-[353px]">
              <label className="text-[0.938em] text-[#525252] mb-[5px]">
                Kullanım Durumu
              </label>
              <Select
                area={'Kullanım Durumu'}
                name="status"
                options={allStatuses}
                onChange={(value) =>
                  formik.setFieldValue('status', value.value)
                }
                value={formik.values.status}
                onBlur={formik.handleBlur}
              />
            </div>
          </div>

          <div className="flex flex-col w-[315px] h-[45px] mb-[25px]">
            <label className="text-[0.938em] text-[#525252] mb-[5px]">
              Fiyat
            </label>
            <div className="mt-1 w-full  relative rounded-[8px] shadow-sm ">
              <input
                type="number"
                name="price"
                id="price"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`focus:ring-indigo-500 focus:border-indigo-500 block w-[315px] h-[45px] pl-7 pr-12  rounded-md ${
                  formik.touched.price && formik.errors.price
                    ? 'border-[1px] border-[#F77474] bg-[#FFF2F2] text-[#F77474] placeholder:text-[#F77474]'
                    : ' text-gray-500 border-gray-300 bg-[#F4F4F4] placeholder:text-[#99A0A7] '
                }`}
                placeholder="Bir fiyat girin"
              />
              <div className="absolute inset-y-3 right-0 flex items-center">
                <span
                  id="currency"
                  name="currency"
                  className={`focus:ring-indigo-500 focus:border-indigo-500 h-full py-0 pl-2 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md ${
                    formik.touched.price && formik.errors.price
                      ? ' text-red-400 placeholder:text-[#F77474]'
                      : ' text-gray-500 '
                  }`}
                >
                  TL
                </span>
              </div>
            </div>
            <div className="flex flex-row w-[315px] mt-[15px] justify-between">
              <p className="text-[#99A0A7] text-[0.938em] mt-[11px] ml-[2px] ">
                Teklif Opsiyonu
              </p>
              <label
                htmlFor="toggle"
                className="flex mt-[11px] cursor-pointer relative mb-4 z-0 "
              >
                <input
                  type="checkbox"
                  id="toggle"
                  name="isOfferable"
                  value={formik.values.isOfferable}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="sr-only"
                />
                <div className="toggle-bg bg-gray-200 border-2 border-gray-200 h-6 w-11 rounded-full"></div>
              </label>
            </div>
          </div>
        </form>
        <div>
          <div className="flex flex-col ml-[20px]  xl:ml-[47.5px] mt-[30px] xl:mt-0 w-full h-full">
            <div className="mt-[35px]  flex flex-col">
              <h1 className=" text-[1.563em] font-bold text-[#525252]">
                Ürün Görseli
              </h1>
            </div>
            <div className="flex mt-8 lg:justify-center xl:justify-start">
              <div className="w-fit mb-[50px] lg:w-[595px] h-fit ">
                <div className="md:mr-5">
                  <div className="flex items-center justify-center w-full  ">
                    <SelectImage
                      setPictureAsFile={setPictureAsFile}
                      pictureAsFile={pictureAsFile}
                      setFileError={setFileError}
                      fileError={fileError}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[730px] h-full relative  mt-[20px] lg:flex justify-center">
              <button
                type="submit"
                onClick={formik.handleSubmit}
                className="w-[315px] lg:w-[315px] h-[45px]   xl:absolute xl:bottom-5 absolute bottom-3 xl:right-20 cursor-pointer bg-[#4B9CE2] text-white rounded-[8px]"
              >
                {loading ? <Spinner/> : 'Kaydet'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddProduct;
