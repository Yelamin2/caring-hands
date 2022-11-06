import React from "react";
import { useState } from "react";
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from "react-bootstrap/esm/Row";
import ThemeProvider from 'react-bootstrap/ThemeProvider';
import { format, compareAsc } from 'date-fns';
import DatePicker from 'react-datepicker';
import Container from 'react-bootstrap/Container';

function CustomerView(){
  const [startTime, setStartTime] = useState(new Date());
  const [endTime, setEndTime] = useState(new Date());



  return(
  
    <> Here is the Customer View 
      <ThemeProvider breakpoints={['lg',' md',' sm']} miniBreakpoint="sm">
        <Container fluid>
        <Form >
          
      
          <div key="reverse_checkbox" className="mb-3">
            <Row sm={{span:6, offset:3}} lg={{span:4, offset: 4}}>
              <Col lg={6} sm={12}>
                <Form.Check
                label="Monday"
                name="group1"
                type="checkbox"
                id={`2`}
                />
                <Row lg={4} sm={12}>
                <Col lg={3} sm={4}>
                Start time<DatePicker
                selected={startTime}
                onChange={(date) => setStartTime(date)}
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={15}
                timeCaption="Time"
                dateFormat="h:mm aa"
                />
              </Col>
              <Col lg={3} sm={4}>
                End time<DatePicker
                selected={endTime}
                onChange={(date) => setEndTime(date)}
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={15}
                timeCaption="Time"
                dateFormat="h:mm aa"
                />
              </Col>
              </Row>
              </Col>
              
            </Row>
            <Row sm={12} lg={3}>
              <Col lg={2} sm={3}>
                <Form.Check
                label="Tuesday"
                name="group1"
                type="checkbox"
                id={`2`}
                />
              </Col>
              <Col lg={2} sm={4}>
                Start time<DatePicker
                selected={startTime}
                onChange={(date) => setStartTime(date)}
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={15}
                timeCaption="Time"
                dateFormat="h:mm aa"
                />
              </Col>
              <Col lg={2} sm={4}>
                End time<DatePicker
                selected={endTime}
                onChange={(date) => setEndTime(date)}
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={15}
                timeCaption="Time"
                dateFormat="h:mm aa"
                />
              </Col>
            </Row>
            <Row sm={12} lg={3}>
              <Col lg={2} sm={3}>
                <Form.Check
                label="Wednesday"
                name="group1"
                type="checkbox"
                id={`2`}
                />
              </Col>
              <Col lg={2} sm={4}>
                Start time<DatePicker
                selected={startTime}
                onChange={(date) => setStartTime(date)}
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={15}
                timeCaption="Time"
                dateFormat="h:mm aa"
                />
              </Col>
              <Col lg={2} sm={4}>
                End time<DatePicker
                selected={endTime}
                onChange={(date) => setEndTime(date)}
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={15}
                timeCaption="Time"
                dateFormat="h:mm aa"
                />
              </Col>
            </Row>
            <Row sm={12} lg={3}>
              <Col lg={2} sm={3}>
                <Form.Check
                label="Thursday"
                name="group1"
                type="checkbox"
                id={`2`}
                />
              </Col>
              <Col lg={2} sm={4}>
                Start time<DatePicker
                selected={startTime}
                onChange={(date) => setStartTime(date)}
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={15}
                timeCaption="Time"
                dateFormat="h:mm aa"
                />
              </Col>
              <Col lg={2} sm={4}>
                End time<DatePicker
                selected={endTime}
                onChange={(date) => setEndTime(date)}
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={15}
                timeCaption="Time"
                dateFormat="h:mm aa"
                />
              </Col>
            </Row>
            <Row sm={12} lg={3}>
              <Col lg={2} sm={3}>
                <Form.Check
                label="Friday"
                name="group1"
                type="checkbox"
                id={`2`}
                />
              </Col>
              <Col lg={2} sm={4}>
                Start time<DatePicker
                selected={startTime}
                onChange={(date) => setStartTime(date)}
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={15}
                timeCaption="Time"
                dateFormat="h:mm aa"
                />
              </Col>
              <Col lg={2} sm={4}>
                End time<DatePicker
                selected={endTime}
                onChange={(date) => setEndTime(date)}
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={15}
                timeCaption="Time"
                dateFormat="h:mm aa"
                />
              </Col>
            </Row>
            <Row sm={12} lg={3}>
              <Col lg={2} sm={3}>
                <Form.Check
                label="Saturday"
                name="group1"
                type="checkbox"
                id={`2`}
                />
              </Col>
              <Col lg={2} sm={4}>
                Start time<DatePicker
                selected={startTime}
                onChange={(date) => setStartTime(date)}
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={15}
                timeCaption="Time"
                dateFormat="h:mm aa"
                />
              </Col>
              <Col lg={2} sm={4}>
                End time<DatePicker
                selected={endTime}
                onChange={(date) => setEndTime(date)}
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={15}
                timeCaption="Time"
                dateFormat="h:mm aa"
                />
              </Col>
            </Row>
            <Row sm={12} lg={3}>
              <Col lg={2} sm={3}>
                <Form.Check
                label="Sunday"
                name="group1"
                type="checkbox"
                id={`2`}
                />
              </Col>
              <Col lg={2} sm={4}>
                Start time<DatePicker
                selected={startTime}
                onChange={(date) => setStartTime(date)}
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={15}
                timeCaption="Time"
                dateFormat="h:mm aa"
                />
              </Col>
              <Col lg={2} sm={4}>
                End time<DatePicker
                selected={endTime}
                onChange={(date) => setEndTime(date)}
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={15}
                timeCaption="Time"
                dateFormat="h:mm aa"
                />
              </Col>
            </Row>
            
          </div>
        </Form>
        </Container>
      </ThemeProvider>
    </>
    )
}

export default CustomerView