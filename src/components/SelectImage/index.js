/* eslint-disable quotes */
/* eslint-disable react/prop-types */
import React from 'react';
import {useDropzone} from 'react-dropzone';
function SelectImage({onChange,file,setFile,setPictureAsFile,setFileError,fileError}) {
  console.log(file);
  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*',
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
  console.log(file);
  return (
    <>
      {
        file.length <=0 ? <label {...getRootProps()}
          
          className={`flex flex-col w-full h-[164px] border-[1px] rounded-[10px] ${fileError ? 'border-red-400 hover:border-red-400' : 'border-[#B1B1B1]'}  border-dashed hover:bg-gray-100 hover:border-gray-300`}>
          <div className="flex flex-col items-center justify-center pt-7">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-400 group-hover:text-gray-600"
              fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
            </svg>
            <input {...getInputProps()}  onChange={onChange} />

            <p className="pt-1 text-sm tracking-wider text-gray-400  text-center group-hover:text-gray-600">
                              Sürükleyip bırakarak yükle <br></br>veya</p>
          </div>
                        
                      
          <input type="file" name='file' onChange={onChange} accept={'image/png , image/jpg , image/webp'}  className="opacity-100" />
          <div className='flex text-center w-full justify-center items-center'>
            <button className='cursor-pointer bg-[#F4F4F4] rounded-[15px] w-[122px] h-[30px] text-[#B1B1B1] text-[0.938em]'>Görsel Seçin</button>
          </div>
                   
          <div className=' text-center w-full  h-full'>
            <p className='text-[#B1B1B1] text-[0.75em]  mt-[15px] mb-[5px]'>PNG ve JPEG Dosya boyutu: max. 100kb</p>
          </div>
        </label> : 

          <div className='w-full flex justify-start mb-[36px]'>
            <div className='md:w-[113px] w-[100px] h-[100px] relative  md:h-[133px] flex justify-start flex-row'>
              <img className=' rounded-[8px] ' src={file[0].preview} alt="" />
              <button onClick={() => setFile([])} className='absolute right-1 -top-2 md:-right-1 md:-top-3 h-7 w-7 bg-[gray] rounded-[50%] flex justify-center text-white ' type="button">
                x
              </button>
            </div>
          </div>
      }
    
    </>
  );
}

export default SelectImage;
