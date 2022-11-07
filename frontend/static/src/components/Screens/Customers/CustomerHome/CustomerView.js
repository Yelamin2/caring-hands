import React from "react";
import { useState } from "react";
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from "react-bootstrap/esm/Row";
import ThemeProvider from 'react-bootstrap/ThemeProvider';
import { format, compareAsc } from 'date-fns';
import Button from "react-bootstrap/esm/Button";
import Container from 'react-bootstrap/Container';

const hours =['01','02','03','04','05','06','07','08','09','10','11','12'];
const minutes =['00', '15','30' ,'45'];
const amPm= ["AM", 'PM'];
const weekDays = ["Monday", 'Tuseday', 'Wednesday', 'Thursday','Friday', 'Saturday', 'Sunday'];

function CustomerView(){
  const [startTime, setStartTime] = useState(new Date());
  const [endTime, setEndTime] = useState(new Date());
  const option= [];

  const [schedule, setSchedule]= useState();
  // providerList.map((provider, index) =>(

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({displayHTML},option );};

  const handleChange = (e) => {
    getOptionLabel=(option) => option.year.toString();
    console.log(e.target.name, option);
  };
  
  const handleChecked = (e) => {
    if(e.target.checked){
      console.log(e.target.value);
    }
  }

  const displayHTML =  weekDays.map((days, index)=> (
    <Form.Group controlId="formGridState" key={index}>
        <Row lg={4} sm={4}>
          <Col lg={2} sm={12}>
                <Form.Check
                label={days}
                value={days}
                name="group1"
                type="checkbox"
                onChange={handleChecked }
                id={`2`}
                />
                </Col>

          <Col lg={5} sm={4} >
            <Row lg={4} sm={12} >
                <Col lg={3} xs={3}>
                <Form.Label>Start Time</Form.Label>
                </Col>
                <Col lg={3} xs={3}>
                <Form.Select defaultValue="Choose..." >{
                hours.map((hour, index)=> (
                <option  key={index} value={hour} name="hour" getOptionLabel={(option) => option.label}>{hour}</option>
                ))}
                </Form.Select>
                </Col>
                <Col lg={3} xs={3}>
                <Form.Select defaultValue="Choose...">{ 
                minutes.map((minutes, index)=> (
                <option key={index} value={minutes} name="minute" onChange={handleChange}>{minutes}</option>
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
        </Form.Group>
  ))
// => minutes.map((minutes, index)=>(<p key={index}>{minutes}</p>))
  console.log({displayHTML},schedule );



  return(
  
    <> Here is the Customer View 
      <ThemeProvider breakpoints={['lg',' md','xs']} miniBreakpoint="sm">
      <Container fluid>
        
      {/* <Form  onSubmit={handleSubmit}> */}
        {displayHTML}
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
        <Form >{() =>  weekDays.map((days, index)=> (
    <Form.Group controlId="formGridState" key={index}>
        <Row lg={4} sm={4}>
          <Col lg={2} sm={12}>
                <Form.Check
                label={days}
                value={days}
                name="group1"
                type="checkbox"
                onChange={handleChecked }
                id={`2`}
                />
                </Col>

          <Col lg={5} sm={4} >
            <Row lg={4} sm={12} >
                <Col lg={3} xs={3}>
                <Form.Label>Start Time</Form.Label>
                </Col>
                <Col lg={3} xs={3}>
                <Form.Select defaultValue="Choose..." >{
                hours.map((hour, index)=> (
                <option  key={index} value={hour} name="hour" getOptionLabel={(option) => option.label}>{hour}</option>
                ))}
                </Form.Select>
                </Col>
                <Col lg={3} xs={3}>
                <Form.Select defaultValue="Choose...">{ 
                minutes.map((minutes, index)=> (
                <option key={index} value={minutes} name="minute" onChange={handleChange}>{minutes}</option>
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
        </Form.Group>))}
        </Form>

      <Button variant="primary" type="submit">
        Submit
      </Button>
      
    
        {/* // </Form> */}
        </Container>
      </ThemeProvider>
    </>
    )
}

export default CustomerView