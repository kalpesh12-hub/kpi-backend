import { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from "react-router-dom";
import samplimg2 from "../../assets/finalsubImg.svg";


import { Button } from '@mui/material';
import FormPage from './Formpage';
import Healthcare from './Kpidata/Healthcare';
import { useNavigate } from 'react-router-dom';
import { Container } from 'rsuite';
import KPiImg from "../../assets/img-for-kpi/Kpi.png"
import SampleCard from '../SampleCard';





import selectkpiimg1 from "../../assets/img-for-kpi/pexels-polina-zimmerman-3747455.jpg"
import Sales from "../../assets/img-for-kpi/Sales.jpg"
import project from "../../assets/img-for-kpi/Project.jpg"
import Customer from "../../assets/img-for-kpi/Customer.jpg"
import oprations from "../../assets/img-for-kpi/oprationmange.jpg"
import finance from "../../assets/img-for-kpi/finance.jpg"
import itimg from "../../assets/img-for-kpi/IT.jpg"
import finance2 from "../../assets/img-for-kpi/finance21.jpg"

import Communication from '../../assets/img-for-kpi/Communication.jpg';






const SelectKpi = () => {





  // const contactfoot = useRef()
  // useEffect(()=>{
  //   if(contactfoot){ contactfoot?.current.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
  // }
  // },[])


  // const scrollToTop = () => {
  //   window.scrollTo({ top: 0, behavior: "smooth" });
  // };

  //   const form = useRef();


  return (


    <>
      <div style={{ background: "#ffff", borderBottom: "0.5px solid #f0f0f0" }}>
        <Container>
          <div className="content-data grid grid-cols-1 md:grid-cols-2 gap-8 ml-4 mb-4">
            <div style={{}} className="  order-2 md:order-1 ">
              {/* <img src={about2} alt="" srcset="" width={"406px"}  height={"430px"}/> */}
              <h1 className='mt-2' style={{ fontSize: '34px', fontWeight: "700", LineHeight: "1.2", fontFamily: "Poppins", color:"#212529" }}>KPI Functional Databases</h1>
              <p className='mt-3' style={{ fontSize: "18px", lineHeight: "29px", fontFamily: "Poppins", color: "rgba(21, 35, 74, 0.87)", fontWeight: "500" }}>Why bother with the complexity of starting from scratch when developing KPIs and their specifics? Count on us to furnish you with an extensive repository of KPIs customized to meet your requirements. Our offerings encompass a range of functionalities</p>
              <h1 className='mt-3' style={{ fontSize: "18px", lineHeight: "29px", fontFamily: "Poppins", color: "#212529", fontWeight: "700" }}>AVAILABLE FUNCTIONS:</h1>
              <div> 
                <p className='mt-3' style={{ fontSize: "18px", fontFamily: "Poppins", lineHeight: "29px", color: "rgba(21, 35, 74, 0.87)", fontWeight: "500", }}>
                  Human Resources | Finance | Sales | IT | Communications
                  | Operation | Project Management | Customer Service | Marketing ... More functions are coming soon&nbsp;
                </p>
              </div>
            </div>

            <div style={{}} className="page-content-wrapper flex justify-center flex-col text-center align-middle gap-10 order-1 md:order-2">
              <img src={KPiImg} />

            </div>
          </div>
        </Container>


        <div className='mb-12'>
          <h1 style={{ fontSize: '35px', fontWeight: "700", LineHeight: "1.2", fontFamily: "Poppins",color:"#212529" }} className='text-center'>KPI Functional Databases</h1>
          <p style={{ fontFamily: "Poppins", fontSize: "24px" ,fontWeight: "600",color: "rgba(21, 35, 74, 0.87)"}} className='text-center mt-3'>Choose and click to View one of the available function databases</p>
        </div>




        <div  className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5">

          {/* // this is new cards */}
          <Link to="/Hr" style={{ textDecoration: 'none' , color: 'inherit' }}>

          <div style={{
            // borderRadius: '11px',
            border:"0.5px solid black",
            background: '#f9f9f9',
            height: 'auto', // Use auto for flexible height
            width: '98%', // Use percentage for responsive width
            maxWidth: '320px', // Set a maximum width if needed
          
          }} className="flex flex-col justify-center items-center  mt-5 md:w-full w-full ml-8 card1">

            <div className="w-full h-48 object-cover">
              <img src={selectkpiimg1} alt="KPI" className="w-full h-full object-cover" />
            </div>

            <div className='mb-2 mt-4' style={{ fontSize: "1.5rem", fontFamily: "Poppins", fontWeight: "700", color:"#212529" }}>
              <h1 className='text-center'>HR</h1>
            </div>

            <p style={{ fontFamily: "Poppins", fontSize: "1rem" }} className='text-center mb-3'>5&nbsp;Function | 24 KPIs</p>
            <hr className='mb-3' style={{ width: "25%", color: 'pink', backgroundColor: 'pink', height: 2 }} />

            <p className='text-center p-3' style={{ fontFamily: "Poppins", fontSize: "1rem", color: "rgba(21, 35, 74, 0.87)" }}>
              Evaluate employee engagement and well-being by assessing the utilization rate of offered benefits, ensuring optimal support.
            </p>
            <hr className='mt-3' style={{ width: "100%", color: 'f0f0f0', backgroundColor: 'f0f0f0', height: 0.5 }} />

              <button className='mt-4 mb-4 flex items-center justify-center' style={{
                width: '100px',
                height: '23px', // Adjusted height for better visibility
                backgroundColor: 'black',
                color: 'white',
                borderTopLeftRadius: '25px',
                borderBottomLeftRadius: '25px',
                borderTopRightRadius: '25px',
                borderBottomRightRadius: '25px',
                border: 'none',
                fontSize: "1rem",
                fontFamily: "Poppins",
              }}>
                View
              </button>
           

          </div>
          </Link>

          <Link to="/finance" style={{ textDecoration: 'none' , color: 'inherit' }}>
          <div style={{
          
            border:"0.5px solid black",
            background: '#f9f9f9',
            height: 'auto', // Use auto for flexible height
            width: '90%', // Use percentage for responsive width
            maxWidth: '320px', // Set a maximum width if needed
            
          }} className="flex flex-col justify-center items-center mt-5 md:w-full w-full ml-8 card1">

            <div className="w-full h-48 object-cover">
              <img src={finance2} alt="KPI" className="w-full h-full object-cover" />
            </div>

            <div className='mb-2 mt-4' style={{ fontSize: "1.5rem", fontFamily: "Poppins", fontWeight: "700" }}>
              <h1 className='text-center'>Finance</h1>
            </div>

            <p style={{ fontFamily: "Poppins", fontSize: "1rem" }} className='text-center mb-3'>4&nbsp;Function | 28 KPIs</p>
            <hr className='mb-3' style={{ width: "25%", color: 'pink', backgroundColor: 'pink', height: 2 }} />

            <p className='text-center p-3' style={{ fontFamily: "Poppins", fontSize: "1rem",color: "rgba(21, 35, 74, 0.87)" }}>
              Monitor the movement of cash in and out of the business to ensure financial stability and operational flexibility.
            </p>
            <hr className='mt-3' style={{ width: "100%", color: 'f0f0f0', backgroundColor: 'f0f0f0', height: 0.5 }} />

           
              <button className='mt-4 mb-4 flex items-center justify-center' style={{
                width: '100px',
                height: '23px', // Adjusted height for better visibility
                backgroundColor: 'black',
                color: 'white',
                borderTopLeftRadius: '25px',
                borderBottomLeftRadius: '25px',
                borderTopRightRadius: '25px',
                borderBottomRightRadius: '25px',
                border: 'none',
                fontSize: "1rem",
                fontFamily: "Poppins",
              }}>
                View
              </button>
          

          </div>
          </Link>

          <Link to="/Sales" style={{ textDecoration: 'none' , color: 'inherit' }}>
          <div style={{
           
            border:"0.5px solid black",
            background: '#f9f9f9',
            height: 'auto', // Use auto for flexible height
            width: '90%', // Use percentage for responsive width
            maxWidth: '320px', // Set a maximum width if needed
          }} className="flex flex-col justify-center items-center  mt-5 md:w-full w-full ml-8 card1">

            <div className="w-full h-48 object-cover">
              <img src={Sales} alt="KPI" className="w-full h-full object-cover" />
            </div>

            <div className='mb-2 mt-4' style={{ fontSize: "1.5rem", fontFamily: "Poppins", fontWeight: "700" }}>
              <h1 className='text-center'>Sales</h1>
            </div>

            <p style={{ fontFamily: "Poppins", fontSize: "1rem" }} className='text-center mb-3'>4&nbsp;Function | 18 KPIs</p>
            <hr className='mb-3' style={{ width: "25%", color: 'pink', backgroundColor: 'pink', height: 2 }} />

            <p className='text-center p-3' style={{ fontFamily: "Poppins", fontSize: "1rem", color: "rgba(21, 35, 74, 0.87)" }}>
              Track the percentage increase in sales over a specified period to measure business expansion and performance.
            </p>
            <hr className='mt-3' style={{ width: "100%", color: 'f0f0f0', backgroundColor: 'f0f0f0', height: 0.5 }} />

              <button className='mt-4 mb-4 flex items-center justify-center' style={{
                width: '100px',
                height: '23px', // Adjusted height for better visibility
                backgroundColor: 'black',
                color: 'white',
                borderTopLeftRadius: '25px',
                borderBottomLeftRadius: '25px',
                borderTopRightRadius: '25px',
                borderBottomRightRadius: '25px',
                border: 'none',
                fontSize: "1rem",
                fontFamily: "Poppins",
              }}>
                View
              </button>
            

          </div>
          </Link>


          <Link to="/it" style={{ textDecoration: 'none' , color: 'inherit' }}>
          <div style={{
           
            border:"0.5px solid black",
            background: '#f9f9f9',
            height: 'auto', // Use auto for flexible height
            width: '90%', // Use percentage for responsive width
            maxWidth: '320px', // Set a maximum width if needed
          }} className="flex flex-col justify-center items-center  mt-5 md:w-full w-full ml-8 card1">

            <div className="w-full h-48 object-cover">
              <img src={itimg} alt="KPI" className="w-full h-full object-cover" />
            </div>

            <div className='mb-2 mt-4' style={{ fontSize: "1.5rem", fontFamily: "Poppins", fontWeight: "700" }}>
              <h1 className='text-center'>IT</h1>
            </div>

            <p style={{ fontFamily: "Poppins", fontSize: "1rem" }} className='text-center mb-3'>5&nbsp;Function | 19 KPIs</p>
            <hr className='mb-3' style={{ width: "25%", color: 'pink', backgroundColor: 'pink', height: 2 }} />

            <p className='text-center p-3' style={{ fontFamily: "Poppins", fontSize: "1rem", color: "rgba(21, 35, 74, 0.87)" }}>
              Measure the reliability of IT systems by assessing the percentage of time they are operational, ensuring consistent service availability.
            </p>
            <hr className='mt-3' style={{ width: "100%", color: 'f0f0f0', backgroundColor: 'f0f0f0', height: 0.5 }} />

           
              <button className='mt-4 mb-4 flex items-center justify-center' style={{
                width: '100px',
                height: '23px', // Adjusted height for better visibility
                backgroundColor: 'black',
                color: 'white',
                borderTopLeftRadius: '25px',
                borderBottomLeftRadius: '25px',
                borderTopRightRadius: '25px',
                borderBottomRightRadius: '25px',
                border: 'none',
                fontSize: "1rem",
                fontFamily: "Poppins",
              }}>
                View
              </button>
            

          </div>
          </Link>


          <Link to="/communication" style={{ textDecoration: 'none' , color: 'inherit' }}>
          <div style={{
            
            border:"0.5px solid black",
            background: '#f9f9f9',
            height: 'auto', // Use auto for flexible height
            width: '90%', // Use percentage for responsive width
            maxWidth: '320px', // Set a maximum width if needed
          }} className="flex flex-col justify-center items-center  mt-5 md:w-full w-full ml-8 card1">

            <div className="w-full h-48 object-cover">
              <img src={Communication} alt="KPI" className="w-full h-full object-cover" />
            </div>

            <div className='mb-2 mt-4' style={{ fontSize: "1.5rem", fontFamily: "Poppins", fontWeight: "700" }}>
              <h1 className='text-center'>Communications</h1>
            </div>

            <p style={{ fontFamily: "Poppins", fontSize: "1rem" }} className='text-center mb-3'>4&nbsp;Function | 20 KPIs</p>
            <hr className='mb-3' style={{ width: "25%", color: 'pink', backgroundColor: 'pink', height: 2 }} />

            <p className='text-center p-3' style={{ fontFamily: "Poppins", fontSize: "1rem" , color: "rgba(21, 35, 74, 0.87)"}}>
              Evaluate communication efficiency by measuring the time it takes to respond to inquiries or resolve issues.
            </p>
            <hr className='mt-3' style={{ width: "100%", color: 'f0f0f0', backgroundColor: 'f0f0f0', height: 0.5 }} />

         
              <button className='mt-4 mb-4 flex items-center justify-center' style={{
                width: '100px',
                height: '23px', // Adjusted height for better visibility
                backgroundColor: 'black',
                color: 'white',
                borderTopLeftRadius: '25px',
                borderBottomLeftRadius: '25px',
                borderTopRightRadius: '25px',
                borderBottomRightRadius: '25px',
                border: 'none',
                fontSize: "1rem",
                fontFamily: "Poppins",
              }}>
                View
              </button>
           

          </div>
          </Link>


          <Link to="/operation" style={{ textDecoration: 'none' , color: 'inherit' }}>
          <div style={{
          
            border:"0.5px solid black",
            background: '#f9f9f9',
            height: 'auto', // Use auto for flexible height
            width: '90%', // Use percentage for responsive width
            maxWidth: '320px', // Set a maximum width if needed
          }} className="flex flex-col justify-center items-center  mt-5 md:w-full w-full ml-8 card1">

            <div className="w-full h-48 object-cover">
              <img src={oprations} alt="KPI" className="w-full h-full object-cover" />
            </div>

            <div className='mb-2 mt-4' style={{ fontSize: "1.5rem", fontFamily: "Poppins", fontWeight: "700" }}>
              <h1 className='text-center'>Operation</h1>
            </div>

            <p style={{ fontFamily: "Poppins", fontSize: "1rem" }} className='text-center mb-3'>14&nbsp;Function | 20 KPIs</p>
            <hr className='mb-3' style={{ width: "25%", color: 'pink', backgroundColor: 'pink', height: 2 }} />

            <p className='text-center p-3' style={{ fontFamily: "Poppins", fontSize: "1rem", color: "rgba(21, 35, 74, 0.87)" }}>
              Assess operational efficiency by measuring the time it takes to complete a specific process or task from start to finish.
            </p>
            <hr className='mt-3' style={{ width: "100%", color: 'f0f0f0', backgroundColor: 'f0f0f0', height: 0.5 }} />

            
              <button className='mt-4 mb-4 flex items-center justify-center' style={{
                width: '100px',
                height: '23px', // Adjusted height for better visibility
                backgroundColor: 'black',
                color: 'white',
                borderTopLeftRadius: '25px',
                borderBottomLeftRadius: '25px',
                borderTopRightRadius: '25px',
                borderBottomRightRadius: '25px',
                border: 'none',
                fontSize: "1rem",
                fontFamily: "Poppins",
              }}>
                View
              </button>
           

          </div>
          </Link>


          <Link to="/project-managment" style={{ textDecoration: 'none' , color: 'inherit' }}>
          <div style={{
          
            border:"0.5px solid black",
            background: '#f9f9f9',
            height: 'auto', // Use auto for flexible height
            width: '90%', // Use percentage for responsive width
            maxWidth: '320px', // Set a maximum width if needed
          }} className="flex flex-col justify-center items-center  mt-5 md:w-full w-full ml-8 card1 mb-4">

            <div className="w-full h-48 object-cover">
              <img src={project} alt="KPI" className="w-full h-full object-cover" />
            </div>

            <div className='mb-2 mt-4' style={{ fontSize: "1.5rem", fontFamily: "Poppins", fontWeight: "700" }}>
              <h1 className='text-center'>Project Management</h1>
            </div>

            <p style={{ fontFamily: "Poppins", fontSize: "1rem" }} className='text-center mb-3'>4&nbsp;Function | 28 KPIs</p>
            <hr className='mb-3' style={{ width: "25%", color: 'pink', backgroundColor: 'pink', height: 2 }} />

            <p className='text-center p-3' style={{ fontFamily: "Poppins", fontSize: "1rem", color: "rgba(21, 35, 74, 0.87)" }}>
              Evaluate project success by measuring adherence to timelines, ensuring timely completion of milestones and deliverables.
            </p>
            <hr className='mt-3' style={{ width: "100%", color: 'f0f0f0', backgroundColor: 'f0f0f0', height: 0.5 }} />

            
              <button className='mt-4 mb-4 flex items-center justify-center' style={{
                width: '100px',
                height: '23px', // Adjusted height for better visibility
                backgroundColor: 'black',
                color: 'white',
                borderTopLeftRadius: '25px',
                borderBottomLeftRadius: '25px',
                borderTopRightRadius: '25px',
                borderBottomRightRadius: '25px',
                border: 'none',
                fontSize: "1rem",
                fontFamily: "Poppins",
              }}>
                View
              </button>
          

          </div>
          </Link>

          <Link to="/customer" style={{ textDecoration: 'none' , color: 'inherit' }}>
          <div style={{
         
            border:"0.5px solid black",
            background: '#f9f9f9',
            height: 'auto', // Use auto for flexible height
            width: '90%', // Use percentage for responsive width
            maxWidth: '320px', // Set a maximum width if needed
          }} className="flex flex-col justify-center items-center  mt-5 md:w-full w-full ml-8  card1 mb-4">

            <div className="w-full h-48 object-cover">
              <img src={Customer} alt="KPI" className="w-full h-full object-cover" />
            </div>

            <div className='mb-2 mt-4' style={{ fontSize: "1.5rem", fontFamily: "Poppins", fontWeight: "700" }}>
              <h1 className='text-center'>Customer Service</h1>
            </div>

            <p style={{ fontFamily: "Poppins", fontSize: "1rem" }} className='text-center mb-3'>3&nbsp;Function | 15 KPIs</p>
            <hr className='mb-3' style={{ width: "25%", color: 'pink', backgroundColor: 'pink', height: 2 }} />

            <p className='text-center p-3' style={{ fontFamily: "Poppins", fontSize: "1rem", color: "rgba(21, 35, 74, 0.87)"  }}>
              Measure customer contentment with products or services through a satisfaction rating, reflecting overall service quality.
            </p>
            <hr className='mt-3' style={{ width: "100%", color: 'f0f0f0', backgroundColor: 'f0f0f0', height: 0.5 }} />

            
              <button className='mt-4 mb-4 flex items-center justify-center' style={{
                width: '100px',
                height: '23px', // Adjusted height for better visibility
                backgroundColor: 'black',
                color: 'white',
                borderTopLeftRadius: '25px',
                borderBottomLeftRadius: '25px',
                borderTopRightRadius: '25px',
                borderBottomRightRadius: '25px',
                border: 'none',
                fontSize: "1rem",
                fontFamily: "Poppins",
              }}>
                View
              </button>
          

          </div>
          </Link>


          <Link to="/Marketing" style={{ textDecoration: 'none' , color: 'inherit' }}>
          <div style={{
        
            border:"0.5px solid black",
            background: '#f9f9f9',
            height: 'auto', // Use auto for flexible height
            width: '90%', // Use percentage for responsive width
            maxWidth: '320px', // Set a maximum width if needed
          }} className="flex flex-col justify-center items-center  mt-5 md:w-full w-full ml-8 card1 mb-4">

            <div className="w-full h-48 object-cover">
              <img src={selectkpiimg1} alt="KPI" className="w-full h-full object-cover" />
            </div>

            <div className='mb-2 mt-4' style={{ fontSize: "1.5rem", fontFamily: "Poppins", fontWeight: "700" }}>
              <h1 className='text-center'>Marketing</h1>
            </div>

            <p style={{ fontFamily: "Poppins", fontSize: "1rem" }} className='text-center mb-3'>3&nbsp;Function | 15 KPIs</p>
            <hr className='mb-3' style={{ width: "25%", color: 'pink', backgroundColor: 'pink', height: 2 }} />

            <p className='text-center p-3' style={{ fontFamily: "Poppins", fontSize: "1rem", color: "rgba(21, 35, 74, 0.87)" }}>
              Boost marketing impact with efficient conversion, low lead costs, strong brand presence, and data-driven decisions.
            </p>
            <hr className='mt-3' style={{ width: "100%", color: 'f0f0f0', backgroundColor: 'f0f0f0', height: 0.5 }} />

          
              <button className='mt-4 mb-4 flex items-center justify-center' style={{
                width: '100px',
                height: '23px', // Adjusted height for better visibility
                backgroundColor: 'black',
                color: 'white',
                borderTopLeftRadius: '25px',
                borderBottomLeftRadius: '25px',
                borderTopRightRadius: '25px',
                borderBottomRightRadius: '25px',
                border: 'none',
                fontSize: "1rem",
                fontFamily: "Poppins",
              }}>
                View
              </button>
           

          </div>
           </Link>


          {/* Repeat the same structure for the next three boxes... */}
          {/* <Link to="/Healthcare">
<SampleCard/>
</Link> */}
          {/* <section class="box-panel">
	<div class="widget-container">
		<div class="flip-box common-flip-style">
			<div class="box-front common-box-style" style={{ backgroundImage: 'url("https://images.pexels.com/photos/3747455/pexels-photo-3747455.jpeg?auto=compress&cs=tinysrgb&w=600")' }}>
				<div class="box-content-wrapper">
				<div class="box-content">
        <div className='mb-2' style={{ fontSize: "26px", fontFamily: "Poppins", fontWeight: "700" , color:"black"}}>
<h1 className='text-center'>HR</h1>
</div>
<p style={{ fontFamily: "Poppins", fontSize: "16px",color:"black" }} className='text-center mb-3'>2&nbsp;Function | 353 KPIs</p>

					</div> 
				</div>
			</div>
			<div class="box-back common-box-style box-bgi-effect">
				<div class="box-content-wrapper">
					<div class="box-content">
          <div className='' style={{ fontSize: "22px", fontFamily: "Poppins", fontWeight: "700"}}>
<h1 className='text-center'>HR</h1>
</div>

<p style={{ fontFamily: "Poppins", fontSize: "16px" }} className='text-center p-1'>&nbsp;<p>KPIs :</p> Employee turnover rate , Time-to-fill vacancies, Training effectiveness, </p>

					</div>
				</div>
			</div>
		</div>
	</div>
</section>


<section class="box-panel">
	<div class="widget-container">
		<div class="flip-box common-flip-style">
			<div class="box-front common-box-style" style={{ backgroundImage: 'url("https://images.pexels.com/photos/351264/pexels-photo-351264.jpeg?auto=compress&cs=tinysrgb&w=600")' }}>
				<div class="box-content-wrapper">
				<div class="box-content">
        <div className='mb-2' style={{ fontSize: "26px", fontFamily: "Poppins", fontWeight: "700" , color:"black"}}>
<h1 className='text-center'>Finance</h1>
</div>
<p style={{ fontFamily: "Poppins", fontSize: "16px",color:"black" }} className='text-center mb-3'>2&nbsp;Function | 353 KPIs</p>

					</div> 
				</div>
			</div>
			<div class="box-back common-box-style box-bgi-effect">
				<div class="box-content-wrapper">
					<div class="box-content">
          <div className='' style={{ fontSize: "22px", fontFamily: "Poppins", fontWeight: "700"}}>
<h1 className='text-center'>Finance</h1>
</div>

<p style={{ fontFamily: "Poppins", fontSize: "16px" }} className='text-center p-1'>&nbsp;<p>KPIs :</p> Employee turnover rate , Time-to-fill vacancies, Training effectiveness, Employee satisfaction, Recruitment cost per hire.</p>

					</div>
				</div>
			</div>
		</div>
	</div>
</section>


<section class="box-panel">
	<div class="widget-container">
		<div class="flip-box common-flip-style">
			<div class="box-front common-box-style" style={{ backgroundImage: 'url("https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=600")' }}>
				<div class="box-content-wrapper">
				<div class="box-content">
        <div className='mb-2' style={{ fontSize: "26px", fontFamily: "Poppins", fontWeight: "700" , color:"black"}}>
<h1 className='text-center'>Sales</h1>
</div>
<p style={{ fontFamily: "Poppins", fontSize: "16px",color:"black" }} className='text-center mb-3'>2&nbsp;Function | 353 KPIs</p>

					</div> 
				</div>
			</div>
			<div class="box-back common-box-style box-bgi-effect">
				<div class="box-content-wrapper">
					<div class="box-content">
          <div className='' style={{ fontSize: "22px", fontFamily: "Poppins", fontWeight: "700"}}>
<h1 className='text-center'>Customer Service</h1>
</div>

<p style={{ fontFamily: "Poppins", fontSize: "16px" }} className='text-center p-1'>&nbsp;<p>KPIs :</p> Employee turnover rate , Time-to-fill vacancies, Training effectiveness, Employee satisfaction, Recruitment cost per hire.</p>

					</div>
				</div>
			</div>
		</div>
	</div>
</section>


<section class="box-panel">
	<div class="widget-container">
		<div class="flip-box common-flip-style">
			<div class="box-front common-box-style" style={{ backgroundImage: 'url("https://images.pexels.com/photos/270669/pexels-photo-270669.jpeg?auto=compress&cs=tinysrgb&w=600")' }}>
				<div class="box-content-wrapper">
				<div class="box-content">
        <div className='mb-2' style={{ fontSize: "26px", fontFamily: "Poppins", fontWeight: "700" , color:"black"}}>
<h1 className='text-center'>IT </h1>
</div>
<p style={{ fontFamily: "Poppins", fontSize: "16px",color:"black" }} className='text-center mb-3'>2&nbsp;Function | 353 KPIs</p>

					</div> 
				</div>
			</div>
			<div class="box-back common-box-style box-bgi-effect">
				<div class="box-content-wrapper">
					<div class="box-content">
          <div className='' style={{ fontSize: "22px", fontFamily: "Poppins", fontWeight: "700"}}>
<h1 className='text-center'>IT</h1>
</div>

<p style={{ fontFamily: "Poppins", fontSize: "16px" }} className='text-center p-1'>&nbsp;<p>KPIs :</p> Employee turnover rate , Time-to-fill vacancies, Training effectiveness, Employee satisfaction, Recruitment cost per hire.</p>

					</div>
				</div>
			</div>
		</div>
	</div>
</section>



<section class="box-panel">
	<div class="widget-container">
		<div class="flip-box common-flip-style">
			<div class="box-front common-box-style" style={{ backgroundImage: 'url("https://images.pexels.com/photos/1181719/pexels-photo-1181719.jpeg?auto=compress&cs=tinysrgb&w=600")' }}>
				<div class="box-content-wrapper">
				<div class="box-content">
        <div className='mb-2' style={{ fontSize: "26px", fontFamily: "Poppins", fontWeight: "700" , color:"black"}}>
<h1 className='text-center'>Communications</h1>
</div>
<p style={{ fontFamily: "Poppins", fontSize: "16px",color:"black" }} className='text-center mb-3'>2&nbsp;Function | 353 KPIs</p>

					</div> 
				</div>
			</div>
			<div class="box-back common-box-style box-bgi-effect">
				<div class="box-content-wrapper">
					<div class="box-content">
          <div className='' style={{ fontSize: "22px", fontFamily: "Poppins", fontWeight: "700"}}>
<h1 className='text-center'>Communications</h1>
</div>

<p style={{ fontFamily: "Poppins", fontSize: "16px" }} className='text-center p-1'>&nbsp;<p>KPIs :</p> Employee turnover rate , Time-to-fill vacancies, Training effectiveness, Employee satisfaction, Recruitment cost per hire.</p>

					</div>
				</div>
			</div>
		</div>
	</div>
</section>


<section class="box-panel">
	<div class="widget-container">
		<div class="flip-box common-flip-style">
			<div class="box-front common-box-style" style={{ backgroundImage: 'url("https://images.pexels.com/photos/8937118/pexels-photo-8937118.jpeg?auto=compress&cs=tinysrgb&w=600")' }}>
				<div class="box-content-wrapper">
				<div class="box-content">
        <div className='mb-2' style={{ fontSize: "26px", fontFamily: "Poppins", fontWeight: "700" , color:"black"}}>
<h1 className='text-center'>Operation
</h1>
</div>
<p style={{ fontFamily: "Poppins", fontSize: "16px",color:"black" }} className='text-center mb-3'>2&nbsp;Function | 353 KPIs</p>

					</div> 
				</div>
			</div>
			<div class="box-back common-box-style box-bgi-effect">
				<div class="box-content-wrapper">
					<div class="box-content">
          <div className='' style={{ fontSize: "22px", fontFamily: "Poppins", fontWeight: "700"}}>
<h1 className='text-center'>Operation
</h1>
</div>

<p style={{ fontFamily: "Poppins", fontSize: "16px" }} className='text-center p-1'>&nbsp;<p>KPIs :</p> Employee turnover rate , Time-to-fill vacancies, Training effectiveness, Employee satisfaction, Recruitment cost per hire.</p>

					</div>
				</div>
			</div>
		</div>
	</div>
</section>



<section class="box-panel">
	<div class="widget-container">
		<div class="flip-box common-flip-style">
			<div class="box-front common-box-style" style={{ backgroundImage: 'url("https://images.pexels.com/photos/7430339/pexels-photo-7430339.jpeg?auto=compress&cs=tinysrgb&w=600")' }}>
				<div class="box-content-wrapper">
				<div class="box-content">
        <div className='mb-2' style={{ fontSize: "26px", fontFamily: "Poppins", fontWeight: "700" , color:"black"}}>
<h1 className='text-center'>Project Management</h1>
</div>
<p style={{ fontFamily: "Poppins", fontSize: "16px",color:"black" }} className='text-center mb-3'>2&nbsp;Function | 353 KPIs</p>

					</div> 
				</div>
			</div>
			<div class="box-back common-box-style box-bgi-effect">
				<div class="box-content-wrapper">
					<div class="box-content">
          <div className='' style={{ fontSize: "21px", fontFamily: "Poppins", fontWeight: "700"}}>
<h1 className='text-center'>Project Management</h1>
</div>

<p style={{ fontFamily: "Poppins", fontSize: "16px" }} className='text-center p-1'>&nbsp;<p>KPIs :</p> Employee turnover rate , Time-to-fill vacancies, Training effectiveness, Employee satisfaction, Recruitment cost per hire.</p>

					</div>
				</div>
			</div>
		</div>
	</div>
</section>



<section class="box-panel">
	<div class="widget-container">
		<div class="flip-box common-flip-style">
			<div class="box-front common-box-style" style={{ backgroundImage: 'url("https://images.pexels.com/photos/7682208/pexels-photo-7682208.jpeg?auto=compress&cs=tinysrgb&w=600")' }}>
				<div class="box-content-wrapper">
				<div class="box-content">
        <div className='mb-2' style={{ fontSize: "26px", fontFamily: "Poppins", fontWeight: "700" , color:"black"}}>
<h1 className='text-center'>Customer service</h1>
</div>
<p style={{ fontFamily: "Poppins", fontSize: "16px",color:"black" }} className='text-center mb-3'>2&nbsp;Function | 353 KPIs</p>

					</div> 
				</div>
			</div>
			<div class="box-back common-box-style box-bgi-effect">
				<div class="box-content-wrapper">
					<div class="box-content">
          <div className='' style={{ fontSize: "21px", fontFamily: "Poppins", fontWeight: "700"}}>
<h1 className='text-center'>Customer service</h1>
</div>

<p style={{ fontFamily: "Poppins", fontSize: "16px" }} className='text-center p-1'>&nbsp;<p>KPIs :</p> Employee turnover rate , Time-to-fill vacancies, Training effectiveness, Employee satisfaction, Recruitment cost per hire.</p>

					</div>
				</div>
			</div>
		</div>
	</div>
</section> */}
        </div>








        {/* <div style={{width:"260px"}} className='ml-4 justify-center items-center'>
<img-div className="w-full h-full object-cover">
<img src={selectkpiimg1} />
</img-div>

<text-div>
<div className='mb-2 mt-4' style={{ fontSize: "26px", fontFamily: "Poppins", fontWeight: "700" }}>
<h1 className='text-center'>HR</h1>
</div>

<p style={{ fontFamily: "Poppins", fontSize: "16px" }} className='text-center mb-3'>2&nbsp;Function | 353 KPIs</p>

<p className='text-center'> jdjdj djfjjfj fjjdhhhje jdjdjjd jdjdjdj djdjjjdjd jdjdjdjd jdjdjdjd jddjdjje djdjjd ejjmd jejden</p>

<br cstyle={{color:"black"}}/>

</text-div>
<btn-div>
  <button style={{ textAlign: 'center' }}>Views</button>
</btn-div>

</div> */}





      </div>



    </>








  )
}

export default SelectKpi  