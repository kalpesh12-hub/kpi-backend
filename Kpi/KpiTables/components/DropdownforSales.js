// import React from 'react'

// const DropdownforSales = () => {
//   return (
//     <div>DropdownforSales</div>
//   )
// }

// export default DropdownforSales


import React, {useState,useEffect} from 'react'
import MaterialDropdown from './MaterialDropdown';


const DropdownforSales = ({onSelect}) => {
    const [newOption, setNewOption] = useState('All');

    const handleNewOptionChange = (value) => {
        setNewOption(value);
        onSelect(value);
      };

      useEffect(() => {
        onSelect(newOption);
      }, [newOption, onSelect]);
  return (
    <div className='dropdown'>
    <MaterialDropdown
      label="Subfunctions"
      options={['Customer Relationship Building', 'Performance Analysis & Optimization', 'Prospecting and Lead Generation', 'Sales Planning and Strategy', 'All']}
      onSelect={handleNewOptionChange}
      value={newOption}
    />
  </div>
  )
}

export default DropdownforSales


