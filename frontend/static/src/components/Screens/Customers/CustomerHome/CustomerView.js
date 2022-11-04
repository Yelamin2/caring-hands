import React from "react";
import { useState } from "react";
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from "react-bootstrap/esm/Row";
import { format, compareAsc } from 'date-fns'
import DatePicker from 'react-datepicker';

function CustomerView(){
  const [startTime, setStartTime] = useState(new Date());
  const [endTime, setEndTime] = useState(new Date());


    return(
        <> Here is the Customer View 
        <Form>
      
        <div key="reverse_checkbox" className="mb-3">
        <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridState">
            <Form.Check as={Col}
       
            label="Mon"
            name="checkbox"
            type="checkbox"
            id={1}
          /></Form.Group>
          
        </Row>
        <Row>
          <Col class='md-2'>
          <Form.Check
         
            label="Tue"
            name="group1"
            type="checkbox"
            id={`2`}
          />
          </Col>
           <Col class='md-2'>
       
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
<Col class='md-2'>
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
          <Form.Check
     
    
            label="Wed"
            type="checkbox"
            id={3}
          /><Form.Check

          label="Thu"
          name="checkbox"
          type="checkbox"
          id={1}
        />
        <Form.Check

          label="Fri"
          name="group1"
          type="checkbox"
          id={`2`}
        /><Form.Check
  
        label="Sat"
        name="checkbox"
        type="checkbox"
        id={1}
      />
      <Form.Check

        label="Sun"
        name="group1"
        type="checkbox"
        id={`2`}
      />
        </div>
      
    </Form>
        
        </>
    )
}

export default CustomerView