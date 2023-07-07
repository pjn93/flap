import axios from 'axios';
import React, {useState} from 'react';
import { useNavigate} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './product.css'
import Header from './Header';
  
export default function AddEvent() {
  const navigate = useNavigate();
  const [uid, setUid] = useState("")
  const [eventname, setEventname] = useState("")
  const [starttime, setStarttime] = useState("")
  const [endtime, setEndtime] = useState("")
  const [city, setCity] = useState("")
  const [description, setDescription] = useState("")
  const [category, setCategory] = useState("")
  const [bannerimage, setBannerimage] = useState("")
  let [sst, setSst] = useState()
 const handleImage = (e) =>{
    setBannerimage(e.target.files[0])
}

  const postdata = async(e) =>{
    e.preventDefault();
    const formData = new FormData()
    formData.append('eventname', eventname);
    formData.append('starttime', starttime );
    formData.append('endtime', endtime);
    formData.append('city', city);
    formData.append('description', description);
    formData.append('category', category);
    formData.append('bannerimage', bannerimage);
    const configs ={
      "content-Type": "multiple/form-data"
  }
  console.log(uid, "ss")

  setEventname("");
  setStarttime("");
setEndtime("");
  setCity("");
  setDescription("");
  setCategory("");
  setBannerimage("")

  let apiData = await axios.post(`http://localhost:9000/api/createnews?uid=${sessionStorage.getItem("uid")}`, formData, configs);
  console.log(sessionStorage.getItem("uid"))
  console.log(apiData.status);
  console.log(apiData, "apidata");
  if (apiData.status === 200) {
    setSst("Data Inserted");
            navigate("/viewevent");   

  } else {
    setSst("Try again!!!");
  }
  
};


    return (
      <>
      <Header/>
      <div style={{marginTop:'100px'}}>
      <div className="bg_img"></div>
<div className="form_wrapper">
  <div className="form_container">
    <div className="title_container">
      <h2>Add Event</h2>
    </div>
    <form onSubmit={postdata}>
      <div className="row clearfix">
      
          <div className="col_half">
          <label htmlFor='eventname'>Event Name</label>
            <input type="text" name="eventname" placeholder="musicana"  
            id='eventname' onChange={(e) => setEventname(e.target.value)} value={eventname} required />
          </div>
          <div className="col_half">
          <label htmlFor='city'>Location</label>
            <input type="text" name="city" style={{height:'42px'}} placeholder="Indore" id='city' onChange={(e) => setCity(e.target.value)} value={city}  />
          
        </div>
        </div>

        <div className="row clearfix" >
     

        <div classname="col_half" style={{width:'230px'}}>
          <label htmlFor='starttime'>Start Time</label>
            <input type="datetime-local" name="starttime" id='starttime'  style={{height:'40px'}} onChange={(e) => setStarttime(e.target.value)} value={starttime}/>
        </div>
        <div classname="col_half" style={{width:'230px'}}>
          <label htmlFor='endtime'>End Time</label>
            <input type="datetime-local" name="endtime" id='endtime'  style={{height:'40px'}} onChange={(e) => setEndtime(e.target.value)} value={endtime}/>
        </div>
      </div>

      <div className="row clearfix">
      
    
          <label htmlFor='description'>Description</label>
            <input type="text" name="description" placeholder="About event" id='description' onChange={(e) => setDescription(e.target.value)} value={description} required />
 
      </div>
      
      <div className="row clearfix">
      <div className="col_half">
          <label htmlFor='catgory'>Category</label>
            <input type="text" name='catgory' placeholder="Music" id='catgory' onChange={(e) => setCategory(e.target.value)} value={category} required />
        </div>

        <div className="col_half">
          <label htmlFor='bannerimage'>Image</label>
            <input type="file" name="bannerimage" id='bannerimage'  onChange={handleImage} defaultValue={bannerimage} style={{height:'43px', paddingLeft:'10px', paddingTop:'6px'}}/>
      </div>
      </div>
      <p>{sst}</p>
      <input className="button" type="submit" value="Sumbit" />
    </form>
  </div>
</div>
    </div>
    </>
    );
  }
