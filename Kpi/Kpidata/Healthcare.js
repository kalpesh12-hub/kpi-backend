// import React, { useState, useRef, useEffect } from "react";
// import emailjs from "@emailjs/browser";
// import contact from "../../../assets/Contact_us.svg";
// import FooterWithSocialMediaIcons from "../../Home/Footer";
// import DataTable from "../KpiTables/components/Datatable";

// import sampleimg from "../../../assets/sub-1.JPG";
// import { Container } from "rsuite";     
// import App from "../../../App";
// // import Logo from '../src/assets/sceniuz.svg';
// import Logo from "../../../assets/sceniuz.svg"
// // import Dropdowns from "../src/components/Kpi/KpiTables/components/Dropdown";
// import Dropdowns from "../../../components/Kpi/KpiTables/components/Dropdown";


// const FORM_SESSION_KEY = "formSubmitted";
// const Healthcare = () => {
//   const [formSubmitted, setFormSubmitted] = useState(false);
//   const [showSuccessAlert, setShowSuccessAlert] = useState(false); // Define showSuccessAlert state
//   const [showForm, setShowForm] = useState(true); // Initially show the form
//   const formRef = useRef(null); // Create a useRef for the form


//   useEffect(() => {
//     // Check session storage to determine if the form has been submitted
//     const isFormSubmitted = sessionStorage.getItem(FORM_SESSION_KEY) === "true";

//     if (isFormSubmitted) {
//       // If the form has been submitted, hide the form
//       setFormSubmitted(true);
//     }
//   }, []);

//   const handleFormSubmit = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm(
//         "service_x3s7xzn",
//         "template_k1chwgs",
//         formRef.current,
//         "TcRQ1Hq-829d6uC5I"
//       )
//       .then(
//         (result) => {
//           console.log(result.text);
//           setShowSuccessAlert(true);
//           sessionStorage.setItem(FORM_SESSION_KEY, "true");
//           setTimeout(() => {
//             setShowSuccessAlert(false);
//             setFormSubmitted(true); // Set formSubmitted to true after submitting
//           }, 1000);
//         },
//         (error) => {
//           console.log(error.text);
//         }
//       );
//   };



//   // this is the functions of the dataTables 
//   const [selectedCategory, setSelectedCategory] = useState('');
//   const [selectedSubcategory, setSelectedSubcategory] = useState('');

//   const handleDropdownSelect = (category, subcategory) => {
//     setSelectedCategory(category);
//     setSelectedSubcategory(subcategory);
//   };

//   return (
//     <>




//     {formSubmitted ? ( // Render "Solution" and "Result" if the form is submitted
//       <>
//        <div>

//       <div className="ml-3 mt-2">
//       <Dropdowns onSelect={handleDropdownSelect} />
//       </div>

//         <DataTable category={selectedCategory} subcategory={selectedSubcategory} />
//       </div>
//       </>
//     ) : (

//       // Render the form if it hasn't been submitted
//       <Container className="p-10">
//    <div>
//     <h1 className="mb-3" style={{fontSize:'35px', fontWeight:"700", LineHeight:"1.2" , fontFamily: "Poppins", textAlign:"center"}}>Unlock Comprehensive Insights: Complete the Form to Access All KPIs</h1>
//    <p style={{fontSize:"18px" , lineHeight:"29px", color:"#595959", fontWeight:"400", textAlign:"center"}}>Gain exclusive access to a wealth of key performance indicators (KPIs) tailored to your needs. To embark on this data-driven journey, kindly fill out the form below. Your business success begins with informed decisions, and we're here to provide you with the essential insights you need.

// Thank you for taking the first step towards maximizing your potential. Complete the form, and let's elevate your business strategies with targeted KPIs designed just for you.</p>

//    </div>
//       <div style={{ border: "2px solid #d10000", padding: "30px 30px" }} className="grid grid-cols-1 md:grid-cols-2 gap-40 mt-8 ">

//         <div className="form-container order-2 md:order-1">


//           {/* Contact form integrated into the UI */}
//           <h4 className="contact-h4-header" id="from" style={{ color: '#d10000' }}>
//             Contact Information
//           </h4>
//           <form method="post" className="align-middle" ref={formRef}>
//             <input
//               type="email"
//               className="fields w-full"
//               name="user_email"
//               id="inputID"
//               placeholder="Email"
//             />
//             <br />

//             <input
//               type="text"
//               className="fields w-full"
//               name="user_name"
//               id="inputID"
//               placeholder="Name"
//             />
//             <br />

//             <input
//               type="number"
//               className="fields w-full"
//               name="user_phone"
//               id="inputID"
//               placeholder="Phone"
//             />
//             <br />

//             <input
//               type="text"
//               className="fields w-full"
//               name="message"
//               id="inputID"
//               placeholder="Message"
//             />
//             {/* ... More form input fields ... */}
//             <button
//               onClick={handleFormSubmit}
//               className="mt-4 field w-full text-center"

//             >
//               <span className="text-center span-data-btn">Submit</span>
//             </button>
//           </form>
//           {showSuccessAlert && (
//             <div
//               className="bg-green-500 text-sm text-white rounded-md p-4 mt-4"
//               role="alert"
//             >
//               <span className="font-bold">Success</span> Email sent successfully! We will get back to you soon.
//             </div>
//           )}
//         </div>

//         <div className="image-container order-1 md:order-2">
//           <div className='image-container order-1 md:order-2'>
//             <img src={contact} alt="" srcset="" width={"406px"} height={"500px"} />
//           </div>
//         </div>


//       </div>
//       </Container >
//     )}

//     <div className="container">
//       <FooterWithSocialMediaIcons />
//     </div>
//   </>
//   )
// }

// export default Healthcare




// import React, { useState, useRef, useEffect } from "react";
// import emailjs from "@emailjs/browser";
// import contact from "../../../assets/Contact_us.svg";
// import FooterWithSocialMediaIcons from "../../Home/Footer";
// import ItDataTable from "../KpiTables/components/ItDataTable";
// import { Container } from "rsuite";
// import DropdownforIt from "../KpiTables/components/DropdownforIt";
// import Dropdown from "../KpiTables/components/Dropdown";
// import DataTable from "../KpiTables/components/Datatable";


// const FORM_SESSION_KEY = "formSubmitted";
// const Healthcare = () => {
//   const [formSubmitted, setFormSubmitted] = useState(false);
//   const [showSuccessAlert, setShowSuccessAlert] = useState(false); // Define showSuccessAlert state
//   const [showForm, setShowForm] = useState(true); // Initially show the form
//   const formRef = useRef(null); // Create a useRef for the form


//   useEffect(() => {
//     // Check session storage to determine if the form has been submitted
//     const isFormSubmitted = sessionStorage.getItem(FORM_SESSION_KEY) === "true";

//     if (isFormSubmitted) {
//       // If the form has been submitted, hide the form
//       setFormSubmitted(true);
//     }
//   }, []);

//   const handleFormSubmit = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm(
//         "service_x3s7xzn",
//         "template_k1chwgs",
//         formRef.current,
//         "TcRQ1Hq-829d6uC5I"
//       )
//       .then(
//         (result) => {
//           console.log(result.text);
//           setShowSuccessAlert(true);
//           sessionStorage.setItem(FORM_SESSION_KEY, "true");
//           setTimeout(() => {
//             setShowSuccessAlert(false);
//             setFormSubmitted(true); // Set formSubmitted to true after submitting
//           }, 1000);
//         },
//         (error) => {
//           console.log(error.text);
//         }
//       );
//   };

 


  



//   // this is the functions of the dataTables 
//   const [selectedCategory, setSelectedCategory] = useState('');
//   const [selectedSubcategory, setSelectedSubcategory] = useState('');
//   const [selectedNewOption, setSelectedNewOption] = useState('');

//   const handleDropdownSelect = (category, subcategory, newOption) => {
//     setSelectedCategory(category);
//     setSelectedSubcategory(subcategory);
//     setSelectedNewOption(newOption);
//   };




//   return (
//     <>




//       {formSubmitted ? ( // Render "Solution" and "Result" if the form is submitted
//         <>
//           <div>
         
//             <div className="ml-3 mt-2">
//               <Dropdown onSelect={handleDropdownSelect} />
//             </div>

//             <DataTable category={selectedCategory} subcategory={selectedSubcategory} newOption={selectedNewOption} />
//           </div>
//         </>
//       ) : (

//         // Render the form if it hasn't been submitted
//         <Container className="p-10">
//           <div>
//             <h1 className="mb-3" style={{ fontSize: '35px', fontWeight: "700", LineHeight: "1.2", fontFamily: "Poppins", textAlign: "center" }}>Unlock Comprehensive Insights: Complete the Form to Access All KPIs</h1>
//             <p style={{ fontSize: "18px", lineHeight: "29px", color: "#595959", fontWeight: "400",fontFamily: "Poppins", textAlign: "center" }}>Gain exclusive access to a wealth of key performance indicators (KPIs) tailored to your needs. To embark on this data-driven journey, kindly fill out the form below. Your business success begins with informed decisions, and we're here to provide you with the essential insights you need.

//               Thank you for taking the first step towards maximizing your potential. Complete the form, and let's elevate your business strategies with targeted KPIs designed just for you.</p>

//           </div>
//           <div style={{ border: "2px solid #d10000", padding: "30px 30px" }} className="grid grid-cols-1 md:grid-cols-2 gap-40 mt-8 ">

//             <div className="form-container order-2 md:order-1">


//               {/* Contact form integrated into the UI */}
//               <h4 className="contact-h4-header " id="from" style={{ color: '#d10000' ,fontFamily: "Poppins" }}>
//                 Contact Information
//               </h4>
//               <form method="post" className="align-middle" ref={formRef}>
//                 <input
//                   type="email"
//                   className="fields w-full"
//                   name="user_email"
//                   id="inputID"
//                   placeholder="Email"
//                 />
//                 <br />

//                 <input
//                   type="text"
//                   className="fields w-full"
//                   name="user_name"
//                   id="inputID"
//                   placeholder="Name"
//                 />
//                 <br />

//                 <input
//                   type="number"
//                   className="fields w-full"
//                   name="user_phone"
//                   id="inputID"
//                   placeholder="Phone"
//                 />
//                 <br />

//                 <input
//                   type="text"
//                   className="fields w-full"
//                   name="message"
//                   id="inputID"
//                   placeholder="Message"
//                 />
//                 {/* ... More form input fields ... */}
//                 <button
//                   onClick={handleFormSubmit}
//                   className="mt-4 field w-full text-center"

//                 >
//                   <span className="text-center span-data-btn">Submit</span>
//                 </button>
//               </form>
//               {showSuccessAlert && (
//                 <div
//                   className="bg-green-500 text-sm text-white rounded-md p-4 mt-4"
//                   role="alert"
//                 >
//                   <span className="font-bold">Success</span> Email sent successfully! We will get back to you soon.
//                 </div>
//               )}
//             </div>

//             <div className="image-container order-1 md:order-2">
//               <div className='image-container order-1 md:order-2'>
//                 <img src={contact} alt="" srcset="" width={"406px"} height={"500px"} />
//               </div>
//             </div>


//           </div>
//         </Container >
//       )}

//       <div className="container">
//         <FooterWithSocialMediaIcons />
//       </div>
//     </>
//   )
// }

// export default Healthcare;



import React, { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import contact from "../../../assets/Contact us-bro-new.svg";
import DataTable from "../KpiTables/components/Datatable";
import { Container } from "rsuite";
import Dropdown from "../KpiTables/components/Dropdown";

const FORM_SESSION_KEY = "formSubmitted";

const Healthcare = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [showForm, setShowForm] = useState(true);
  const formRef = useRef(null);

  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedSubcategory, setSelectedSubcategory] = useState('');
  const [selectedNewOption, setSelectedNewOption] = useState('');

  const [errors, setErrors] = useState({
    email: '',
    phone: '',
    name: '', // Added name error state
    city: '',  // Added city error state
    country: '', // Added country error state
  });

  useEffect(() => {
    const isFormSubmitted = sessionStorage.getItem(FORM_SESSION_KEY) === "true";
    if (isFormSubmitted) {
      setFormSubmitted(true);
    }
  }, []);

  const validateForm = () => {
    let valid = true;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]+$/;

    if (!formRef.current.user_email.value.match(emailRegex)) {
      setErrors((prevErrors) => ({ ...prevErrors, email: 'Please enter a valid email address' }));
      valid = false;
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, email: '' }));
    }

    const phoneValue = formRef.current.user_phone.value;
    // Allowing any length for phone number
    if (!phoneValue.match(phoneRegex)) {
      setErrors((prevErrors) => ({ ...prevErrors, phone: 'Please enter a valid phone number' }));
      valid = false;
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, phone: '' }));
    }

    const nameValue = formRef.current.user_name.value;
    if (!nameValue.trim()) {
      setErrors((prevErrors) => ({ ...prevErrors, name: 'Name is required' }));
      valid = false;
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, name: '' }));
    }

    // Validation for city
  const cityValue = formRef.current.user_city.value;
  if (!cityValue.trim()) {
    setErrors((prevErrors) => ({ ...prevErrors, city: 'City is required' }));
    valid = false;
  } else {
    setErrors((prevErrors) => ({ ...prevErrors, city: '' }));
  }


  // Validation for country
  const countryValue = formRef.current.user_country.value;
  if (!countryValue.trim()) {
    setErrors((prevErrors) => ({ ...prevErrors, country: 'Country is required' }));
    valid = false;
  } else {
    setErrors((prevErrors) => ({ ...prevErrors, country: '' }));
  }

    return valid;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    emailjs
      .sendForm(
        "service_x3s7xzn",
        "template_k1chwgs",
        formRef.current,
        "TcRQ1Hq-829d6uC5I"
      )
      .then(
        (result) => {
          console.log(result.text);
          setShowSuccessAlert(true);
          sessionStorage.setItem(FORM_SESSION_KEY, "true");
          setTimeout(() => {
            setShowSuccessAlert(false);
            setFormSubmitted(true);
          }, 1000);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const [selectedCountryCode, setSelectedCountryCode] = useState('');


  const handleDropdownSelect = (category, subcategory, newOption) => {
    setSelectedCategory(category);
    setSelectedSubcategory(subcategory);
    setSelectedNewOption(newOption);
  };

  return (
    <>

<div>
            <div className="ml-3 mt-2">
              <Dropdown onSelect={handleDropdownSelect} />
            </div>
            <DataTable category={selectedCategory} subcategory={selectedSubcategory} newOption={selectedNewOption} />
          </div>


    

    </>
  );
};

export default Healthcare;
