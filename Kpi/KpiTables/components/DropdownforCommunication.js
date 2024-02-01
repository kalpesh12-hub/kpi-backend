// import React from 'react'

// const DropdownforCommunication = () => {
//   return (
//     <div>DropdownforCommunication</div>
//   )
// }

// export default DropdownforCommunication


import {useState,useEffect} from 'react'
import MaterialDropdown from './MaterialDropdown';


const DropdownforCommunication = ({onSelect}) => {
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
      options={['Reach', 'Effectiveness', 'Engagement', 'Response Rates','All']}
      onSelect={handleNewOptionChange}
      value={newOption}
    />
  </div>
  )
}

export default DropdownforCommunication;