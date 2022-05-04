/* eslint-disable react/prop-types */
import React from 'react';
import ReactSelect from 'react-select';
function Select(props) {

  //   const value = props.options.map(item => ({ label: item.name, value: item.id }));
  const defaultValue = (options, value) => {
    return options ? options.find((option) => option.value=== value ) : '';
  };
  const customStyles = {
    option: (provided) => ({
      ...provided,
      width: '100%',
      
     
    }),
    control: () => ({
      // none of react-select's styles are passed to <Control />
      width: props.controlWidth || '100%',
      height:props.controlHeight || '50px',
      display:'flex',
      background:'#F4F4F4',
      fontSize:'0.938em',
      border:'none',
      borderRadius:'8px',
    }),
    singleValue: (provided, state) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = 'opacity 300ms';
  
      return { ...provided, opacity, transition };
    }
  };


  //   let list =  props.options.map((item, index) => (
  //     <option name={props.name} onChange={props.onChange} key={index}>
  //       {item.name}
  //     </option>
  //   ));
  return (
    <ReactSelect
      components={{
        IndicatorSeparator: () => null
      }}
    
      name={props.name}
      options={props.options}
      onBlur={props.onBlur}
      onChange={value => props.onChange(value)}
      value={defaultValue(props.options,props.value)}
      styles={customStyles}
      placeholder={`${props.area} Seç`}
    />
      
     
  
  );
}

export default Select;
