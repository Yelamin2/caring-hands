import React from 'react';
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-datepicker/dist/react-datepicker.css";
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import { useOutletContext } from 'react-router-dom';
import { Button } from 'bootstrap';
import Cookies from "js-cookie";


var timesheetHTML

function CustomerVisits(){
  const [timesheet, setTimesheet] = useState([]);
  const [isEditing, setIsEditing] = useState(null);
  const [timeEdit, setTimeEdit]=useState();

  const {user} =useOutletContext();

  

  const handleEdit= (e) =>{
    // console.log(e.target.value);
    // setNotEditing((prevState) => ({
    //     ...prevState,
    //     disabled:'true'}
       
        
    //   ));
    //   console.log(notEditing.disabled);
  }

  const saveChanges = async (e) => {
    // id of the timesheet you're targeting is isEditing
    // updated times values are timeEdit values
    // process a patch request
    let editing= e.target.value;
    const options = {
        method: "PATCH" ,
        headers: {
            "Content-Type": "application/json; charset=UTF-8 ",
            "X-CSRFToken": Cookies.get('csrftoken'),      
        },
        body: JSON.stringify(timeEdit),
        
    };
    const response = await fetch(`/api/v1/visits/visits/${editing}/`,options);
   
    if (!response.ok){
        if(!response.status === 404){
            throw Error("Oops. Something went wrong!");
        }
      return;
    }

    const data = await response.json();
    const updatedTimesheet = [...timesheet];
    const index = updatedTimesheet.findIndex(item => item.id === data.id);
    updatedTimesheet[index].start_time = data.start_time;
    updatedTimesheet[index].end_time = data.end_time;
    setTimesheet(updatedTimesheet);
    setIsEditing(null);

    

  }

  const handleTime= (e) => {
    const { name, value } = e.target;
    setTimeEdit((prevState) => ({
      ...prevState,
      [name]: value,
    
      
    }));
    console.log(timeEdit);
  };

  
    

  const handleDelete = async (e) => {
    let id= e.target.value;
    const options = {
        method: "DELETE" ,
        headers: {
            "Content-Type": "application/json; charset=UTF-8 ",
            "X-CSRFToken": Cookies.get('csrftoken'),      
        },
        
    };
    const response = await fetch(`/api/v1/visits/visits/${id}/`,options);
    if (!response.ok){
        if(!response.status === 404){
            throw Error("Oops. Something went wrong!");
        }
        return;
    }
    
    

                
};
  
 

  useEffect(() => {
    const fetchTimesheet= async () => {
        const response = await fetch("/api/v1/visits/visits/");
        if (!response.ok){
            if(!response.status === 404){
                throw Error("Oops. Something went wrong!");
            }
            return;
        }

        const data = await response.json();
        setTimesheet([...data]);
                    
    };
    fetchTimesheet();
  },[]);  



 if(timesheet.length != 0)
 {
    // console.log("There is a time Sheet",timesheet);
    timesheetHTML = timesheet.map((timetable) =>{
      // if(timetable.company_name_details.id==user.id){
      return (<Col lg = {12} key={timetable.id}>
        {/* <Row style={{minHeight:60, marginTop:10, backgroundColor:'AliceBlue',alignItems:"center", borderRadius:15 }}> */}
          {/* <Col lg = {4} xs={12}>
            {timetable.company_name_details.company_name}
            </Col>
          <Col lg = {2} xs={12}>{timetable.weekday}</Col>
          <Col lg = {2} xs={6} >Start : {timetable.start_time}</Col>
          <Col lg = {2} xs={6}>End : {timetable.end_time}</Col> */}
         {/* <Col lg = {1} xs={3}>  */}
         

         {isEditing === timetable.id ? (
            <>
        <Row style={{minHeight:60, marginTop:10, backgroundColor:'AliceBlue',alignItems:"center",fontWeight:800, borderRadius:15 }}>
          
          <Col lg = {3} xs={12}>
            {timetable.company_name_details.company_name}
            </Col>
          <Col lg = {2} xs={12}>{timetable.weekday}</Col>
          <Col lg = {2} xs={6} >Start :  <input type="time"  name="start_time"
        step="900" onChange={handleTime} required/></Col>
          <Col lg = {2} xs={6}>End : <input type="time"  name="end_time"
        step="900" onChange={handleTime} required/></Col>
         <Col lg = {2} xs={3}> 
             <button  
            style={{ width: '8rem', 
            alignItems: "center" ,
            borderRadius: 5, 
            fontWeight:600,
            backgroundColor:"LightSkyBlue"}} 
            type="submit"
            value={timetable.id}
            onClick={saveChanges}>
            Save changes
          </button>
          </Col>
          <Col lg = {1} xs={3}>
             <button  
             style={{ width: '4rem', 
             alignItems: "center" ,
             borderRadius: 5,
             fontWeight:600, 
             backgroundColor:"LightSkyBlue"}} 
             type="submit"
             value={timetable.id}
             onClick={() => setIsEditing(null)}>
             Cancel
           </button>
           </Col>
           </Row>
           </>
           
         ): (
            <Row style={{minHeight:60, marginTop:10, backgroundColor:'AliceBlue',alignItems:"center",fontWeight:800 ,borderRadius:15 }}>
          <Col lg = {4} xs={12}>
            {timetable.company_name_details.company_name}
            </Col>
          <Col lg = {2} xs={12}>{timetable.weekday}</Col>
          <Col lg = {2} xs={6} >Start : {timetable.start_time}</Col>
          <Col lg = {2} xs={6}>End : {timetable.end_time}</Col>
         <Col lg = {1} xs={3}> 
            <button  
            style={{ width: '4rem', 
            alignItems: "center" ,
            fontWeight:600,
            borderRadius: 5, 
            backgroundColor:"LightSkyBlue"}} 
            type="submit"
            value={timetable.id}
            onClick={() => setIsEditing(timetable.id)}>
            Edit
          </button></Col>
          <Col lg = {1} xs={3}> <button  
            style={{ width: '4rem', 
            alignItems: "center" ,
            borderRadius: 5, 
            fontWeight:600,
            backgroundColor:"Red"}} 
            type="submit"
            value={timetable.id}
            onClick={handleDelete}>
            Delete
          </button></Col></Row>
         )}
         
          
          
          
          {/* </Col> */}
         
         
        {/* </Row> */}
        </Col>);}
        // }
        );
  } else{
      timesheetHTML="";
      // console.log("No time Sheet",timesheet)

    }
  

  return(
    <div className="calendarApp mt-5">

      <h1 style={{textAlign:"center", color:'MintCream', fontSize:50, padding:20}}>My scheduled visits</h1>
      <Col>{timesheetHTML}</Col>
       
   
      </div>
  );
}



export default CustomerVisits