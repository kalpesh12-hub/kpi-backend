// import React, { useRef, useState } from 'react';
// import emailjs from "@emailjs/browser";

// const ContactFormKPI = () => {
//     const formRef = useRef(null);
//   const [fileInput, setFileInput] = useState(null);

//   const handleFileChange = (event) => {
//     const file = event.target.files[0];
//     setFileInput(file);
//   };


//   // Encode file content to base64
//   const reader = new FileReader();
//   reader.readAsDataURL(fileInput);

//   reader.onloadend = () => {
//     const base64Data = reader.result;

//   const handleFormSubmit = (event) => {
//     event.preventDefault();

//     // Additional form data
//     const formData = new FormData(formRef.current);
//     formData.append('file', fileInput);

//     // Use formData in your emailjs.sendForm call
//     emailjs
//       .sendForm(
//         'service_x3s7xzn',
//         // 'template_k1chwgs',
//         'template_8t2ewqj',
//         formRef.current,
//         'TcRQ1Hq-829d6uC5I',
//         { file_attachment: base64Data } 
//       )
//       .then(
//         (response) => {
//           console.log('Email sent successfully:', response);
//         },
//         (error) => {
//           console.error('Error sending email:', error);
//         }
//       );
//   };
//   return (
//     <div>
//     <h4 className="contact-h4-header" id="from" style={{ color: '#d10000' }}>
//       Contact Information
//     </h4>
//     <form method="post" className="align-middle" ref={formRef} encType="multipart/form-data">
//       <input
//         type="email"
//         className="fields w-full"
//         name="user_email"
//         id="inputID"
//         placeholder="Email"
//       />
//       <br />

//       <input
//         type="text"
//         className="fields w-full"
//         name="user_name"
//         id="inputID"
//         placeholder="Name"
//       />
//       <br />

//       <input
//         type="number"
//         className="fields w-full"
//         name="user_phone"
//         id="inputID"
//         placeholder="Phone"
//       />
//       <br />

//       <input
//         type="text"
//         className="fields w-full"
//         name="message"
//         id="inputID"
//         placeholder="Message"
//       />
//       <br />
 
//       {/* File input for attachments */}
//       <input
//         type="file"
//         className="fields w-full"
//         name="file"
//         id="fileInput"
//         onChange={handleFileChange}
//       />
//       <br />

//       <button
//         onClick={handleFormSubmit}
//         className="mt-4 field w-full text-center"
//       >
//         <span className="text-center span-data-btn">Submit</span>
//       </button>
//     </form>
//   </div>
//   )
// }

// export default ContactFormKPI

// import React, { useRef, useState } from 'react';
// import emailjs from '@emailjs/browser';

// const ContactFormKPI = () => {
//   const formRef = useRef(null);
//   const [fileInput, setFileInput] = useState(null);

//   const handleFileChange = (event) => {
//     const file = event.target.files[0];
//     setFileInput(file);
//   };

//   const handleFormSubmit = (event) => {
//     event.preventDefault();

//     // Additional form data
//     const formData = new FormData(formRef.current);
//     formData.append('file', fileInput);

//     // Use formData in your emailjs.sendForm call
//     emailjs
//       .sendForm(
//         'service_x3s7xzn',
//         'template_8t2ewqj',
//         formRef.current,
//         'TcRQ1Hq-829d6uC5I'
//       )
//       .then(
//         (response) => {
//           console.log('Email sent successfully:', response);
//         },
//         (error) => {
//           console.error('Error sending email:', error);
//         }
//       );
//   };

//   return (
//     <div>
//       <h4 className="contact-h4-header" id="from" style={{ color: '#d10000' }}>
//         Contact Information
//       </h4>
//       <form
//         method="post"
//         className="align-middle"
//         ref={formRef}
//         encType="multipart/form-data"
//       >
//         <input
//           type="email"
//           className="fields w-full"
//           name="user_email"
//           id="inputID"
//           placeholder="Email"
//         />

//         <br />

//         <input
//           type="text"
//           className="fields w-full"
//           name="user_name"
//           id="inputID"
//           placeholder="Name"
//         />
//         <br />

//         <input
//           type="number"
//           className="fields w-full"
//           name="user_phone"
//           id="inputID"
//           placeholder="Phone"
//         />
//         <br />

//         <input
//           type="text"
//           className="fields w-full"
//           name="message"
//           id="inputID"
//           placeholder="Message"
//         />
//         <br />

//         {/* File input for attachments */}
//         <input
//           type="file"
//           className="fields w-full"
//           name="file"
//           id="fileInput"
//           onChange={handleFileChange}
//         />
//         <br />

//         <button
//           onClick={handleFormSubmit}
//           className="mt-4 field w-full text-center"
//         >
//           <span className="text-center span-data-btn">Submit</span>
//         </button>
//       </form>
//     </div>
//   );
// };

// export default ContactFormKPI;



// import React, { useRef } from 'react';
//  import emailjs from "@emailjs/browser";

// const ContactFormKPI = () => {
//   const formRef = useRef(null);

//   const handleFormSubmit = async (event) => {
//     event.preventDefault();

//     try {
//       // Use emailjs.sendForm with the form reference
//       const response = await emailjs.sendForm(
//         'service_x3s7xzn',
//         'template_8t2ewqj',
//         formRef.current
//       );

//       console.log('Email sent successfully:', response);
//     } catch (error) {
//       console.error('Error sending email:', error);
//     }
//   };

//   return (
//     <div>
//       <h4 className="contact-h4-header" id="from" style={{ color: '#d10000' }}>
//         Contact Information
//       </h4>
//       <form
//         method="post"
//         className="align-middle"
//         ref={formRef}
//         encType="multipart/form-data"
//       >
//         <input
//           type="email"
//           className="fields w-full"
//           name="user_email"
//           id="inputID"
//           placeholder="Email"
//         />
//         <br />

//         <input
//           type="text"
//           className="fields w-full"
//           name="user_name"
//           id="inputID"
//           placeholder="Name"
//         />
//         <br />

//         <input
//           type="number"
//           className="fields w-full"
//           name="user_phone"
//           id="inputID"
//           placeholder="Phone"
//         />
//         <br />

//         <input
//           type="text"
//           className="fields w-full"
//           name="message"
//           id="inputID"
//           placeholder="Message"
//         />
//         <br />

//         {/* File input for attachments */}
//         <input
//           type="file"
//           className="fields w-full"
//           name="file"
//           id="fileInput"
//         />
//         <br />

//         <button
//           onClick={handleFormSubmit}
//           className="mt-4 field w-full text-center"
//         >
//           <span className="text-center span-data-btn">Submit</span>
//         </button>
//       </form>
//     </div>
//   );
// };

// export default ContactFormKPI;



// import React, { useRef, useState } from 'react';
//   import emailjs from "@emailjs/browser";

// const ContactFormKPI = () => {
//   // Initialize EmailJS with your public key
//   emailjs.init('TcRQ1Hq-829d6uC5I');

//   const formRef = useRef(null);
//   const [fileInput, setFileInput] = useState(null);
//   const [fileLink, setFileLink] = useState('');

  

//   const handleFormSubmit = async (event) => {
//     event.preventDefault();

//     console.log('Form Data:', new FormData(formRef.current));

//     try {
//       // Use emailjs.sendForm with the form reference
//       const response = await emailjs.sendForm(
//         'service_x3s7xzn',
//         'template_8t2ewqj',
//         formRef.current
//       );

//       console.log('Email sent successfully:', response);
//     } catch (error) {
//       console.error('Error sending email:', error);
//     }
//   };

//   return (
//     <div>
//       <h4 className="contact-h4-header" id="from" style={{ color: '#d10000' }}>
//         Contact Information
//       </h4>
//       <form
//         method="post"
//         className="align-middle"
//         ref={formRef}
//         encType="multipart/form-data"
//       >
//         {/* ... Other input fields ... */}

//         {/* File input for attachments */}
       
//         <br />

//         {/* File link input */}
//         <label>
//           File Link:
//           <input
//             type="text"
//             className="fields w-full"
//             name="fileLink"
//             value={fileLink}
//             onChange={(e) => setFileLink(e.target.value)}
//             placeholder="Enter file link"
//           />
//         </label>
//         <br />

//         <button
//           onClick={handleFormSubmit}
//           className="mt-4 field w-full text-center"
//         >
//           <span className="text-center span-data-btn">Submit</span>
//         </button>
//       </form>
//     </div>
//   );
// };

// export default ContactFormKPI;


import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import TextField from '@mui/material/TextField';
import Sendkpi from "../../assets/img-for-kpi/senskpi.jpg"
// import contact from "../../assets/Contact_us.svg"
import contact from "../../assets/img-for-kpi/Share link-rafiki.svg"

const ContactFormKPI = () => {
  // Initialize EmailJS with your public key
  emailjs.init('TcRQ1Hq-829d6uC5I');

  const formRef = useRef();

  const [fileInput, setFileInput] = useState('');
  const [fileLink, setFileLink] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [errors, setErrors] = useState({
    kpiName: '',
    kpiDescription: '',
    industry: '',
    position: '',
    calculation: '',
    kpiFunction: '',
    email: '', // Add this line for the email field
  });

 

  const handleFormSubmit = async (event) => {
    event.preventDefault();

     // Additional form data
     const formData = new FormData(formRef.current);
     formData.append('file', fileInput);

     console.log('Form Data:', formData);

 // Validate form fields
 const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
 const emailValue = formData.get('email');


 if (!emailValue || !emailRegex.test(emailValue)) {
   setErrors((prevErrors) => ({ ...prevErrors, email: 'Valid email is required' }));
   return;
 } else {
   setErrors((prevErrors) => ({ ...prevErrors, email: '' }));
 }


 if (!formRef.current.kpi_name.value.trim()) {
  setErrors((prevErrors) => ({ ...prevErrors, kpiName: 'KPI Name is required' }));
  return;
} else {
  setErrors((prevErrors) => ({ ...prevErrors, kpiName: '' }));
}

if (!formRef.current.kpi_description.value.trim()) {
  setErrors((prevErrors) => ({ ...prevErrors, kpiDescription: 'KPI Description is required' }));
  return;
} else {
  setErrors((prevErrors) => ({ ...prevErrors, kpiDescription: '' }));
}

if (!formRef.current.industry.value.trim()) {
  setErrors((prevErrors) => ({ ...prevErrors, industry: 'Function is required' }));
  return;
} else {
  setErrors((prevErrors) => ({ ...prevErrors, industry: '' }));
}

if (!formRef.current.position.value.trim()) {
  setErrors((prevErrors) => ({ ...prevErrors, position: 'Position is required' }));
  return;
} else {
  setErrors((prevErrors) => ({ ...prevErrors, position: '' }));
}

if (!formRef.current.calculation.value.trim()) {
  setErrors((prevErrors) => ({ ...prevErrors, calculation: 'Calculation is required' }));
  return;
} else {
  setErrors((prevErrors) => ({ ...prevErrors, calculation: '' }));
}

if (!formRef.current.kpi_function.value.trim()) {
  setErrors((prevErrors) => ({ ...prevErrors, kpiFunction: 'KPI Subfunction is required' }));
  return;
} else {
  setErrors((prevErrors) => ({ ...prevErrors, kpiFunction: '' }));
}

const formElements = formRef.current.elements;
for (let i = 0; i < formElements.length; i++) {
  const element = formElements[i];
  if (element.name) {
    formData.append(element.name, element.value);
  }
}



   

    try {
      // Use formData in your emailjs.sendForm call
      const response = await emailjs.sendForm(
        'service_x3s7xzn',
        'template_8t2ewqj',
        formData
      );

      console.log('Email sent successfully:', response);
    } catch (error) {
      console.error('Error sending email:', error);
    }finally {
    // Move setFormSubmitted(true) outside of the try block
    setFormSubmitted(true);
  }
  };

  return (
<>


      <div>
    <h1 className="mb-3" style={{fontSize:'28px', fontWeight:"700", LineHeight:"1.2" , fontFamily: "Poppins", textAlign:"center", color:"rgba(21, 35, 74, 0.9)"}}>Share Your Key Performance Indicators (KPIs)</h1>
   <p className='p-3 mb-3' style={{fontSize:"18px" , lineHeight:"29px", color:"#595959",fontFamily: "Poppins", fontWeight:"500", textAlign:"center" , color:"rgba(21, 35, 74, 0.87)"}}>Welcome to our community! Your insights matter, and we invite you to contribute by sharing your Key Performance Indicators (KPIs). Whether you're an expert in your industry or have unique perspectives to offer, your KPIs can provide valuable insights to our community.

Use the form below to submit your KPIs, and let's build a knowledge-sharing hub together. Your contributions help us grow and empower others with the knowledge they need.

Thank you for being a part of our community and for sharing your expertise!</p>

   </div>
    <div style={{ border:"1px solid red"}}  className="flex flex-wrap">
     
    <div  className='w-full md:w-1/2 p-4'>
      <h4 className="contact-h4-header" id="from" style={{ color: '#d10000', fontFamily: "Poppins", fontWeight:"600" }}>
        Share KPI
      </h4>
      <form
        method="post"
        className="align-middle"
        ref={formRef}
        encType="multipart/form-data"
      >

 {/* Email */}
 <TextField
  className='mb-2'
  label="Email"
  variant="outlined"
  fullWidth
  name="email"
  placeholder="Enter Email"
  required
  error={Boolean(errors.email)}
  helperText={errors.email}
  inputProps={{ name: 'email' }} // Add this line to set the name attribute
/>

        
          {/* KPI Name */}
          <TextField
          className='mb-2'
          label="KPI Name"
          variant="outlined"
          fullWidth
          name="kpi_name"
          placeholder="Enter KPI Name"
          required
          error={Boolean(errors.kpiName)}
              helperText={errors.kpiName}
        />
        <br />
{/* KPI Description */}
<TextField
className='mb-2'
          label="KPI Description"
          variant="outlined"
          fullWidth
          name="kpi_description"
          placeholder="Enter KPI Description"
          required
          error={Boolean(errors.kpiDescription)}
          helperText={errors.kpiDescription}
        />
        <br />

       {/* Industry */}
       <TextField
       className='mb-2'
          label="Function"
          variant="outlined"
          fullWidth
          name="industry"
          placeholder="Enter Function"
          required
              error={Boolean(errors.industry)}
              helperText={errors.industry}
        />
        <br />

        {/* Position */}
       

       {/* Calculation */}
       <TextField
       className='mb-2'
          label="Calculation"
          variant="outlined"
          fullWidth
          name="calculation"
          placeholder="Enter Calculation"
          required
              error={Boolean(errors.calculation)}
              helperText={errors.calculation}
        />
        <br />

       {/* Function */}
       <TextField
       className='mb-2'
          label="Subunction"
          variant="outlined"
          fullWidth
          name="kpi_function"
          placeholder="Enter KPI Subfunction"
          required
          error={Boolean(errors.kpiFunction)}
          helperText={errors.kpiFunction}
        />
        <br />

      
        

         {/* File link input */}
         <TextField
         className='mb-2'
          label="File Link"
          variant="outlined"
          fullWidth
          name="fileLink"
          value={fileLink}
          onChange={(e) => setFileLink(e.target.value)}
          placeholder="Enter file link"
        />
        <br />

        <button
          onClick={handleFormSubmit}
          className="mt-4 field w-full text-center"
        >
          <span className="text-center span-data-btn">Submit</span>
        </button>
      </form>
    </div>
    <div  className='w-full md:w-1/2 p-4'>
  <img src={contact} className="w-full h-auto object-cover"/>
  </div>
    </div>
    {formSubmitted && (
        <div className="bg-green-500 text-sm text-white rounded-md p-4 mt-4" role="alert">
          <span className="font-bold">Success</span> Form submitted successfully! We will get back to you soon.
        </div>
      )}

    </>
  );
};

export default ContactFormKPI;
