// import React from 'react'

// const DropdownforOperation = () => {
//   return (
//     <div>DropdownforOperation</div>
//   )
// }

// export default DropdownforOperation


// import React from 'react'

// const DropdownforSales = () => {
//   return (
//     <div>DropdownforSales</div>
//   )
// }

// export default DropdownforSales


import {useState,useEffect} from 'react'
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
      options={['Cost Management', 'Customer Relationship Building', 'Demand Generation', 'Inventory Management','Lead Qualification & Pipeline Management','Logistics','Maintenance','Process Improvement','Performance Analysis & Optimization','Production Planning','Quality Control','Risk Mitigation','Solution Selling','Staffing','All']}
      onSelect={handleNewOptionChange}
      value={newOption}
    />
  </div>
  )
}

export default DropdownforSales

