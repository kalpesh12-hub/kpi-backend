




import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';

import { CSVLink } from 'react-csv';
import { Button } from '@mui/material';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from "react-router-dom";
import axios from 'axios';

const OperationDataTable = ({ category, subcategory }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log('Category:', category);
        const response = await axios.get(`https://kp-backend.onrender.com/api/getOperations/${category}`);
        const newData = response.data.map((item, index) => ({
          ...item,
          sr_no: index + 1, // Assuming the array is 0-indexed
        }));
        setData(newData || []);
      } catch (error) {
        console.error('Error fetching data:', error);
        console.log('Error details:', error.response); // Log the error details
      }
    };

    fetchData();
  }, [category, subcategory]);

  const columns = [
    { field: 'sr_no', headerName: 'ID', width: 70 },
    { field: 'kpi_name', headerName: 'Name', width: 200,
    renderCell: (params) => (
      <div style={{ whiteSpace: 'pre-line', overflow: 'hidden', textOverflow: 'ellipsis' }}>
        {params.value}
      </div>
    ), },
    {
      field: 'description',
      headerName: 'Description',
      width: 400,
      renderCell: (params) => (
        <div style={{ whiteSpace: 'pre-line', overflow: 'hidden', textOverflow: 'ellipsis' }}>
          {params.value}
        </div>
      ),
    },
    { field: 'func', headerName: 'Functions', width: 200,
    renderCell: (params) => (
      <div style={{ whiteSpace: 'pre-line', overflow: 'hidden', textOverflow: 'ellipsis' }}>
        {params.row.function}
      </div>
    ),},
   
    {field: 'calculation', headerName:'Calculation' , width:400,
    renderCell: (params) => (
      <div style={{ whiteSpace: 'pre-line', overflow: 'hidden', textOverflow: 'ellipsis' }}>
        {params.value}
      </div>
    ),},
    {field: 'subfunction' ,  headerName:'Subfunctions',width:200,
    renderCell: (params) => (
      <div style={{ whiteSpace: 'pre-line', overflow: 'hidden', textOverflow: 'ellipsis' }}>
        {params.value}
      </div>
    ),}
    ];

    const csvData = data.map(({ sr_no, kpi_name, description, func , calculation ,subfunction }) => ({
      sr_no,
      kpi_name,      
      description,
      func,
      calculation,
      subfunction
    }));

  return (
    <div>

<div className="flex justify-end mb-4 mt-3 mr-3">



  <Button variant="contained" color="success">
    {/* Your second button content */}
    <CSVLink
      style={{ textDecoration: 'none', color: 'White', cursor: 'pointer' }}
      data={csvData}
      filename={`data_${category}.csv`}
    >
      Export to CSV
    </CSVLink>
  </Button>
</div>
        
    <conatiner style={{ height: 400, width: '98%' }}>
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={5}
        disableSelectionOnClick
        checkboxSelection
        rowHeight={115}
        getRowId={(row) => row.sr_no}
      />
    </conatiner>

    <div style={{
  marginBottom: "20px"
}}>
  <h1 className="text-center mt-3" style={{fontSize:'28px', fontWeight:"700", LineHeight:"1.2" , fontFamily: "Poppins", textAlign:"center", color:"#D10000"}}>Share Your KPI Success!</h1>
  <p className="text-center mt-3 p-2" style={{fontSize:"18px" , lineHeight:"29px", color:"rgba(21, 35, 74, 0.87)", fontWeight:"500",textAlign:"center", fontFamily: "Poppins"}}>Be part of our success story! Share your Key Performance Indicators with us—whether it's a business win, personal achievement, or project milestone. Your insights inspire and contribute to our collective success.</p>
<div className='text-center mt-3'  >

<Link to="/Send-Kpi">
  <Button variant="contained" color="success" className="mr-4">
  Submit Your KPIs Now
  </Button>
  </Link>
</div>

</div>
    </div>
  );
};

export default OperationDataTable;
