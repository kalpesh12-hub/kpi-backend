import {useState,useEffect} from 'react'
import MaterialDropdown from './MaterialDropdown';

const DropdownforFinance = ({onSelect}) => {
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
      options={['Financial Planning and Budgeting', 'Financial Reporting and Analysis', 'Accounts Department', 'Budgeting and Forecasting', 'All']}
      onSelect={handleNewOptionChange}
      value={newOption}
    />
  </div>
  )
}

export default DropdownforFinance