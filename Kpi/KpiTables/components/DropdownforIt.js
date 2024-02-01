
// import React from 'react'

// const DropdownforIt = () => {
//   return (
//     <div>DropdownforIt</div>
//   )
// }

// export default DropdownforIt
import {useState,useEffect} from 'react'
import MaterialDropdown from './MaterialDropdown';

const DropdownforIt = ({onSelect}) => {
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
      options={['Vendor Management', 'Application Performance', 'Business Continuity', 'Infrastructure', 'IT Financial Management','IT Project Management','Security','Service Desk', 'All']}
      onSelect={handleNewOptionChange}
      value={newOption}
    />
  </div>
  )
}

export default DropdownforIt