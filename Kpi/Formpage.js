// // FormPage.js

// import React, { useState } from 'react';
// import { TextField, Button } from '@mui/material';
// import emailjs from '@emailjs/browser';
// import { useNavigate } from 'react-router-dom';

// const FormPage = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     // Add other form fields as needed
//   });

//   const navigate = useNavigate();

//   const handleFormSubmit = (e) => {
//     e.preventDefault();

//     emailjs
//       .send('service_x3s7xzn', 'template_k1chwgs', formData, 'TcRQ1Hq-829d6uC5I')
//       .then(() => {
//         // Mark the form as submitted by updating the state
//         localStorage.setItem('formSubmitted', 'true');
//         // Use navigate to redirect to the desired route
//         navigate('/healthcare/*');
//       })
//       .catch((error) => {
//         console.error('Error sending email:', error);
//       });
//   };

//   const handleInputChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   return (
//     <div>
//       <h1>Form Page</h1>
//       <form onSubmit={handleFormSubmit}>
//         <TextField
//           type="text"
//           name="name"
//           label="Name"
//           value={formData.name}
//           onChange={handleInputChange}
//           required
//         />
//         <TextField
//           type="email"
//           name="email"
//           label="Email"
//           value={formData.email}
//           onChange={handleInputChange}
//           required
//         />
//         {/* Add other form fields as needed */}
//         <Button type="submit" variant="contained" color="primary">
//           Submit
//         </Button>
//       </form>
//     </div>
//   );
// };

// export default FormPage;



// FormPage.jsx

// FormPage.jsx

// FormPage.jsx

import React, { useState } from 'react';
 import emailjs from '@emailjs/browser';
import { useNavigate } from 'react-router-dom';

const FormPage = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send email using emailjs
      const templateParams = { email };

      // Replace 'YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', and 'YOUR_USER_ID' with your actual credentials
      await emailjs.send('service_x3s7xzn', 'template_k1chwgs', templateParams, 'TcRQ1Hq-829d6uC5I');

      // Mark the form as submitted by updating the state
      localStorage.setItem('formSubmitted', 'true');

      // Use navigate to redirect to the desired route
      navigate('/healthcare');
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };

  return (
    <div className="container mt-4">
      <h2>Form Page</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormPage;
