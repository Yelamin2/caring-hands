import { format, compareAsc } from 'date-fns'
import React from 'react';
import { useState, useEffect } from 'react';
import { getDate } from 'date-fns';
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale, setDefaultLocale } from  "react-datepicker";
import enUS from 'date-fns/locale/en-US';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import { useOutletContext } from 'react-router-dom';

var timesheetHTML;
let customersMessagesHTML;
function ProviderView(){
  const [timesheet, setTimesheet] = useState([]);
  const [customersMessages, setCustomersMessages] = useState([])

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
    
    const fetchMessages= async () => {
      const response2 = await fetch("/api/v1/provider/messages/");
      if (!response2.ok){
          if(!response2.status === 404){
              throw Error("Oops. Something went wrong!");
          }
          return;
      }

      const data = await response2.json();
      setCustomersMessages([...data]);
                  
  };
  fetchMessages();
  },[]);  



 if(timesheet.length != 0)
 {
    // console.log("There is a time Sheet",timesheet);
    timesheetHTML = timesheet.map((timetable, id) =>{
      // if(timetable.company_name_details.id==user.id){
      return (<Col lg = {6} key={id}>
        <Row>
          <Col>{timetable.user_details.first_name} {timetable.user_details.last_name}</Col>
          <Col>{timetable.weekday}</Col>
          <Col>Start : {getDate(timetable.start_time)}</Col>
          <Col>End : {timetable.end_time}</Col>
        </Row></Col>);}
        // }
        );
  } else{
      timesheetHTML="";
      // console.log("No time Sheet",timesheet)

    }
    if(customersMessages.length != 0)
    {
       // console.log("There is a time Sheet",timesheet);
       customersMessagesHTML = customersMessages.map((messages, id) =>{
         // if(timetable.company_name_details.id==user.id){
         return (<Col lg = {6} key={id}>
           <Row style={{minHeight:80, marginTop:40, backgroundColor:'AliceBlue'}}>
             <Row lg={4} >Message from : {messages.client_details.first_name} {messages.client_details.last_name}</Row>
             <Row lg={4}>Received on: {messages.time}</Row>
             <Row lg={4}>{messages.message}</Row>
            
           </Row></Col>);}
           // }
           );
     } else{
         timesheetHTML="";
         // console.log("No time Sheet",timesheet)
   
       }
  

  return(
    <div className="calendarApp mt-5">

      <h1>Service provider main page</h1>
      <Col>{timesheetHTML}</Col>
      <Col>{customersMessagesHTML}</Col>
       
   
      </div>
  );
}



export default ProviderView