// Dropdowns.js



import React, { useState, useEffect } from 'react';
 import MaterialDropdown from './MaterialDropdown'; // Import your MaterialDropdown component
 

const Dropdown = ({ onSelect }) => {
  const [subcategory, setSubcategory] = useState('All');

  const handleSubcategoryChange = (value) => {
    setSubcategory(value);
    onSelect(value);
  };

  useEffect(() => {
    onSelect(subcategory);
  }, [subcategory, onSelect]);

  return (
    <div className='dropdownbox'>
      <div className='dropdown'>
        <MaterialDropdown
          label="Subfunctions"
          options={['Recruitment', 'Training' , 'Performance Management' , 'Employee Engagement and Retention' ,  'Compensation and Benefits', 'All']}
          onSelect={handleSubcategoryChange}
          value={subcategory}
        />
      </div>
    </div>
  );
};

export default Dropdown;

// import React, { useState, useEffect } from 'react';
// import MaterialDropdown from './MaterialDropdown';
// import './Dropdown.css';
// import { CSVLink } from 'react-csv';
// const Dropdowns = ({ onSelect }) => {
//   const [category, setCategory] = useState('');
//   const [subcategory, setSubcategory] = useState('');

//   const handleCategoryChange = (value) => {
//     setCategory(value);
//     setSubcategory('');
//     onSelect(value, '');
//   };




//   const handleSubcategoryChange = (value) => {
//     setSubcategory(value);
//     onSelect(category, value);
//   };

//   return (
//     <div className='dropdownbox'>
//         <div className='dropdown'>
//       <MaterialDropdown
//         label="Domain"
//         options={['Healthcare', 'FMCG', 'Education', 'E-commerce', 'Real Estate']}
//         onSelect={handleCategoryChange}
//       />
//   </div>

//   <div className='dropdown'>
//       <MaterialDropdown
//         label="Function"
//         options={
//           category === 'Healthcare'
//             ? ['Sales','Finance']
//             : category === 'FMCG'
//             ? ['Sales','Finance']// Add options for 'shares'
//             : category === 'Education'
//             ? ['Sales','Finance']
//             : category === 'E-commerce'
//             ? ['Sales','Finance']
//             : category === 'Real Estate'
//             ? ['Sales','Finance']
//             :[]

    
//         }
//         onSelect={handleSubcategoryChange}
//         disabled={!category}
//       />
//       </div>
//     </div>
//   );
// };





// ... (your other import statements)

// ... (your other import statements)

// ... (your other import statements)

// Dropdowns.js



// const Dropdowns = ({ onSelect }) => {
//   const [category, setCategory] = useState('Healthcare'); // Set the default domain
//   const [subcategory, setSubcategory] = useState('Sales'); // Set the default function

//   const handleCategoryChange = (value) => {
//     setCategory(value);
//   };

//   const handleSubcategoryChange = (value) => {
//     setSubcategory(value);
//     onSelect(category, value);
//   };

//   useEffect(() => {
//     onSelect(category, subcategory);
//   }, [category, subcategory, onSelect]);

//   return (
//     <div className='dropdownbox'>
      {/* <div className='dropdown'>
        <MaterialDropdown
          label="Domain"
          options={['Healthcare', 'FMCG', 'Education', 'E-commerce', 'Real Estate']}
          onSelect={handleCategoryChange}
          value={category} // Use the 'value' prop instead of 'defaultValue'
        />
      </div> */}

      {/* <div className='dropdown'>
        <MaterialDropdown
          label="Function"
          options={
            category === 'Healthcare'
              ? ['Sales', 'Finance']
              : category === 'FMCG'
              ? ['Sales', 'Finance']
              : category === 'Education'
              ? ['Sales', 'Finance']
              : category === 'E-commerce'
              ? ['Sales', 'Finance']
              : category === 'Real Estate'
              ? ['Sales', 'Finance']
              : []
          }
          onSelect={handleSubcategoryChange}
          disabled={!category}
          value={subcategory} // Use the 'value' prop instead of 'defaultValue'
        />
      </div>
    </div>
  );
};

export default Dropdowns; */}


  
  


// // Dropdowns.js


// Dropdowns.js

// Dropdowns.js

// Dropdowns.js





