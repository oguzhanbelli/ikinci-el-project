/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { toast } from 'react-toastify';
import { useOffer } from '../../contexts/OfferContext';
import { useProduct } from '../../contexts/ProductContext';
import BuyModal from '../Modal/BuyModal';


const Tabs = ({showBuyModal,setShowBuyModal}) => {
  const [openTab, setOpenTab] = React.useState(1);

  const {myProductsOffers,confirmOffer,myOffers,getMyProductsOffers,getMyOffers} = useOffer();
  const {buyProductDetail} = useProduct();
  console.log(myOffers);
  console.log(myProductsOffers);
  const buyProduct = async(id) => {
    const data = await buyProductDetail(id);
    console.log(data,'Product Data');
    
  };

  useEffect(() => {

    if(openTab === 1){
      getMyProductsOffers();
    }
    if(openTab === 2){
        
      getMyOffers();
    }
    
  }, [openTab]);

  return (
    <>
      <div className="w-full h-fit  mt-[20px] relative ">
        <div className=" bg-white flex gap-[34px] ml-[30px]">
          <button
            className={` ${
              openTab === 1
                ? 'tabsborder text-bold'
                : ' text-[#B1B1B1] '
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
              openTab === 2
                ? 'tabsborder'
                : ' text-[#B1B1B1] text-normal '
            }`}
            onClick={(e) => {
              e.preventDefault();
              setOpenTab(2);
            }}
          >
            Teklif Verdiklerim
          </button>


        </div>
        <hr className='text-[#F2F2F2] opacity-70'  />
       
        {
          openTab === 1 ? <div className='xl:mt-[20px] h-screen flex flex-col  xl:ml-[30px] gap-[20px]'>

            {Object.keys(myProductsOffers).map((key) => {
              return (
                <div key={key} > 
                  {myProductsOffers[key].offers.map((dataItem) => {
                    return (
                      <div key={dataItem.id} className='border-[1px] border-[#F2F2F2] rounded-[8px]  w-[355px] h-[174px] lg:w-[1413px] lg:h-[104px]  flex first:mt-[0px] '>
                        <div className=' md:ml-[6px] flex flex-row w-fit md:w-full'>
                          <img className='w-[36px]   ml-[10px] mt-[10px] h-[37px] md:w-[78px] md:h-[84px] rounded-[8px] '  src={`${process.env.REACT_APP_BASE_ENDPOINT}${myProductsOffers[key]?.image?.url}`}/>
                          
                          <div>
                            <p className='mt-[14px] ml-[10px] text-[1.125em] text-[#555555] font-normal'> {myProductsOffers[key].name}</p>
                            <div className={'bg-[#f2f2f2] rounded-[8px] w-[230px] h-[36px] items-center flex overflow-hidden text-ellipsis ml-[10px]'}>
                              <p className="text-[#525252] ml-[10px] text-[0.938em] font-normal  w-full text-left ">
                         Alınan Teklif: <strong className='ml-[4px]'>{dataItem.offerPrice},00 TL</strong>
  
  
                              </p>
                              
                            </div>

                            
                            
                          </div>
                          {
                            dataItem.isStatus === null ? <div className='flex justify-end w-full gap-[10px] mr-[30px] items-center text-white font-normal text-[0.938em]' >
                              <button onClick={() => confirmOffer(dataItem.id,{isStatus:true})} className='bg-[#4B9CE2] w-[86px] h-[30px] rounded-[8px]'>Onayla</button>
                              <button onClick={() => confirmOffer(dataItem.id,{isStatus:false})} className='bg-[#F77474] w-[86px] h-[30px] rounded-[8px]'>Reddet</button>
                            </div> : <div className='flex justify-end w-full gap-[10px] mr-[30px] items-center text-white font-normal text-[0.938em]'>
                              {
                                dataItem.isStatus === true ? <div className='text-[green]'>Onaylandı</div> : <div className='text-[red]'>Reddedildi</div>
                              }
                            </div>
                          }
                        </div>
                        <div>
                          
                       
                        </div>
  
                      </div>
                    );
                  })}
                </div>
              );
            })}
  
              
  
  
          </div> : <div className='xl:mt-[20px] h-screen flex flex-col  xl:ml-[30px] mt-[10px]'>

        
            <div className='flex flex-col gap-[20px] ' > 
              {myOffers.map((dataItem) => {
                return (
                  <div key={dataItem.id} className='border-[1px] border-[#F2F2F2] rounded-[8px] lg:w-[1413px] lg:h-[104px] w-[355px]  h-[134px]  flex first:mt-[0px] '>
                    <div className=' md:ml-[6px] flex flex-row  w-full'>
                      <img className='w-[78px]   ml-[10px] mt-[10px] h-[84px] md:w-[78px] md:h-[84px] rounded-[8px] ' onError={({ currentTarget }) => {
                        currentTarget.onerror = null; // prevents looping
                        currentTarget.src='/images/notfoundimage.jpg';
                      }} src={`${process.env.REACT_APP_BASE_ENDPOINT}${dataItem?.product?.image?.url}`}/>
              
                      <div className='w-fit  flex flex-col flex-nowrap truncate'>
                        <p className='mt-[14px] ml-[10px] w-full h-[30px] text-[1.125em] text-[#555555] font-normal truncate'> {dataItem.product?.name}</p>
                        <div className={'bg-[#f2f2f2] rounded-[8px] w-[230px] h-[36px] items-center flex overflow-hidden text-ellipsis ml-[10px]'}>
                          <p className="text-[#525252] ml-[10px] text-[0.938em] font-normal  w-full text-left ">
             Verilen Teklif: <strong className='ml-[4px]'>{dataItem.offerPrice},00 TL</strong>


                          </p>
                         
                        </div>
                        {
                          dataItem.product.isSold !== true ? 
                            <div className={'flex  md:hidden relative left-0  md:w-full  md:gap-[10px] mt-[10px] md:mr-[30px] items-center text-white font-normal text-[0.938em]'}>
                              {
                                dataItem.isStatus === true ? <div className='text-[white] flex justify-between gap-[5px] ml-[10px] text-center items-center'><button onClick={() => setShowBuyModal(true)} className='bg-[#4B9CE2] w-[86px] h-[30px] rounded-[8px]'>Satın Al</button><p className='text-[green]'>Onaylandı</p></div> : null
                              }
                              {dataItem.isStatus === false ? <div className='text-[red]'>Reddedildi</div> :null}
                              {dataItem.isStatus === null ? <div className='  md:hidden w-[240px]  flex justify-end   md:w-full gap-[10px] mr-[30px] items-center text-white font-normal text-[0.938em]'><p className={'text-[gray] mt-[10px] '}> Bekliyor</p></div> :null}
                              {console.log(dataItem.product.id,'Product')}
                              {showBuyModal ? <BuyModal toast={toast} setShowBuyModal={setShowBuyModal} title={'Satın Al'} content={'Satın Almak İstiyor musunuz?'} method={buyProduct} parameter={dataItem.product.id} /> : null}
                            </div>:<div className='  md:hidden w-[240px] h-[30px]   flex justify-end   md:w-full mt-[15px]  items-center text-white font-normal text-[0.938em]'><p className={'text-[green] mt-[10px] '}>Satın Alındı</p></div>
                        }
                  
                
                
                      </div>
                      {
                        dataItem.product.isSold !== true ? 
                          <div className={'hidden  md:flex flex-row justify-end md:w-full  mr-[30px] items-center text-white font-normal text-[0.938em]'}>
                            {
                              dataItem.isStatus === true ? <div className='text-[white] flex justify-between gap-[5px] text-center items-center'><button onClick={() => setShowBuyModal(true)} className='bg-[#4B9CE2] w-[86px] h-[30px] rounded-[8px]'>Satın Al</button><p className='text-[green]'>Onaylandı</p></div> : null
                            }
                            {dataItem.isStatus === false ? <div className='text-[red]'>Reddedildi</div> :null}
                            {dataItem.isStatus === null ? <div className='text-[grey]'>Bekliyor</div> :null}
                            {console.log(dataItem.product.id,'Product')}
                            {showBuyModal ? <BuyModal toast={toast} setShowBuyModal={setShowBuyModal} title={'Satın Al'} content={'Satın Almak İstiyor musunuz?'} method={buyProduct} parameter={dataItem.product.id} /> : null}
                          </div>:<div className='hidden  md:flex justify-end mt-[50px]  w-fit md:w-full gap-[10px] mr-[30px] items-center text-white font-normal text-[0.938em]'><p className={'text-[green]'}>Satın Alındı</p></div>
                      }
                    </div>
                    <div>
                     
              
           
                    </div>
                    
                  </div>
                );
              })}
            </div>
      

  


          </div>
        }
      </div>
    </>
  );
};

export default Tabs;
