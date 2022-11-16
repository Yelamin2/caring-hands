import { format, compareAsc } from 'date-fns'
import React from 'react';
import { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale, setDefaultLocale } from  "react-datepicker";
import enUS from 'date-fns/locale/en-US';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import { useOutletContext } from 'react-router-dom';

var timesheetHTML
function ProviderView(){
  const [timesheet, setTimesheet] = useState([]);

  const {user} =useOutletContext();
  
 

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
    timesheetHTML = timesheet.map((timetable, id) =>{
      if(timetable.company_name_details.id==user.id){
      return (<Col lg = {6} key={id}>
        <Row>
          <Col>{timetable.user_details.first_name} {timetable.user_details.last_name}</Col>
          <Col>{timetable.weekday}</Col>
          <Col>Start : {timetable.start_time}</Col>
          <Col>End : {timetable.end_time}</Col>
        </Row></Col>);};}
        );
  } else{
      timesheetHTML="";
      // console.log("No time Sheet",timesheet)

    }
  

  return(
    <div className="calendarApp mt-5">

      <h1>Service provider main page</h1>
      <Col>{timesheetHTML}</Col>
       
   
      </div>
  );
}



export default ProviderView