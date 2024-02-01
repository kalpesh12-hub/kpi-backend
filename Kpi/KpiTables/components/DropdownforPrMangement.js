




import {useState,useEffect} from 'react'
import MaterialDropdown from './MaterialDropdown';

const DropdownforPrMangement = ({onSelect}) => {
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
      options={['Communication Management', 'Project Health', 'Project Progress', 'Quality Management','Resource Management','Risk Management','Stakeholder Management', 'All']}
      onSelect={handleNewOptionChange}
      value={newOption}
    />
  </div>
  )
}

export default DropdownforPrMangement;

