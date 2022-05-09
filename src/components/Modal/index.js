
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import React,{ useState } from 'react';
import { useFormik } from 'formik';
import { useOffer } from '../../contexts/OfferContext';
import { useAuth } from '../../contexts/AuthContext';
import validationSchema from './validations';
import { CloseIcon } from '../../constants/Icon';


const Modal = React.forwardRef(({state,setShowDetailModal},ref) => {

  
 
  const [selectedOffer,setSelectedOffer] = useState(null);
 
  const {user } = useAuth();
  const {addOfferProduct} = useOffer();
  const [offerSubmit,setOfferSubmit] = useState({product:state.id,users_permissions_user:user.id});
 

  const modalClose = ( ) => {
    setShowDetailModal(false);
  };




  
  const formik = useFormik({
    initialValues: {
      offerPrice: '',
      
    },
    validationSchema,
    onSubmit: async (values) => {
      if(selectedOffer === null){
        offerSubmit.offerPrice = values.offerPrice;
      }
      addOfferProduct(offerSubmit);
      modalClose();

    },
  });

  
  const handleChange = async(e) => {
    if(e.target.value == 20){
      setOfferSubmit({product:state.id,users_permissions_user:user.id,offerPrice:Math.floor((state.price/100)*20)});
      formik.values.offerPrice = Math.floor((state.price/100)*20);
      setSelectedOffer(e.target.value);   
    }
    if(e.target.value == 30){
      setOfferSubmit({product:state.id,users_permissions_user:user.id,offerPrice:Math.floor((state.price/100)*30)});
      formik.values.offerPrice = Math.floor((state.price/100)*30);
      setSelectedOffer(e.target.value);
 
    }
    if(e.target.value == 40){
      setOfferSubmit({product:state.id,users_permissions_user:user.id,offerPrice:Math.floor((state.price/100)*40)});
      formik.values.offerPrice = Math.floor((state.price/100)*40);
      setSelectedOffer(e.target.value);
   
    }
  

  };
  
 

  return (
    <>
      <div  className="absolute top-[10px] md:justify-center md:items-center flex flex-col overflow-x-hidden  overflow-y-auto md:fixed inset-0 z-50 outline-none focus:outline-none">
        <div ref={ref} className="relative  md:my-6 mx-auto w-[355px] h-[407px] md:w-[480px] md:h-[461px] ">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative    flex flex-col w-full  bg-white outline-none focus:outline-none">
            {/*header*/}
            <div data-test-id='offer-modal-text' className="flex items-start justify-between  rounded-t ">
              <h3 className="text-[1.125em] md:text-[1.563em] mt-[13px] md:mt-[20px] ml-[20px] text-[#525252] font-bold">
                    Teklif Ver
              </h3>
              <button
                onClick={() => modalClose()}
                className=" bg-transparent border-0 mt-[16.39px] md:mt-[30px] mr-[19px] text-black opacity-100 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
              
              >
                <CloseIcon/>
                

              </button>
            </div>
            {/*body*/}
            <div className='w-full h-[407px] md:h-[461px] flex flex-col bg-white rounded-[10px]  '>
              <div className='w-[315px] h-[45px] md:w-[441px] md:h-[60px] flex flex-row bg-[#F0F8FF] mx-auto mt-[17px] rounded-[10px] '>
                <div className='w-[77px] h-[50px] mt-[4px] ml-[4px] md:mt-[6px] md:ml-[6px] '>
                  <img className='w-[36px] h-[37px] md:w-[50px] md:h-[50px] rounded-[8px]'   src={`${state?.image?.url === undefined ? '/images/notfoundimage.jpg': `${process.env.REACT_APP_BASE_ENDPOINT}${state?.image?.url}`}`}/>
                </div>
                <div className='mt-[6px] mb-[5px] ml-[5px]  md:mt-[8px] md:ml-[7px] w-[136px] h-[34px] md:mb-[18px] flex flex-wrap text-ellipsis overflow-hidden  '>
                  <p className='font-normal  text-[#555555] text-[0.813em] md:text-[0.813em]  '>{state?.name}</p>
                </div>
                <div className=' flex  items-center     w-full relative'>
                  <p className="text-[#525252] text-[0.938em] md:text-[1.125em]  font-bold  absolute  right-[11px]  ">
                    {state?.price?.toLocaleString('tr-TR', {minimumFractionDigits: 2,maximumFractionDigits:4})} TL
                  </p>
                </div>

              </div>

              <form onSubmit={formik.handleSubmit}>
                <div className={` w-[315px] h-[45px] md:w-[441px] md:h-[45px] flex flex-row ${selectedOffer == 20  ? 'bg-[#F0F8FF] border-[1px] cursor-pointer border-[#4B9CE2]' : 'bg-[#F0F8FF]'} mx-auto mt-[10px] md:mt-[17px] rounded-[10px]`}>
                  <label onClick={(e) => handleChange(e)} className='flex items-center ml-[10px] w-full cursor-pointer  peer-checked:bg-red-300 '>
                    <input type={'radio'}  value={20} name="offer" className="option-input radio peer" />
                    <p className={`${selectedOffer == 20 ? ' text-[#4B9CE2]':'text-[#525252]'} text-[0.938em]  font-normal ml-[5px]`}>
                      %20'si Kadar Teklif Ver
                    </p>

                  </label>


                </div>
                <div className={`w-[315px] h-[45px] md:w-[441px] md:h-[45px]  cursor-pointer  flex flex-row ${selectedOffer ==30 ? 'bg-[#F0F8FF] border-[1px]  border-[#4B9CE2]' : 'bg-[#F0F8FF]'} mx-auto mt-[10px] md:mt-[17px] rounded-[10px]`}>
                  <label onClick={(e) => handleChange(e)} className='flex items-center w-full cursor-pointer  ml-[10px] peer-checked:bg-red-300 '>
                    <input type={'radio'}  value={30} name="offer" className="option-input radio peer" />
                    <p className={`${selectedOffer == 30 ? ' text-[#4B9CE2]':'text-[#525252]'}  text-[0.938em] font-normal ml-[5px]`}>
                      %30'si Kadar Teklif Ver
                    </p>

                  </label>


                </div>
                <div className={`w-[315px] h-[45px] md:w-[441px] md:h-[45px] cursor-pointer flex flex-row ${selectedOffer == 40 ? 'bg-[#F0F8FF] border-[1px] border-[#4B9CE2]' : 'bg-[#F0F8FF]'} mx-auto mt-[10px] md:mt-[17px] rounded-[10px]`}>
                  <label onClick={(e) => handleChange(e)} className='flex items-center ml-[10px] w-full cursor-pointer peer-checked:bg-red-300 '>
                    <input type={'radio'}  value={40} name="offer" className="option-input radio peer" />
                    <p className={`${selectedOffer == 40 ? ' text-[#4B9CE2]':'text-[#525252]'} text-[0.938em]  font-normal ml-[5px]`}>
                      %40'si Kadar Teklif Ver
                    </p>

                  </label>


                </div>

                <div className={'w-[315px] h-[45px] md:w-[441px] md:h-[45px] flex flex-row mx-auto mt-[15px] rounded-[10px]'}>
                  <div className="mt-1 w-full  relative rounded-[8px] shadow-sm bg-[#F4F4F4]">
                  
                    <input
                      type="number"
                      name="offerPrice"
                      value={formik.values.offerPrice}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      disabled={selectedOffer}
                  
                      id="offerPrice"
                      className={`focus:ring-indigo-500 focus:border-indigo-500 block w-full h-full pl-7 pr-12  rounded-md ${
                        selectedOffer === null && formik.touched.offerPrice && formik.errors.offerPrice
                          ? 'border-[1px] border-[#F77474] bg-[#FFF2F2] text-[#F77474] placeholder:text-[#F77474]'
                          : ' text-gray-500 border-gray-300 bg-[#F4F4F4] placeholder:text-[#99A0A7] '
                      }`}
                      placeholder="Teklif Belirle"
                    />
                    <div className="absolute inset-y-3 right-0 flex items-center ">
                      <label htmlFor="currency" className="sr-only">
            Currency
                      </label>
                      <span
                        id="currency"
                        name="currency"
                        className={`focus:ring-indigo-500  flex  h-full justify-center items-center${
                          selectedOffer === null && formik.touched.offerPrice && formik.errors.offerPrice
                            ? ' text-red-400 placeholder:text-[#F77474] ' 
                            : ' text-gray-500  bg-[#F4F4F4] placeholder:text-[#99A0A7] '
                        } focus:border-indigo-500 h-full py-0 pl-2 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md`}
                      >
                        <p>TL</p>
                      </span>
                    </div>
                  </div>
                </div>

                <div className='mt-[20px]'>
                  <button type='submit' className='w-[315px] md:w-[315px] h-[45px] cursor-pointer bg-[#4B9CE2] text-white rounded-[8px]'>Onayla</button>

                </div>

              </form>
              

            </div>
          </div>
        </div>
      </div>
     
    </>
  );
});

Modal.displayName = 'Modal';

export default Modal;