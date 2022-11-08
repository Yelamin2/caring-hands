import React from "react";
import { useState } from "react";
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from "react-bootstrap/esm/Row";
import ThemeProvider from 'react-bootstrap/ThemeProvider';
import { format, compareAsc } from 'date-fns';
import Button from "react-bootstrap/esm/Button";
import Container from 'react-bootstrap/Container';



const hours =['Hr','01','02','03','04','05','06','07','08','09','10','11','12'];
const minutes =['Min','00', '15','30' ,'45'];
const amPm= ['--',"AM", 'PM'];
const weekDays = ["Monday", 'Tuseday', 'Wednesday', 'Thursday','Friday', 'Saturday', 'Sunday'];
const INIT_VISIT=[{Monday:{}, Tuseday:{}, Wednesday:{}, Thursday:{},Friday:{}, Saturday:{}, Sunday:{}}]

function CustomerView(){
  const [justAthought, setJustAthought] = useState(INIT_VISIT);
  const [timeSelect, setTimeSelect] = useState([]);
  const option= [];

  const [schedule, setSchedule]= useState([]);
  // providerList.map((provider, index) =>(

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({displayHTML},option );};


  
  const handleChecked = (e) => {
    if(e.target.checked){
      console.log(e.target.value );
    
  }}

  const handleTime = (e) => {

  }
  

  const handleDay = (e) => {
    const day = e.target.name; // e.g. 'Monday'
    const scheduleCopy = [...schedule];
    const indexOfDay = schedule.findIndex(i => i.day === day);
    console.log('indexOfDay', indexOfDay);
    if(indexOfDay !== -1) {
      scheduleCopy.splice(indexOfDay, 1);
    } else {
      scheduleCopy.push({
        day: `${day}`,
        start: null,
        end: null,
      });
    }
    setSchedule(scheduleCopy);
  }

  const handleChange = (e) => {
    // getOptionLabel=(option) => option.year.toString();
    console.log(e.target.name, e.target.value);
    const test = timeSelect;
    const timeSelectCopy = [...timeSelect];
    timeSelectCopy.push(e.target.value);
    if(timeSelect == []){
      console.log(timeSelect);
    } else {
      const json= test;
      const timecheck = JSON.parse(json);
      console.log("HERE ARE THE KEYS",Object.entries(json));}
  };

  const displayHTML =  weekDays.map((day, index)=> (
    <Form.Group controlId="formGridState" key={index}>
        <Row lg={4} sm={4}>
          <Col lg={2} sm={12}>
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

          <Col lg={5} sm={4} >
            <Row lg={4} sm={12} >
                <Col lg={3} xs={3}>
                <Form.Label>Start Time</Form.Label>
                </Col>
                <Col lg={3} xs={3}>
                <Form.Select defaultValue="Choose..." onChange={handleChange}>{
                hours.map((hour, index)=> (
                <option  key={(index+7)} value={`${day}:{startHour:${hour}}`} name={'Hour'} onChange={handleChange}>{hour}</option>
                ))}
                </Form.Select>
                </Col>
                <Col lg={3} xs={3}>
                <Form.Select onChange={handleChange} defaultValue="Choose...">{ 
                minutes.map((minutes, index)=> (
                <option key={(index+25)} value={`${day}:{startMinutes:${minutes}}`} name="minute" onChange={handleChange}>{minutes}</option>
                ))
                }
                </Form.Select>
                </Col>
                <Col lg={3} xs={3}>
                <Form.Select onChange={handleChange} defaultValue="Choose...">{ 
                amPm.map((amPm, index)=> (
                <option key={(index+36)} value={`${day}:{startMeridiem:${amPm}}`}>{amPm}</option>
                
                ))
                }
                </Form.Select>
                </Col>
              </Row>
            </Col>
            <Col lg={5} sm={4}>
            <Row lg={6} sm={12}>
                <Col lg={3} xs={3}>
                <Form.Label>End Time</Form.Label>
                </Col>
                <Col lg={3} xs={3}>
                <Form.Select onChange={handleChange} defaultValue="Choose...">{
                hours.map((hour, index)=> (
                <option key={(index+7)} value={`${day}:{endtHour:${hour}}`}>{hour}</option>
                ))}
                </Form.Select>
                </Col>
                <Col lg={3} xs={3}>
                <Form.Select onChange={handleChange} defaultValue="Choose...">{ 
                minutes.map((minutes, index)=> (
                <option key={(index+25)} value={`${day}:{startMinutes:${minutes}}`}>{minutes}</option>
                ))
                }
                </Form.Select>
                </Col>
                <Col lg={3} xs={3}>
                <Form.Select onChange={handleChange} defaultValue="Choose...">{ 
                amPm.map((amPm, index)=> (
                <option key={(index+32)} value={`${day}:{startMeridiem:${amPm}}`}>{amPm}</option>
                ))
                }
                </Form.Select>
                </Col>
              </Row>
            </Col>
        </Row>
        </Form.Group>
  ))
// => minutes.map((minutes, index)=>(<p key={index}>{minutes}</p>))
  console.log({displayHTML},schedule, "Time", timeSelect );



  return(
  
    <> Here is the Customer View 
      <ThemeProvider breakpoints={['lg',' md','xs']} miniBreakpoint="sm">
      <Container fluid>
        
      <Form  onSubmit={handleSubmit}>
        <Row>
        {displayHTML}</Row>
      {/* <Form.Group controlId="formGridState">
        <Row lg={4} sm={4}>
          <Col lg={2} sm={12}>
                <Form.Check
                label="Monday"
                name="group1"
                type="checkbox"
                id={`2`}
                />
                </Col>

          <Col lg={5} sm={4}>
            <Row lg={4} sm={12}>
                <Col lg={3} xs={3}>
                <Form.Label>Start Time</Form.Label>
                </Col>
                <Col lg={3} xs={3}>
                <Form.Select defaultValue="Choose...">{
                hours.map((hour, index)=> (
                <option key={index}>{hour}</option>
                ))}
                </Form.Select>
                </Col>
                <Col lg={3} xs={3}>
                <Form.Select defaultValue="Choose...">{ 
                minutes.map((minutes, index)=> (
                <option key={index}>{minutes}</option>
                ))
                }
                </Form.Select>
                </Col>
                <Col lg={3} xs={3}>
                <Form.Select defaultValue="Choose...">{ 
                amPm.map((amPm, index)=> (
                <option key={index}>{amPm}</option>
                ))
                }
                </Form.Select>
                </Col>
              </Row>
            </Col>
            <Col lg={5} sm={4}>
            <Row lg={6} sm={12}>
                <Col lg={3} xs={3}>
                <Form.Label>End Time</Form.Label>
                </Col>
                <Col lg={3} xs={3}>
                <Form.Select defaultValue="Choose...">{
                hours.map((hour, index)=> (
                <option key={index}>{hour}</option>
                ))}
                </Form.Select>
                </Col>
                <Col lg={3} xs={3}>
                <Form.Select defaultValue="Choose...">{ 
                minutes.map((minutes, index)=> (
                <option key={index}>{minutes}</option>
                ))
                }
                </Form.Select>
                </Col>
                <Col lg={3} xs={3}>
                <Form.Select defaultValue="Choose...">{ 
                amPm.map((amPm, index)=> (
                <option key={index}>{amPm}</option>
                ))
                }
                </Form.Select>
                </Col>
              </Row>
            </Col>
        </Row>
        </Form.Group> */}
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