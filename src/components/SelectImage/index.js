/* eslint-disable quotes */
/* eslint-disable react/prop-types */
import React,{useState} from 'react';
import {useDropzone} from 'react-dropzone';
import { DragUploadIcon } from '../../constants/Icon';
function SelectImage({onChange,setPictureAsFile,pictureAsFile,setFileError,fileError}) {
  const [file,setFile] = useState([]);
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      'image/jpg': ['.jpeg', '.png','.jpg']
    },
    
    maxSize:400000,
    onDropRejected:()=>{
      setFileError(true);
    },
    onDropAccepted:()=>{
      setFileError(false);

    },
    
    
    
    onDrop: (acceptedFiles) => {

      setFile(
        acceptedFiles.map((file) =>
          Object.assign(file,{preview: URL.createObjectURL(file)})
        )
       
      );
      setPictureAsFile(acceptedFiles.map((file) =>
        Object.assign(file,{preview: URL.createObjectURL(file)})
      ));
    },
  });
  return (
    <>
      {
        file.length <=0 ? <label {...getRootProps()}
          
          className={`flex flex-col w-[320px] lg:w-[595px] h-[164px] border-[1px] rounded-[10px] ${fileError ? 'border-red-400 hover:border-red-400' : 'border-[#B1B1B1]'}  border-dashed hover:bg-gray-100 hover:border-gray-300`}>
          <div className="flex flex-col items-center justify-center pt-7">
            <DragUploadIcon/>
            <input {...getInputProps()}  onChange={onChange} />

            <p className="pt-1 text-sm hidden lg:flex tracking-wider text-gray-400 text-[0.875em]  text-center group-hover:text-gray-600">
                              Sürükleyip bırakarak yükle <br></br>veya</p>
          </div>
                        
         
          <input type="file" name='file' {...getInputProps()} className="opacity-100 hidden lg:flex" />
          <div className='flex text-center w-full justify-center items-center'>
            <button className='cursor-pointer bg-[#F4F4F4] rounded-[15px] w-[122px] h-[30px] text-[#B1B1B1] text-[0.938em]'>Görsel Seçin</button>
          </div>
               
          <div className=' text-center w-full  h-full'>
            <p className='text-[#B1B1B1] text-[0.75em]  mt-[10px] mb-[5px]'>PNG ve JPEG Dosya boyutu: max. 100kb</p>
          </div>
         
        </label> : 

          <div className='w-full flex justify-start mb-[36px]'>
            <div className='md:w-[113px] w-[100px] h-[100px] relative  md:h-[133px] flex justify-start flex-row'>
              <img onLoad={() => URL.revokeObjectURL(file[0].preview)} className=' rounded-[8px] cover ' src={pictureAsFile[0].preview} alt="" onChange={onChange} />
              <button onClick={() => {setFile([]); setPictureAsFile([]);}} className='absolute right-3 -top-2 md:-right-[-13px] md:-top-2 h-[18px] w-[18px] bg-[#525252] rounded-[50%] flex flex-col justify-center items-center text-center text-white text-[15px]  font-bold' type="button">
                x
              </button>
            </div>
          </div>
          
      }
    
    </>
  );
}

export default SelectImage;
