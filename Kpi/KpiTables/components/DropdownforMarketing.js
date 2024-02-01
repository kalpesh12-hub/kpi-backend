// import React from 'react'

// const DropdownforMarketing = () => {
//   return (
//     <div>DropdownforMarketing</div>
//   )
// }

// export default DropdownforMarketing


import {useState,useEffect} from 'react'
import MaterialDropdown from './MaterialDropdown';


const DropdownforMarketing = ({onSelect}) => {
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
      options={['Customer Retention and Loyalty', 'Digital Marketing and Engagement', 'Lead Generation Conversion','All']}
      onSelect={handleNewOptionChange}
      value={newOption}
    />
  </div>
  )
}

export default DropdownforMarketing;