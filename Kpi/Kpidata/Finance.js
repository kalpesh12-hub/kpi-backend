


import React, { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import contact from "../../../assets/Contact us-bro-new.svg";
import FinanaceDataTable from "../KpiTables/components/FinanaceDataTable";
import { Container } from "rsuite";
import DropdownforFinance from "../KpiTables/components/DropdownforFinance";
import Button from '@mui/material/Button';




const FORM_SESSION_KEY = "formSubmitted";
const Finance = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false); // Define showSuccessAlert state
  const [showForm, setShowForm] = useState(true); // Initially show the form
  const formRef = useRef(null); // Create a useRef for the form


  const [errors, setErrors] = useState({
    email: '',
    phone: '',
    name: '', // Added name error state
    city: '',  // Added city error state
    country: '', // Added country error state
  });


  useEffect(() => {
    // Check session storage to determine if the form has been submitted
    const isFormSubmitted = sessionStorage.getItem(FORM_SESSION_KEY) === "true";

    if (isFormSubmitted) {
      // If the form has been submitted, hide the form
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
            setFormSubmitted(true); // Set formSubmitted to true after submitting
          }, 1000);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  


  // this is the functions of the dataTables 
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedSubcategory, setSelectedSubcategory] = useState('');
  const [selectedNewOption, setSelectedNewOption] = useState('');   
  const [selectedCountryCode, setSelectedCountryCode] = useState('');

  const handleDropdownSelect = (category, subcategory, newOption) => {
    setSelectedCategory(category);
    setSelectedSubcategory(subcategory);
    setSelectedNewOption(newOption);
  };

  return (
    <>
   
   <div >
      
      <div className="mt-2 ml-3">

      <DropdownforFinance onSelect={handleDropdownSelect}/>
      </div>
      
    
       <FinanaceDataTable category={selectedCategory} subcategory={selectedSubcategory} newOption={selectedNewOption} />
     </div>
    

   


  </>
  )
}

export default Finance;