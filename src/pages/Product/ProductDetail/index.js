/* eslint-disable quotes */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

import React, { useEffect, useRef, useState } from 'react';
import { useLocation,useNavigate } from 'react-router-dom';
import { useProduct } from '../../../contexts/ProductContext';
import Modal from '../../../components/Modal';
import { useAuth } from '../../../contexts/AuthContext';
import BuyModal from '../../../components/Modal/BuyModal';
import { useOffer } from '../../../contexts/OfferContext';
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useOnClickOutside } from '../../../utils/hooks/handleClickOutside';
import Spinner from '../../../components/Spinner';

function ProductDetail() {
  const  location = useLocation();
  const navigate = useNavigate();
  const productId = location.pathname.split('/')[2];
  const [state, setState] = useState({});
  const {getOneProduct,loading,buyProductDetail,setLoading} = useProduct();
  const {removeOfferProduct,myOffers,loading:offerLoading} = useOffer();
  const [showDetailModal, setShowDetailModal] = useState(null);
  const [showBuyModal, setShowBuyModal] = useState(null);
  let status = myOffers?.findIndex(item => item.product?.id === state?.id);
  let offer = myOffers?.filter(item => item.product?.id === state?.id);
  const {user} = useAuth();
  const offerModalRef = useRef();
  const buyModalRef = useRef();
  useOnClickOutside(offerModalRef, () => setShowDetailModal(false));
  useOnClickOutside(buyModalRef, () => setShowBuyModal(false));
  const openModal = () => {
    if(!user){
      navigate('/login');

    }
    setShowDetailModal(true);
   
  };

  const openBuyModal = () => {
    if(!user){
      navigate('/login');

    }

    setShowBuyModal(true);
  };
  const getProduct = async() => {


    try{
      const data = await getOneProduct(productId);
     
      setState(data);
      
    }catch(e){
      console.log(e);
    }
 
  };
  const removeOffer = async(id) => {
    await removeOfferProduct(id);
  };
  const buyProduct = async(id) => {
    const data = await buyProductDetail(id);
    setState(data);
    
  };
  const contextClass = {
    success: "bg-blue-600",
    error: "bg-red-600",
    info: "bg-gray-600",
    warning: "bg-orange-400",
    default: "bg-[#F1FFF0]",
    dark: "bg-white-600 font-gray-300",
  };

  useEffect(() => {

    


    getProduct();

  },[]);


  return (
    <div className={`w-screen h-screen   bg-[#F2F2F2] flex flex-col items-center pb-3  overflow-x-hidden overflow-y-auto`}>
      <ToastContainer hideProgressBar={true} closeButton={false} toastClassName={({ type }) => contextClass[type || "default"] + 
        " relative flex p-1 min-h-10 h-[60px] w-[321px] rounded-md justify-between overflow-hidden cursor-pointer shadow-lg"
      } bodyClassName={'bg-[#F1FFF0] text-[#46AF32]'}/>
      <div className="flex flex-col  lg:flex-row mt-[20px] w-[355px] h-auto lg:w-[800px] lg:h-fit xl:w-[1480px] xl:h-[769px] bg-white rounded-[8px] ">
        <div className="flex flex-col z-50 h-f  lg:items-start lg:flex-row ">
        
          <img
            alt={state?.name}
            src={`${state?.image?.url === undefined ?'/images/notfoundimage.jpg': `${process.env.REACT_APP_BASE_ENDPOINT}${state?.image?.url}`}`}
            className="rounded-[8px]   w-[343px] h-[362px] lg:w-[200px] lg:h-[450px]  xl:w-[700px] xl:h-[737px] mx-[6px] xl:ml-[15px]  mt-[6px] xl:mt-[16px] bg-gray-200"
          />

          {loading ? <div className='flex justify-center items-center'><Spinner/></div> : <div className="lg:mt-[30px] lg:ml-[60px] ml-[10px] ">
            <h1 className="text-[1.125em] lg:text-[2.125em] text-[#555555] font-normal mt-[10px]  ">{state?.name}</h1>
            {
              status === undefined ?   <div className='mt-[10px] flex lg:hidden'>
                <p className="text-[#525252]  text-[1.25em] lg:text-[1.563em] font-bold flex w-full text-left ">
                  {state?.price?.toLocaleString('tr-TR', {minimumFractionDigits: 2,maximumFractionDigits:4})} TL
                </p>
              </div> : ''
            }
            {
              status === -1 ?   <div className='mt-[10px] flex lg:hidden'>
                <p className="text-[#525252]  text-[1.25em] lg:text-[1.563em] font-bold flex w-full text-left ">
                  {state?.price?.toLocaleString('tr-TR', {minimumFractionDigits: 2,maximumFractionDigits:4})} TL
                </p>
              </div> : ''
            }

            {
              status >= 0 ?   <div className='mt-[10px] flex flex-row lg:hidden '>
                <p className="text-[#525252]  text-[1.25em] lg:text-[1.563em] font-bold flex w-full text-left ">
                  {state?.price?.toLocaleString('tr-TR', {minimumFractionDigits: 2,maximumFractionDigits:4})} TL
                </p>
                <div className={`bg-[#f2f2f2] rounded-[8px] w-full h-[36px] ${state?.isSold === true ? 'hidden ' : 'flex'} items-center  overflow-hidden text-ellipsis mr-[10px]`}>
                  <p className="text-[#525252] ml-[10px] text-[0.938em] font-normal  w-full text-left ">
                       Verilen Teklif: <strong className='ml-[4px]'>{offer[0]?.offerPrice.toLocaleString('tr-TR', {minimumFractionDigits: 2,maximumFractionDigits:4})} TL</strong>


                  </p>
                </div>
              </div> : ''
            }
           
            <div className="flex flex-row justify-between w-[200px] h-full text-center">
              <div className="flex flex-col ">
                <div className="flex justify-between w-[250px] mt-[25px] ">
                  <p className="text-[#525252] text-[0.938em] font-bold flex ">
                    Marka :
                  </p>
                  <p className="text-[#525252] text-[0.938em] font-normal flex w-[100px] text-left ">
                    {state?.brand}
                  </p>
                </div>
                <div className="flex justify-between w-[250px] mt-[20px]">
                  <p className="text-[#525252] text-[0.938em] font-bold flex ">
                    Renk :
                  </p>
                  <p className="text-[#525252] text-[0.938em] font-normal flex w-[100px] text-left  ">
                    {state?.color}
                  </p>
                </div>
                <div className="flex justify-between w-[255px] mt-[20px]">
                  <p className="text-[#525252] text-[0.938em] font-bold  flex ">
                    Kullanım Durumu :
                  </p>
                  <p className="text-[#525252] text-[0.938em] font-normal   w-[100px] text-left ">
                    {state?.status}
                  </p>
                </div>
              
                {
                  status === undefined ?   <div className='mt-[30px] hidden lg:flex'>
                    <p className="text-[#525252] text-[1.563em] font-bold flex w-[200px] text-left ">
                      {state?.price?.toLocaleString('tr-TR', {minimumFractionDigits: 2,maximumFractionDigits:4})} TL

                    </p>
                  </div> : ''
                }
                {
                  status === -1 ?   <div className='mt-[30px] hidden lg:flex'>
                    <p className="text-[#525252] text-[1.563em] font-bold flex w-[200px] text-left ">
                      {state?.price?.toLocaleString('tr-TR', {minimumFractionDigits: 2,maximumFractionDigits:4})} TL

                    </p>
                  </div> : ''
                }

            
                {
                  
                  
                  status >= 0 ?   <div className={`mt-[30px] hidden lg:flex lg:flex-col`}>
                    <p className="text-[#525252] text-[1.563em] font-bold flex w-[200px] text-left ">
                      {state?.price?.toLocaleString('tr-TR', {minimumFractionDigits: 2,maximumFractionDigits:4})} TL


                    </p>
                    <div className={`bg-[#f2f2f2] rounded-[8px] w-[230px] h-[36px] ${state?.isSold === true ? 'hidden ' : 'flex'} items-center max-w-lg overflow-hidden text-ellipsis`}>
                      <p className="text-[#525252] ml-[10px] text-[0.938em] font-normal  w-full text-left ">
                       Verilen Teklif: <strong className='ml-[4px]'>{offer[0]?.offerPrice.toLocaleString('tr-TR', {minimumFractionDigits: 2,maximumFractionDigits:4})} TL</strong>


                      </p>
                    </div>
                  </div> : ''
                }
                {
                  state?.isSold === true ? <div className='bg-[#FFF0E2] w-[235px] h-[45px] text-center flex flex-nowrap justify-center items-center mt-[30px] rounded-[8px]  '>
                    <p className='font-bold text-[#FAAD60] text-[1.125em]'>Bu Ürün Satışta Değil</p>

                  </div>:''
                }
                <div className={`${state?.isSold === true ? 'hidden ' : 'fixed lg:flex lg:sticky lg:justify-between '}  bottom-10 opacity-[80%] lg:opacity-100   inset-x-0   w-full mt-[30px] h-[45px]`}>
                  <button  onClick={() => openBuyModal(true)} className='w-[172px] lg:w-[235px] h-[45px] cursor-pointer bg-[#4B9CE2] text-white rounded-[8px]'>
                    {loading ? <Spinner/>  : 'Satın Al'} </button>
                  {   state?.isOfferable ?  <button  onClick={() => openModal()} className={` ${status >= 0 ? 'hidden ' : ''} w-[172px] lg:w-[235px] h-[45px] cursor-pointer bg-[#F0F8FF] ml-[10px] text-[#4b9ce2] rounded-[8px] `}> {offerLoading ? <Spinner/>  : 'Teklif Ver'}</button>
                    :<></>}
                  {
                    status >= 0 ? <button  onClick={() => removeOffer(myOffers[status].id)} className='w-[172px] lg:w-[235px] h-[45px] cursor-pointer bg-[#F0F8FF] ml-[10px] text-[#4b9ce2] rounded-[8px]'>{offerLoading ? <Spinner/> : 'Teklifi Geri Çek' }</button> : null
                  } 
                </div>
                <div className='flex flex-col mt-[15px] text-left flex-wrap w-full mb-[20px] lg:mb-0 '>
                  <h2 className='text-[0.938em] text-[#525252] font-bold'>Açıklama</h2>

                  <p className='mt-[10px] text-[0.938em] text-[#555555]'>{state?.description}</p>

                </div>
              </div>
              {showDetailModal || showBuyModal ? <div className="opacity-[0.7] fixed inset-0 z-40 bg-[#4B9CE2]">
             
              </div> : null}
              
              {showDetailModal ? <Modal ref={offerModalRef} setShowDetailModal={setShowDetailModal} state={state}  /> : null}
              {showBuyModal ? <BuyModal ref={buyModalRef} toast={toast} setShowBuyModal={setShowBuyModal} title={'Satın Al'} content={'Satın Almak İstiyor musunuz?'} method={buyProduct} parameter={state.id} /> : null}
            </div>
          </div>}
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
