// MaterialDropdown.js
// import React from 'react';
// import TextField from '@mui/material/TextField';
// import Autocomplete from '@mui/material/Autocomplete';

// const MaterialDropdown = ({ label, options, onSelect }) => {
//   return (
//     <Autocomplete
//       disablePortal
//       options={options}
//       sx={{ width: 300 }}
//       renderInput={(params) => <TextField {...params} label={label} />}
//       onChange={(event, value) => onSelect(value)}
//     />
//   );
// };




// MaterialDropdown.js
import React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const MaterialDropdown = ({ label, options, onSelect, value }) => {
  return (
    <Autocomplete
      disablePortal
      options={options}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label={label} />}
      onChange={(event, value) => onSelect(value)}
      value={value} // Set the default value
    />
  );
};

export default MaterialDropdown;


// export default MaterialDropdown;
