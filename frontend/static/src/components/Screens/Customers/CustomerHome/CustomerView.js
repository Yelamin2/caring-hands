import React from "react";
import { useState } from "react";
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from "react-bootstrap/esm/Row";
import ThemeProvider from 'react-bootstrap/ThemeProvider';
import { format, compareAsc } from 'date-fns';
import Button from "react-bootstrap/esm/Button";
import Container from 'react-bootstrap/Container';

const weekDays = ["Monday", 'Tuesday', 'Wednesday', 'Thursday','Friday', 'Saturday', 'Sunday'];
const INIT_VISIT=[{Monday:{}, Tuesday:{}, Wednesday:{}, Thursday:{},Friday:{}, Saturday:{}, Sunday:{}}]

function CustomerView(props, user){
  
  const [timeSelect, setTimeSelect] = useState([]);
  const option= [];
  // console.log(user);

  const [schedule, setSchedule]= useState([]);
  // providerList.map((provider, index) =>(

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(schedule,"OPTIONS",option );};

 


  
  const handleChecked = (e) => {
    if(e.target.checked){
      console.log(e.target.value );
    
  }}

  const handleTime = (e) => {
    const day = e.target.dataset.day;
    const index = schedule.findIndex(obj => obj.day === day);
    if(index !== -1) {
      const scheduleCopy = [...schedule];
      scheduleCopy[index][e.target.name] = e.target.value;
      console.log(scheduleCopy);
    }
   
  }
  
  const handleDay = (e) => {
    const day = e.target.name; // e.g. 'Monday'
    const scheduleCopy = [...schedule];
    const indexOfDay = schedule.findIndex(i => i.day === day);
    if(indexOfDay !== -1) {
      scheduleCopy.splice(indexOfDay, 1);
    } else {
      scheduleCopy.push({
        day: `${day}`,
      });
    }
    setSchedule(scheduleCopy);
  }
  
 
 
  const handleChange = (e) => {
    // getOptionLabel=(option) => option.year.toString();
    // console.log(e.target.name, e.target.value);
    // const test = timeSelect;
    const timeSelectCopy = [...timeSelect];
    timeSelectCopy.push(e.target.value);
    setTimeSelect(timeSelectCopy);
    // if(timeSelect == []){
    //   console.log(timeSelect);
    // } else {
      // const json= test;
      // const timecheck = JSON.parse(json);
      
    console.log("HERE ARE THE KEYS",timeSelect);
  };
  console.log("TIMESELECT",timeSelect)

  const displayHTML =  weekDays.map((day, index)=> (
    <Form.Group controlId="formGridState" key={index}>
        <Row lg={6} sm={12}>
          <Col lg={2} sm={3}>
                <Form.Check
                label={day}
                value={day}
                name={day}
                type="checkbox"
                checked={schedule.findIndex(i => i.day === day) !== -1}
                onChange={handleDay}
                id={`2`}
                />
                </Col>

          <Col lg={3} sm={4} >
            <Row lg={12} sm={12} >
                <Col lg={6} xs={3}>
                <Form.Label>Start Time</Form.Label>
                </Col>
                <Col lg={4} xs={3}><input data-day={day} type="time" step='900' id="appt1" name="startTime"
                  onChange={handleTime} required disabled={schedule.findIndex(obj => obj.day === day) === -1}
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
                <Col lg={4} xs={3}><input data-day={day} type="time" step='900' id="appt2" name="endTime"
                  onChange={handleTime} required disabled={schedule.findIndex(obj => obj.day === day) === -1}/>          
                </Col>
             </Row>
            </Col>
        </Row>
        </Form.Group>
  ))
// => minutes.map((minutes, index)=>(<p key={index}>{minutes}</p>))
  
  console.log("DISPLAY TIME",{displayHTML},"SCHEDULE",schedule, "Time", timeSelect );



  return(
  
    <> Here is the Customer View 
      <ThemeProvider breakpoints={['lg',' md','xs']} miniBreakpoint="sm">
      <Container fluid >
        
      <Form  onSubmit={handleSubmit}>
        <Row>
        {displayHTML}</Row>
        <Row></Row>
          <Button variant="primary" type="submit">
            Submit
          </Button>
      </Form>
       
   
      </Container>
      </ThemeProvider>
    </>
    )
}

export default CustomerView