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

var timesheetHTML
function ProviderView(){
  const [timesheet, setTimesheet] = useState([]);
 

  useEffect(() => {
    const fetchUserProfile = async () => {
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
    fetchUserProfile();
  },[]);  



 if(timesheet.length != 0)
 {
    console.log("There is a time Sheet",timesheet);
    timesheetHTML = timesheet.map((timetable, id) =>{
      return (<Col lg = {4} key={id}>
        <Row>
          <Col>{timetable.weekday}</Col>
          <Col>{timetable.start_time}</Col>
          <Col>{timetable.end_time}</Col>
        </Row></Col>);}
        );
  } else{
      timesheetHTML="";
      console.log("No time Sheet",timesheet)

    }
  
  

 


  // const [date,setDate]=useState(new Date());
  // const onChange= date =>{
  // setDate(date);
  // setDefaultLocale('enUS');
  // }
  // const onSubmit = event => {
  //   event.preventDefault();
  //   alert(date)
  // }
  return(
    <div className="calendarApp mt-5">

      <h1>Service provider main page</h1>
      <Col>{timesheetHTML}</Col>
       
            {/* <DatePicker
      selected={startTime}
      onChange={(date) => setStartTime(date)}
      showTimeSelect
      showTimeSelectOnly
      timeIntervals={15}
      timeCaption="Time"
      dateFormat="h:mm aa"
    />
     <DatePicker
      selected={endTime}
      onChange={(date) => setEndTime(date)}
      showTimeSelect
      showTimeSelectOnly
      timeIntervals={15}
      timeCaption="Time"
      dateFormat="h:mm aa"
    /> */}
              
      </div>
  );
}



export default ProviderView