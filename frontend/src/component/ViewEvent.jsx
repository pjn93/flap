import React, {useEffect, useState} from 'react'
import DataTable from 'react-data-table-component'
import {Link} from 'react-router-dom'
import moment from "moment/moment";
import ADD from '../images/add.png'
import axios from 'axios';
import Header from './Header';

const ViewEvent = () => {
  const [id, setId] = useState('');
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [filterEvents, setFilterEvents] = useState("")

  const customStyles = {
      headCells: {
        style:{
          fontSize: '16px',
          fontWeight: '600',
          textTransform: 'uppercase',
          backgroundColor: 'black',
          color:'#fff',
                    }
      }
  };

  const columns =[
    {
     name: "Event Name",
     selector: (row) => row.eventname, 
     sortable: true,
    },
    {
      name: "Start Time",
     selector: (row) => (<b>{moment(row.starttime).format(("MMMM Do YYYY, h:mm:ss a"))}</b>),
     sortable: true,
    },
    {
      name: " End Time",
      selector: (row) => (<b>{moment(row.endtime).format(("MMMM Do YYYY, h:mm:ss a"))}</b>),
      sortable: true,
     },
    {
      name: "Location",
      selector: (row) => row.city,
      sortable: true,
    },
    {
      name: "Description",
      selector: (row) => row.description,
      sortable: true, 
    },
    {
      name: "Category",
      selector: (row) => row.category,
      sortable: true,
    },
    {
      name: "Banner Image",
      selector: (row) => <img src={row.bannerimage} alt='img' style={{height:'80px', width:'80px'}}/>,
      sortable: true, 
    }
  ];

   
const fetchData = async () => {
  const uId = sessionStorage.getItem('uid'); // Retrieve retailer ID from sessionStorage
  console.log(uId);

  if (uId) {
    try {
      const response = await axios.post(`http://localhost:9000/api/viewnews?uid=${uId}`);
      setData(response.data);
      console.log(id)
      setFilterEvents(response.data);
    } catch (error) {
      console.log(error);
    }
  }
};

useEffect(() => {
  const uId = sessionStorage.getItem('uid'); // Retrieve UID from sessionStorage
  if (uId) {
    setId(uId); // Update the state with UID if needed
    fetchData();
  }
}, []);

useEffect(()=>{
    const result = data.filter((item) => { return item.city.toLowerCase().match(search.toLowerCase()) || item.category.toLowerCase().match(search.toLowerCase()) ||
    item.starttime.toLowerCase().match(search.toLowerCase()) });
    setFilterEvents(result);
}, [search])

  return (
    <>
    <Header/>
    <div  
        style={{ backgroundColor:'#e3e1de', width:'100%', padding: "50px 10%", height:'100vh', marginTop:'50px'}}
    >
    <div style={{display:'flex', justifyContent:'space-between'}}>
    <h3>UpComing Events</h3>
    <Link to='/addevent'><img src={ADD} alt='img2' style={{height:'40px', width:'40px'}}/></Link>
    
    </div>
   
       <DataTable
       
       customStyles={customStyles}
        columns={columns}
        data={filterEvents}
        fixedHeader
        fixedHeaderScrollHeight='400px'
        selectableRows
        selectableRowsHighlight
        highlightonhover
        subHeader
        
        subHeaderComponent={
          <>
          
          <input
           type='text' 
           placeholder='search here'
            className='w-25 form-control'
           value={search}
           onChange={(e) => setSearch(e.target.value)}
           />
           </>
        }
pagination
      />
      </div>
      </>
  )
}

export default ViewEvent
