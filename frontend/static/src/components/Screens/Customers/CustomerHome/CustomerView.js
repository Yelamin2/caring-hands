import React from "react";
import { useState } from "react";
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from "react-bootstrap/esm/Row";


function CustomerView(){


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
          <Form.Group as={Col} controlId="formGridState">
          
          <Form.Select defaultValue="Choose...">
            <option>Choose...</option>
            <option>...</option>
            <option>...</option>
            <option>...</option>
            <option>...</option>
            <option>...</option>
          </Form.Select>
        </Form.Group>
        <Form.Group as={Col} controlId="formGridState">
          
          <Form.Select defaultValue="Choose...">
            <option>Choose...</option>
            <option>...</option>
            <option>...</option>
            <option>...</option>
            <option>...</option>
            <option>...</option>
          </Form.Select>
        </Form.Group>
        </Row>
          <Form.Check
         
            label="Tue"
            name="group1"
            type="checkbox"
            id={`2`}
          />
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