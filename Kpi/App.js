// // App.js
// import React, { useState } from 'react';
// import Dropdowns from "./components/Dropdown"
// import DataTable from './components/Datatable';
// import Logo from "../src/assets/sceniuz.svg";
// import { CSVLink } from 'react-csv';

// const App = () => {
//   const [selectedCategory, setSelectedCategory] = useState('');
//   const [selectedSubcategory, setSelectedSubcategory] = useState('');

//   const handleDropdownSelect = (category, subcategory) => {
//     setSelectedCategory(category);
//     setSelectedSubcategory(subcategory);
//   };

//   return (
//     <div>
//       <img style={{float:"right",width:'230px', MarginTop:'0px'}} src={Logo}></img>
//       <p style={{marginLeft:"20px", fontFamily:"roboto,Helvetica,Arial,sans-serif", color:"rgba(0, 0, 0, 0.87)",fontWeight:"600",fontSize:"28px"}}>KPI'S Database</p>
      
      
//       <Dropdowns onSelect={handleDropdownSelect} />
//       <DataTable category={selectedCategory} subcategory={selectedSubcategory} />
//     </div>
//   );
// };

// export default App;
