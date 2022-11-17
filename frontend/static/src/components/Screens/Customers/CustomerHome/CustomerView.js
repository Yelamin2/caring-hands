import React from "react";
import { useState, useEffect } from "react";
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from "react-bootstrap/esm/Row";
import ThemeProvider from 'react-bootstrap/ThemeProvider';
import { format, compareAsc } from 'date-fns';
import Button from "react-bootstrap/esm/Button";
import Container from 'react-bootstrap/Container';
import Cookies from "js-cookie";
import { handleError } from "../../../../utils/errorHandler";
import { useOutletContext } from "react-router-dom";

const weekDays = ["Monday", 'Tuesday', 'Wednesday', 'Thursday','Friday', 'Saturday', 'Sunday'];
const INIT_VISIT=[{Monday:{}, Tuesday:{}, Wednesday:{}, Thursday:{},Friday:{}, Saturday:{}, Sunday:{}}]
var timesheetHTML;

function CustomerView({company_name, notes}){
  
  const [timeSelect, setTimeSelect] = useState([]);
  const option= [];
  const { user} = useOutletContext();
  const [timesheet, setTimesheet] = useState([]);
  const [customerMessage, setCustomerMessage]=useState([]);


  const [schedule, setSchedule]= useState([]);
  // providerList.map((provider, index) =>(

  const handleSubmit = async (e) => {
    e.preventDefault();
    setCustomerMessage((customerMessage) => ({
      ...customerMessage,
      notes: notes,
      client: user.id,
      sender:0,
      user:(company_name),
      message_from:(user.first_name +" "+ user.last_name),
  }));
    
  
    const options2 = {
      // `${user ? "PUT" : "POST"}`
      method: "POST" ,
      headers: {
          "Content-Type": "application/json; charset=UTF-8 ",
          "X-CSRFToken": Cookies.get('csrftoken'),   
         
      },
      body: JSON.stringify(customerMessage),
    };
    const response2 = await fetch("/api/v1/provider/messages/", options2).catch(
        handleError
      );
      if (!response.ok) {
        throw new Error("Oops. Something went wrong!");
      } else {
        const data2 = await response2.json();
        console.log("MY DATA",data2);
        Cookies.set("Authorization", `Token ${data2.key}`);
        
      }
      const options = {
        // `${user ? "PUT" : "POST"}`
        method: "POST" ,
        headers: {
            "Content-Type": "application/json; charset=UTF-8 ",
            "X-CSRFToken": Cookies.get('csrftoken'),   
           
        },
        body: JSON.stringify(schedule),
      };
      const response = await fetch("/api/v1/visits/visits/", options).catch(
        handleError
      );
      if (!response.ok) {
        throw new Error("Oops. Something went wrong!");
      } else {
        const data = await response.json();
        console.log("MY DATA",data);
        Cookies.set("Authorization", `Token ${data.key}`);
        
      };

    console.log(schedule,"OPTIONS",option ,options2);};

 

  const handleTime = (e) => {
    const weekday = e.target.dataset.weekday;
    const index = schedule.findIndex(obj => obj.weekday === weekday);
    if(index !== -1) {
      const scheduleCopy = [...schedule];
      scheduleCopy[index][e.target.name] = e.target.value;
      console.log("ScheduleCopy ::",scheduleCopy);
    }
   
  }
  const handleChecked = (e) => {
    if(e.target.checked){
      console.log(e.target.value );
    
  }}
  
  const handleDay = (e) => {
    const weekday = e.target.name; // e.g. 'Monday'
    const scheduleCopy = [...schedule];
    const indexOfWeekday = schedule.findIndex(i => i.weekday === weekday);
    if(indexOfWeekday !== -1) {
      scheduleCopy.splice(indexOfWeekday, 1);
       
    } else {
      scheduleCopy.push({
        weekday: `${weekday}`,
        company_name,
        user:user.id,
   
      });
    }
    setSchedule(scheduleCopy);
   
   
  }

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
      if(timetable.user.id==user.id){
      return (<Col lg = {12} key={id}>
        <Row>
          <Col>{timetable.company_name.company_name}</Col>
          <Col>{timetable.weekday}</Col>
          <Col>Start : {timetable.start_time}</Col>
          <Col>End : {timetable.end_time}</Col>
        </Row></Col>);};}
        );
  } else{
      timesheetHTML="";
      // console.log("No time Sheet",timesheet)

    } 
    console.log(notes);


  const displayHTML =  weekDays.map((weekday, index)=> (
    <Form.Group controlId="formGridState" key={index}>
        <Row lg={6} sm={12}>
          <Col lg={2} sm={3}>
                <Form.Check
                label={weekday}
                value={weekday}
                name={weekday}
                type="checkbox"
                checked={schedule.findIndex(i => i.weekday === weekday) !== -1}
                onChange={handleDay}
                id={`2`}
                />
                </Col>

          <Col lg={3} sm={4} >
            <Row lg={12} sm={12} >
                <Col lg={6} xs={3}>
                <Form.Label>Start Time</Form.Label>
                </Col>
                <Col lg={4} xs={3}><input data-weekday={weekday} type="time" step='900' id="appt1" name="start_time"
                  onChange={handleTime} required disabled={schedule.findIndex(obj => obj.weekday === weekday) === -1}
                  /*{schedule.findIndex(obj => obj.day === day) === -1}*/
                  />
            
                </Col>
              </Row>
          </Col>
          <Col lg={1} sm={1}></Col>
          <Col lg={3} sm={4}>
            <Row lg={12} sm={12}>
                <Col lg={6} xs={3}>
                <Form.Label>End Time</Form.Label>
                </Col>
                <Col lg={4} xs={3}><input data-weekday={weekday} type="time" step='900' id="appt2" name="end_time"
                  onChange={handleTime} required disabled={schedule.findIndex(obj => obj.weekday === weekday) === -1}/>
                          
                </Col>
             </Row>
            </Col>
        </Row>
        </Form.Group>
  ))
// => minutes.map((minutes, index)=>(<p key={index}>{minutes}</p>))
  
  console.log("DISPLAY TIME",{displayHTML},"SCHEDULE",schedule, "Provider_ID", company_name );



  return(
  
    <> 
    <p></p>
      <ThemeProvider breakpoints={['lg',' md','xs']} miniBreakpoint="sm">
      <Container fluid >
        
      <Form  onSubmit={handleSubmit}>
        <Row 
        style={{ 
        backgroundColor: 'LightGoldenrodYellow'
       }}>
        {displayHTML}</Row>
        <Row></Row>
        <p>  </p>
        <Button  
            style={{ width: '6rem', 
            alignItems: "center" , 
            backgroundColor:"LightGreen"}} 
            type="submit">
            Submit
          </Button>
          <p> </p>
          <p> </p>
      </Form>
      <Row>
        {timesheetHTML}
      </Row>
       
   
      </Container>
      </ThemeProvider>
    </>
    )
}

export default CustomerView