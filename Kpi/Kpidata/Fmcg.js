import React, { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import contact from "../../../assets/Contact us-bro-new.svg";

import sampleimg from "../../../assets/sub-1.JPG";


const FORM_SESSION_KEY = "formSubmitted";
const Fmcg = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false); // Define showSuccessAlert state
  const [showForm, setShowForm] = useState(true); // Initially show the form
  const formRef = useRef(null); // Create a useRef for the form
  const [selectedCountryCode, setSelectedCountryCode] = useState('');


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

  return (
    <>
   

    

    {formSubmitted ? ( // Render "Solution" and "Result" if the form is submitted
      <>
        <div className="container mt-4">
          <h1
            style={{
              color: "#E09808",
              fontFamily: "Poppins",
              fontSize: "27px",
              fontStyle: "normal",
              fontWeight: 600,
              lineHeight: "33.6px",
              marginBottom: "6px",
            }}
          >
            Solution
          </h1>
          {/* ... Existing content for the Solution section ... */}
          <ul style={{
            color: '#5C5C5C',
            fontFamily: 'Poppins',
            fontSize: '15px',
            fontStyle: 'normal',
            fontWeight: 400,
            lineHeight: '19.6px',/* 140% */

          }} className="introduction-content p-4 custom-list"> <li className="mb-4">The Business Intelligence (BI) team presented a proof of concept to the client, initially testing it on three months data. Following successful testing, the solution was deployed for all data.
            </li>
            <li className="mb-3">These challenges hindered the client’s ability to make informed decisions and effectively manage reports. </li>
            <li className="mb-3">The team provided visualization which helped the client to make better decisions</li>
            <li className="mb-3">The key Business Intelligence objects implemented in building Net Realization Value reports.</li>
            <li className="mb-3">Measure sales performance across various channels. Ensure data integration to provide a holistic view of customer journeys and buying behaviors.
            </li>
          </ul>
        </div>

        <div className="container">
          <h1
            style={{
              color: "#E09808",
              fontFamily: "Poppins",
              fontSize: "27px",
              fontStyle: "normal",
              fontWeight: 600,
              lineHeight: "33.6px",
              marginBottom: "6px",
            }}
          >
            Result
          </h1>

          {/* ... Existing content for the Result section ... */}
          <h3 style={{
            color: '#5C5C5C',
            fontFamily: 'Poppins',
            fontSize: '15px',
            fontStyle: 'normal',
            fontWeight: 400,
            lineHeight: '25.6px' /* 140% */
          }} className="introduction-content">Sceniuz team effectively resolved the client's data fragmentation and manual reporting challenges by implementing a comprehensive solution. By consolidating data from various platforms and offering user-friendly visualizations, the client gained the ability to make informed decisions and respond swiftly to market dynamics, ultimately enhancing their sales strategies and agility. The integration of key Business Intelligence tools allowed for the efficient creation of Net Realization Value reports, significantly optimizing the client's data.</h3>
        </div>

      </>
    ) : (

      // Render the form if it hasn't been submitted

      <div style={{ border: "4px solid #E09808", padding: "30px 30px" }} className="grid grid-cols-1 md:grid-cols-2 gap-40 mt-8 ">

        <div className="form-container order-2 md:order-1">


          {/* Contact form integrated into the UI */}
          <h4 className="contact-h4-header" id="from" style={{ color: '#E09808' }}>
            Contact Information
          </h4>
          <form method="post" className="align-middle" ref={formRef}>
                <input
                  type="email"
                  className="fields w-full "
                  name="user_email"
                  id="inputID"
                  placeholder="Email"
                />
                <div className="error-message mb-3" style={{ color: 'red' }}>{errors.email}</div>

                <input
                  type="text"
                  className="fields w-full"
                  name="user_name"
                  id="inputID"
                  placeholder="Name"
                  required // Added the required attribute
                />

                <div className="error-message " style={{ color: 'red' }}>{errors.name}</div>
                <br />

                <div className="flex items-center">
    <select
      className="fields w-1/4 mr-2"
      name="user_country_code"
      id="countryCode"
      onChange={(e) => setSelectedCountryCode(e.target.value)}
      value={selectedCountryCode}
    >
      <option value="93">+93 (Afghanistan)</option>
<option value="355">+355 (Albania)</option>
<option value="213">+213 (Algeria)</option>
<option value="1-684">+1-684 (American Samoa)</option>
<option value="376">+376 (Andorra)</option>
<option value="244">+244 (Angola)</option>
<option value="1-264">+1-264 (Anguilla)</option>
<option value="672">+672 (Antarctica)</option>
<option value="1-268">+1-268 (Antigua and Barbuda)</option>
<option value="54">+54 (Argentina)</option>
<option value="374">+374 (Armenia)</option>
<option value="297">+297 (Aruba)</option>
<option value="61">+61 (Australia)</option>
<option value="43">+43 (Austria)</option>
<option value="994">+994 (Azerbaijan)</option>
<option value="1-242">+1-242 (Bahamas)</option>
<option value="973">+973 (Bahrain)</option>
<option value="880">+880 (Bangladesh)</option>
<option value="1-246">+1-246 (Barbados)</option>
<option value="375">+375 (Belarus)</option>
<option value="32">+32 (Belgium)</option>
<option value="501">+501 (Belize)</option>
<option value="229">+229 (Benin)</option>
<option value="1-441">+1-441 (Bermuda)</option>
<option value="975">+975 (Bhutan)</option>
<option value="591">+591 (Bolivia)</option>
<option value="387">+387 (Bosnia and Herzegovina)</option>
<option value="267">+267 (Botswana)</option>
<option value="55">+55 (Brazil)</option>
<option value="246">+246 (British Indian Ocean Territory)</option>
<option value="1-284">+1-284 (British Virgin Islands)</option>
<option value="673">+673 (Brunei)</option>
<option value="359">+359 (Bulgaria)</option>
<option value="226">+226 (Burkina Faso)</option>
<option value="257">+257 (Burundi)</option>
<option value="855">+855 (Cambodia)</option>
<option value="237">+237 (Cameroon)</option>
<option value="1">+1 (Canada)</option>
<option value="238">+238 (Cape Verde)</option>
<option value="1-345">+1-345 (Cayman Islands)</option>
<option value="236">+236 (Central African Republic)</option>
<option value="235">+235 (Chad)</option>
<option value="56">+56 (Chile)</option>
<option value="86">+86 (China)</option>
<option value="61">+61 (Christmas Island)</option>
<option value="61">+61 (Cocos Islands)</option>
<option value="57">+57 (Colombia)</option>
<option value="269">+269 (Comoros)</option>
<option value="682">+682 (Cook Islands)</option>
<option value="506">+506 (Costa Rica)</option>
<option value="385">+385 (Croatia)</option>
<option value="53">+53 (Cuba)</option>
<option value="599">+599 (Curacao)</option>
<option value="357">+357 (Cyprus)</option>
<option value="420">+420 (Czech Republic)</option>
<option value="243">+243 (Democratic Republic of the Congo)</option>
<option value="45">+45 (Denmark)</option>
<option value="253">+253 (Djibouti)</option>
<option value="1-767">+1-767 (Dominica)</option>
<option value="1-809">+1-809 (Dominican Republic)</option>
<option value="670">+670 (East Timor)</option>
<option value="593">+593 (Ecuador)</option>
<option value="20">+20 (Egypt)</option>
<option value="503">+503 (El Salvador)</option>
<option value="240">+240 (Equatorial Guinea)</option>
<option value="291">+291 (Eritrea)</option>
<option value="372">+372 (Estonia)</option>
<option value="251">+251 (Ethiopia)</option>
<option value="500">+500 (Falkland Islands)</option>
<option value="298">+298 (Faroe Islands)</option>
<option value="679">+679 (Fiji)</option>
<option value="358">+358 (Finland)</option>
<option value="33">+33 (France)</option>
<option value="689">+689 (French Polynesia)</option>
<option value="241">+241 (Gabon)</option>
<option value="220">+220 (Gambia)</option>
<option value="995">+995 (Georgia)</option>
<option value="49">+49 (Germany)</option>
<option value="233">+233 (Ghana)</option>
<option value="350">+350 (Gibraltar)</option>
<option value="30">+30 (Greece)</option>
<option value="299">+299 (Greenland)</option>
<option value="1-473">+1-473 (Grenada)</option>
<option value="1-671">+1-671 (Guam)</option>
<option value="502">+502 (Guatemala)</option>
<option value="44-1481">+44-1481 (Guernsey)</option>
<option value="224">+224 (Guinea)</option>
<option value="245">+245 (Guinea-Bissau)</option>
<option value="592">+592 (Guyana)</option>
<option value="509">+509 (Haiti)</option>
<option value="504">+504 (Honduras)</option>
<option value="852">+852 (Hong Kong)</option>
<option value="36">+36 (Hungary)</option>
<option value="354">+354 (Iceland)</option>
<option value="91">+91 (India)</option>
<option value="62">+62 (Indonesia)</option>
<option value="98">+98 (Iran)</option>
<option value="964">+964 (Iraq)</option>
<option value="353">+353 (Ireland)</option>
<option value="44-1624">+44-1624 (Isle of Man)</option>
<option value="972">+972 (Israel)</option>
<option value="39">+39 (Italy)</option>
<option value="225">+225 (Ivory Coast)</option>
<option value="1-876">+1-876 (Jamaica)</option>
<option value="81">+81 (Japan)</option>
<option value="44-1534">+44-1534 (Jersey)</option>
<option value="962">+962 (Jordan)</option>
<option value="7">+7 (Kazakhstan)</option>
<option value="254">+254 (Kenya)</option>
<option value="686">+686 (Kiribati)</option>
<option value="383">+383 (Kosovo)</option>
<option value="965">+965 (Kuwait)</option>
<option value="996">+996 (Kyrgyzstan)</option>
<option value="856">+856 (Laos)</option>
<option value="371">+371 (Latvia)</option>
<option value="961">+961 (Lebanon)</option>
<option value="266">+266 (Lesotho)</option>
<option value="231">+231 (Liberia)</option>
<option value="218">+218 (Libya)</option>
<option value="423">+423 (Liechtenstein)</option>
<option value="370">+370 (Lithuania)</option>
<option value="352">+352 (Luxembourg)</option>
<option value="853">+853 (Macau)</option>
<option value="389">+389 (Macedonia)</option>
<option value="261">+261 (Madagascar)</option>
<option value="265">+265 (Malawi)</option>
<option value="60">+60 (Malaysia)</option>
<option value="960">+960 (Maldives)</option>
<option value="223">+223 (Mali)</option>
<option value="356">+356 (Malta)</option>
<option value="692">+692 (Marshall Islands)</option>
<option value="222">+222 (Mauritania)</option>
<option value="230">+230 (Mauritius)</option>
<option value="262">+262 (Mayotte)</option>
<option value="52">+52 (Mexico)</option>
<option value="691">+691 (Micronesia)</option>
<option value="373">+373 (Moldova)</option>
<option value="377">+377 (Monaco)</option>
<option value="976">+976 (Mongolia)</option>
<option value="382">+382 (Montenegro)</option>
<option value="1-664">+1-664 (Montserrat)</option>
<option value="212">+212 (Morocco)</option>
<option value="258">+258 (Mozambique)</option>
<option value="95">+95 (Myanmar)</option>
<option value="264">+264 (Namibia)</option>
<option value="674">+674 (Nauru)</option>
<option value="977">+977 (Nepal)</option>
<option value="31">+31 (Netherlands)</option>
<option value="599">+599 (Netherlands Antilles)</option>
<option value="687">+687 (New Caledonia)</option>
<option value="64">+64 (New Zealand)</option>
<option value="505">+505 (Nicaragua)</option>
<option value="227">+227 (Niger)</option>
<option value="234">+234 (Nigeria)</option>
<option value="683">+683 (Niue)</option>
<option value="672">+672 (Norfolk Island)</option>
<option value="850">+850 (North Korea)</option>
<option value="1-670">+1-670 (Northern Mariana Islands)</option>
<option value="47">+47 (Norway)</option>
<option value="968">+968 (Oman)</option>
<option value="92">+92 (Pakistan)</option>
<option value="680">+680 (Palau)</option>
<option value="970">+970 (Palestine)</option>
<option value="507">+507 (Panama)</option>
<option value="675">+675 (Papua New Guinea)</option>
<option value="595">+595 (Paraguay)</option>
<option value="51">+51 (Peru)</option>
<option value="63">+63 (Philippines)</option>
<option value="870">+870 (Pitcairn)</option>
<option value="48">+48 (Poland)</option>
<option value="351">+351 (Portugal)</option>
<option value="1-787">+1-787 (Puerto Rico)</option>
<option value="1-939">+1-939 (Puerto Rico)</option>
<option value="974">+974 (Qatar)</option>
<option value="242">+242 (Republic of the Congo)</option>
<option value="262">+262 (Reunion)</option>
<option value="40">+40 (Romania)</option>
<option value="7">+7 (Russia)</option>
<option value="250">+250 (Rwanda)</option>
<option value="590">+590 (Saint Barthelemy)</option>
<option value="290">+290 (Saint Helena)</option>
<option value="1-869">+1-869 (Saint Kitts and Nevis)</option>
<option value="1-758">+1-758 (Saint Lucia)</option>
<option value="590">+590 (Saint Martin)</option>
<option value="508">+508 (Saint Pierre and Miquelon)</option>
<option value="1-784">+1-784 (Saint Vincent and the Grenadines)</option>
<option value="685">+685 (Samoa)</option>
<option value="378">+378 (San Marino)</option>
<option value="239">+239 (Sao Tome and Principe)</option>
<option value="966">+966 (Saudi Arabia)</option>
<option value="221">+221 (Senegal)</option>
<option value="381">+381 (Serbia)</option>
<option value="248">+248 (Seychelles)</option>
<option value="232">+232 (Sierra Leone)</option>
<option value="65">+65 (Singapore)</option>
<option value="1-721">+1-721 (Sint Maarten)</option>
<option value="421">+421 (Slovakia)</option>
<option value="386">+386 (Slovenia)</option>
<option value="677">+677 (Solomon Islands)</option>
<option value="252">+252 (Somalia)</option>

      {/* Add more country codes as needed */}
    </select>
    <input
      type="text"
      className="fields w-3/4"
      name="user_phone"
      id="inputID"
      placeholder="Phone"
    />
  </div>
  <div className="error-message mb-3" style={{ color: 'red' }}>{errors.phone}</div>

                <input
    type="text"
    className="fields w-full"
    name="user_city"
    id="inputID"
    placeholder="City"
    required
  />
  <div className="error-message mb-3" style={{ color: 'red' }}>{errors.city}</div>

  <input
    type="text"
    className="fields w-full"
    name="user_country"
    id="inputID"
    placeholder="Country"
    required
  />
  <div className="error-message mb-3" style={{ color: 'red' }}>{errors.country}</div>

                <input
                  type="text"
                  className="fields w-full"
                  name="message"
                  id="inputID"
                  placeholder="Message"
                />
                <button
                  onClick={handleFormSubmit}
                  className="mt-4 field w-full text-center"
                >
                  <span className="text-center span-data-btn">Submit</span>
                </button>
              </form>
              {showSuccessAlert && (
                <div
                  className="bg-green-500 text-sm text-white rounded-md p-4 mt-4"
                  role="alert"
                >
                  <span className="font-bold">Success</span> Email sent successfully! We will get back to you soon.
                </div>
              )}
        </div>

        <div className="image-container order-1 md:order-2">
          <div className='image-container order-1 md:order-2'>
            <img src={contact} alt="" srcset="" width={"406px"} height={"500px"} />
          </div>
        </div>


      </div>
    )}

    <div className="container m-3">
     
    </div>
  </>
  )
}

export default Fmcg;