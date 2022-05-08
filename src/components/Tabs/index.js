/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { toast } from 'react-toastify';
import { useOffer } from '../../contexts/OfferContext';
import { useProduct } from '../../contexts/ProductContext';
import { useOnClickOutside } from '../../utils/hooks/handleClickOutside';
import BuyModal from '../Modal/BuyModal';
import Spinner from '../Spinner';

const Tabs = React.forwardRef(({ showBuyModal, setShowBuyModal },ref) => {
  const [openTab, setOpenTab] = React.useState(1);

  useOnClickOutside(ref, () => setShowBuyModal(false));
  const {
    myProductsOffers,
    confirmOffer,
    myOffers,
    getMyProductsOffers,
    getMyOffers,
    loading
  } = useOffer();
  const { buyProductDetail } = useProduct();

  const buyProduct = async (id) => {
    await buyProductDetail(id);
    window.location.reload(false);
  };



  useEffect(() => {
    if (openTab === 1) {
      getMyProductsOffers();
    }
    if (openTab === 2) {
      getMyOffers();
    }
  }, [openTab]);


  return (
    <div className="w-full   mt-[20px]  ">
      <div className=" bg-white flex gap-[34px] ml-[30px]">
        <button
          className={` ${
            openTab === 1 ? 'tabsborder text-bold' : ' text-[#B1B1B1] '
          }`}
          onClick={(e) => {
            e.preventDefault();
            setOpenTab(1);
          }}
        >
          Teklif Aldıklarım
        </button>
        <button
          className={` ${
            openTab === 2 ? 'tabsborder' : ' text-[#B1B1B1] text-normal '
          }`}
          onClick={(e) => {
            e.preventDefault();
            setOpenTab(2);
          }}
        >
          Teklif Verdiklerim
        </button>
      </div>
      <hr className="text-[#F2F2F2] opacity-70" />

      {openTab === 1 ? (
        <div className="  flex flex-col items-center w-fit mx-auto h-screen  ">
          {Object.keys(myProductsOffers).map((key) => {
            return (
              <div className='first:mt-[10px] ' key={key}>
                {myProductsOffers[key].offers.map((dataItem) => {
                  return (
                    <div
                      key={dataItem.id}
                      className="border-[1px]  border-[#F2F2F2] rounded-[8px] w-[355px] mt-[10px] md:w-[430px]  lg:w-[1413px] lg:h-[104px] h-[134px]   flex"
                    >
                      <div className=" md:ml-[6px] flex flex-col lg:flex-row w-[355px] md:w-full  ">
                        <div className="md:ml-[6px] flex flex-row lg:flex-row w-[330px] md:w-full ">
                          <img
                            className="w-[78px] ml-[10px] lg:ml-0  mt-[10px] h-[84px] md:w-[78px] md:h-[84px] rounded-[8px]  "
                
                            src={`${myProductsOffers[key]?.image?.url === null ? '/images/notfoundimage.jpg': `${process.env.REACT_APP_BASE_ENDPOINT}${myProductsOffers[key]?.image?.url}`}`}
                          />

                          <div className='truncate '>
                        
                            <p className="mt-[14px] ml-[10px] lg:ml-[10px] w-full h-[30px] text-[1.125em] text-[#555555] font-normal truncate">

                              {myProductsOffers[key].name}
                            </p>
                            <div
                              className={
                                'bg-[#f2f2f2] rounded-[8px] w-[230px] h-[36px] items-center flex overflow-hidden  text-ellipsis ml-[10px]'
                              }
                            >
                              <p className="text-[#525252] ml-[10px] text-[0.938em] font-normal  w-full text-left ">
                                Alınan Teklif:
                                <strong className="ml-[4px]">
                                  {dataItem.offerPrice?.toLocaleString(
                                    'tr-TR',
                                    { minimumFractionDigits: 2 }
                                  )}
                                  TL
                                </strong>
                              </p>
                            </div>
                          </div>
                        </div>

                        {dataItem.isStatus === null ? (
                          <div className="flex justify-end w-full gap-[10px]   items-center text-white font-normal text-[0.938em]  lg:mt-[15px]">
                            <button
                              onClick={() =>
                                confirmOffer(dataItem.id, { isStatus: true })
                              }
                              className="bg-[#4B9CE2] w-[86px] h-[30px] rounded-[8px]"
                            >
                              {loading ? <Spinner/> : 'Onayla'}
                            </button>
                            <button
                              onClick={() =>
                                confirmOffer(dataItem.id, { isStatus: false })
                              }
                              className="bg-[#F77474] w-[86px] h-[30px] mr-[30px] rounded-[8px]"
                            >
                              {loading ? <Spinner/> : 'Reddet'}
                            </button>
                          </div>
                        ) : (
                          <div className="flex justify-end w-full gap-[10px] mr-[30px] items-center  mt-[15px] text-white font-normal text-[0.938em]">
                            {dataItem.isStatus === true ? (
                              <div className="text-[#4B9CE2] mr-[30px] relative bottom-5 lg:bottom-0 text-[0.938em] font-normal">
                                Onaylandı
                              </div>
                            ) : (
                              <div className="text-[red] mr-[30px] relative bottom-5 lg:bottom-0 text-[0.938em] font-normal">
                                Reddedildi
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      ) : (
        <div className="xl:mt-[20px] h-screen flex flex-col mx-auto  xl:ml-[30px] mt-[20px]">
          <div className="flex flex-col gap-[20px] items-center lg:items-baseline">
            {myOffers?.filter(item => item?.product !== null).map((dataItem) => {
              return (
                <div
                  key={dataItem.id}
                  className="border-[1px] border-[#F2F2F2] rounded-[8px] lg:w-[1413px] lg:h-[104px] w-[355px] md:w-[400px]   h-[134px]  flex first:mt-[0px] "
                >
                  <div>
                    {showBuyModal ? (
                      <BuyModal
                        ref={ref}
                        toast={toast}
                        setShowBuyModal={setShowBuyModal}
                        title={'Satın Al'}
                        content={'Satın Almak İstiyor musunuz?'}
                        method={buyProduct}
                        parameter={dataItem?.product?.id}
                      />
                    ) : null}
                  </div>
                  <div className=" md:ml-[6px] flex flex-row ">
                    <img
                      className="w-[78px]   ml-[10px] mt-[10px] h-[84px] md:w-[78px] md:h-[84px] rounded-[8px] "
                    
                      src={`${dataItem?.product?.image?.url === undefined ? '/images/notfoundimage.jpg': `${process.env.REACT_APP_BASE_ENDPOINT}${dataItem?.product?.image?.url}`}`}

                    />

                    <div className="w-[235px] lg:w-[400px] flex flex-col ml-[10px] flex-nowrap    lg:text-left ">
                      <p className="mt-[14px]  w-full h-[30px] text-[1.125em] text-[#555555] font-normal truncate">
                      
                        {dataItem?.product?.name}
                      </p>
                      <div
                        className={
                          'bg-[#f2f2f2] rounded-[8px] w-[230px] h-[36px] items-center flex overflow-hidden text-ellipsis'
                        }
                      >
                        <p className="text-[#525252] ml-[10px] text-[0.938em] font-normal  w-full text-left ">
                          Verilen Teklif:{' '}
                          <strong className="ml-[4px]">
                            {dataItem?.offerPrice?.toLocaleString('tr-TR', {
                              minimumFractionDigits: 2,
                              maximumFractionDigits:4
                            })}{' '}
                            TL
                          </strong>
                        </p>
                        
                      </div>
                      
                      <div
                        className={
                          ' lg:flex   relative left-0  w-full  md:gap-[10px] mr-[30px] justify-center items-center text-white font-normal text-[0.938em]'
                        }
                      >
                        {dataItem?.product?.isSold === true && (
                          <div className="flex lg:hidden  w-[240px] h-full text-center items-center justify-end   md:w-full  text-white font-normal text-[0.938em]">
                            <p className={'text-[green] mt-[10px] text-[0.938em]'}>
                          Satın Alındı
                            </p>
                          </div>
                        )}
                        {dataItem?.product?.isSold === false && (
                          <div className="flex lg:hidden text-[white] w-[240px]  justify-end mt-[10px]    text-center items-center">
                            <button
                              onClick={() => setShowBuyModal(true)}
                              className={`${dataItem.isStatus === true ?   ' '  : 'hidden '}bg-[#4B9CE2] w-[86px] h-[30px] rounded-[8px]`}
                            >
                          Satın Al
                            </button>
                            {dataItem?.isStatus === false && (
                              <div className="text-[red] lg:hidden mt-[10px] text-[0.938em] relative bottom-[6px] right-[30px] ">Reddedildi</div>
                            )}
                            {dataItem?.isStatus === true && (
                              <div className="text-[#4b9ce2] lg:hidden ml-[10px]  ">Onaylandı</div>
                            )}
                            {dataItem?.isStatus === null && (
                              <div className="text-[gray] lg:hidden mt-[10px] relative bottom-[6px] right-[30px] ">Bekliyor</div>
                            )}
                      
                          </div>
                      
                    
                        )}

            
                      </div>
                        
                    </div>
                   
                  </div>

                  <div
                    className={
                      'hidden lg:flex   relative left-0  w-full  md:gap-[10px] mr-[20px] justify-center items-center text-white font-normal text-[0.938em]'
                    }
                  >
                    {dataItem.product?.isSold === true && (
                      <div className="hidden lg:flex  w-[240px] h-full text-center items-center justify-end   md:w-full mr-[30px] text-white font-normal text-[0.938em]">
                        <p className={'text-[green] mt-[10px] '}>
                          Satın Alındı
                        </p>
                      </div>
                    )}
                    {dataItem.product?.isSold === false && (
                      <div className="hidden lg:flex  text-[white]  justify-end w-full gap-[5px] mr-[30px] text-center items-center">
                        <button
                          onClick={() => setShowBuyModal(true)}
                          className={`${dataItem.isStatus === true ?   ' '  : 'hidden '}bg-[#4B9CE2] w-[86px] h-[30px] rounded-[8px]`}
                        >
                          Satın Al
                        </button>
                        {dataItem?.isStatus === false && (
                          <div className="text-[red]">Reddedildi</div>
                        )}
                        {dataItem?.isStatus === true && (
                          <div className="text-[#4b9ce2]">Onaylandı</div>
                        )}
                        {dataItem?.isStatus === null && (
                          <div className="text-[gray]">Bekliyor</div>
                        )}
                      
                      </div>
                      
                    
                    )}

                 
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
});
  
Tabs.displayName = 'Modal';
  
export default Tabs;
