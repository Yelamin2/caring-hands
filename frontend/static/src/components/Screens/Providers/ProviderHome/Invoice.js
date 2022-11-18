import React from "react";
import { useOutletContext } from "react-router-dom";
import { useState, useEffect } from "react";
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from "react-bootstrap/esm/Row";
import Button from "react-bootstrap/esm/Button";
import Container from 'react-bootstrap/Container';
import Cookies from "js-cookie";
import { handleError } from "../../../../utils/errorHandler";
import getTime from "date-fns/getTime";


var visitsLogHTML;
function Invoice(){
  const [userOptions, setUserOptions] = useState([]);
  const [visitsLog, setVisitsLog]= useState();
  const[invoice, setInvoice]=useState();

  const handleSubmit =  (e) => {
    e.preventDefault();
    
    console.log('Selected', e.target.value);
  }


  useEffect(() => {
    const fetchvisitsLog= async () => {
        const response = await fetch("/api/v1/visits/visitlog/");
        if (!response.ok){
            if(!response.status === 404){
                throw Error("Oops. Something went wrong!");
            }
            return;
        }

        const data = await response.json();
        const users = data.map(obj => obj.client_details);
        const filteredUsers = users.filter((value, index, self) => {
            return self.findIndex(v => v.id === value.id) === index;
        });
        console.log({filteredUsers});
        setUserOptions(filteredUsers);

        setVisitsLog([...data]);
                    
    };
    fetchvisitsLog();
  },[]);  

  console.log(visitsLog, userOptions);
  useEffect(() => {
    const fetchInvoices= async () => {
        const response2 = await fetch("/api/v1/visits/visitlog/");
        if (!response2.ok){
            if(!response2.status === 404){
                throw Error("Oops. Something went wrong!");
            }
            return;
        }

        const data = await response2.json();
        setInvoice([...data]);
                    
    };
    fetchInvoices();
  },[]); 
  
  if (visitsLog != undefined){
    visitsLogHTML = visitsLog.map((logs, id) => {
       return  <p key={id}>{logs.client_details.first_name} {logs.client_details.last_name}</p>
    })
  }else {
    visitsLogHTML='';
  }

  const displayHTML = (
    <Form onSubmit={handleSubmit}>
    <Form.Group controlId="formGridState">
        <Row lg={6} sm={12}>
        <Col lg={3}></Col>
        
        {/* <Col lg={4} sm={4}>
            <Row lg={12} sm={12}>
                <Col lg={2} xs={3}>
                <Form.Label>Start Time</Form.Label>
                </Col>
                <Col lg={4} xs={3}><input type="datetime-local" step='900' id="appt1" name="start_visit"
                  onChange={1} />
                </Col>
             </Row>
            </Col>
          <Col lg={1} sm={1}></Col>
          <Col lg={3} sm={4}>
            <Row lg={12} sm={12}>
                <Col lg={2} xs={3}>
                <Form.Label>End Time</Form.Label>
                </Col>
                <Col lg={4} xs={3}><input type="datetime-local" step='900' id="appt2" name="end_visit"
                  onChange={1} />
                </Col>
             </Row>
            </Col> */}
            <Col lg={3}>
            <Form.Select onChange={(e)=>e.target.value} name="client" required>
                <option>Select customer</option>
                    {userOptions.map((selectedClient, id) =>( < option key={id}  value={selectedClient.id} name="client" >{selectedClient.first_name} {selectedClient.last_name}
                    </option>))}
                    
                
            </Form.Select>
           
            </Col>
            <Button type="submit">Generate Invoice</Button>
            <Col lg={3}></Col>
        </Row>
        {/* <Form.Control type="text" placeholder="Normal text" name="notes"
                  onChange={(e)=>e.target.value}/> */}
        <Row>

        </Row>
        </Form.Group>
        </Form>
  )

  return (
     <>
      <Container>
      <Row>
        <Col style={{marginTop:40}}> {displayHTML}</Col>
      </Row>
      <Row>
        <Col> </Col>
      </Row>
    </Container>
     </>   
    )
}
export default Invoice