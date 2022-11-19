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
var hours, invoiceHTML;
function Invoice(){
  const [userOptions, setUserOptions] = useState([]);
  const [visitsLog, setVisitsLog]= useState();
  const[invoice, setInvoice]=useState();
  const[client, setClient]=useState();
  const [selectedClient, setSelectedClient] = useState();

  const {user} = useOutletContext();

  const handleClient= (e) => {
    const { name, value } = e.target;
    // console.log({value});
    // console.log({userOptions})
    const index = userOptions.findIndex(item => item.id === parseInt(value));
    // console.log({index})
    const selection = {...userOptions[index]};
    setClient(selection);

    // setClient((prevState) => ({
    //   ...prevState,
    //   [name]: value,
    
      
    // }));
  };




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
  
  if (visitsLog != undefined){
    visitsLogHTML = visitsLog.map((logs, id) => {
       return  <p key={id}>{logs.client_details.first_name} {logs.client_details.last_name}</p>
    })
  }else {
    visitsLogHTML='';
  }

  const handleSubmit =  (e) => {
    e.preventDefault();
    const index = userOptions.findIndex(item => item.username === client.username);
    console.log('Selected', index);
    const fetchInvoice= async () => {
      const response2 = await fetch(`/api/v1/provider/invoice/${client.id}/`);
      if (!response2.ok){
          if(!response2.status === 404){
            console.log('not working')
              throw Error("Oops. Something went wrong!");
          }
          return;
      }
      const data = await response2.json();
      setInvoice({...data});
      console.log('fetchdone', client.client);
      console.log(invoice);
                  
  };
  fetchInvoice()
  }

  const displayHTML = (
    <Form onSubmit={handleSubmit}>
    <Form.Group controlId="formGridState">
        <Row lg={6} sm={12}>
        <Col lg={3}></Col>
            <Col lg={3}>
            <Form.Select onChange={handleClient} name="client" required>
                <option>Select customer</option>
                    {userOptions.map((selectedClient, id) =>( < option key={id}  value={selectedClient.id} name="client" >{selectedClient.first_name} {selectedClient.last_name}
                    </option>))}
            </Form.Select>
            </Col>
            <Button type="submit">Generate Invoice</Button>
            <Col lg={3}></Col>
        </Row>
        <Row>
        </Row>
        </Form.Group>
        </Form>
  )
 if (invoice!=undefined){
    hours = invoice.hours;
    let clientId = client.client;
    console.log(hours);
    console.log("Client ID",invoice.username);
  

  invoiceHTML =(<Row style={{backgroundColor:'white', width: 900, height: 500}}>
    <Row> <Col lg={6}>
      
      <Row>{client.first_name}  {client.last_name}</Row>
      <Row>{client.address1}</Row>
      <Row >{client.address2}</Row>
      <Row><Col lg={3}>{client.city}</Col><Col lg={1}>{client.state}</Col><Col lg={1}>{client.zip}</Col></Row>
    </Col>
    <Col lg={6}></Col></Row>
        
        <Col>{user.company_name}</Col>
        <Col>{user.address1}</Col>
        <Col>{user.address2}</Col>
        <Col>{user.city}</Col>
        <Row>
          <Col lg={8}></Col>
          <Col lg={4}>Total Hours: {hours} hr</Col>
          </Row></Row>)
      //   (<Col lg = {6} >
      // <Row>
      //   <Col>{user.company_name}</Col>
      //   <Col>{user.address1}</Col>
      //   <Col>{user.address2}</Col>
      //   <Col>{user.city}</Col>
       
      //   <Col>{userOptions}</Col>
       
      //   <Col>{hours}</Col>
      // </Row></Col>
      // )
  }
    console.log({invoiceHTML}, userOptions)

  

  return (
     <>
      <Container>
      <Row>
        <Col style={{marginTop:40}}> {displayHTML}</Col>
      </Row>
      <Row style={{marginTop:80}}>
        <Col>{invoiceHTML}</Col>
        
      </Row>
    </Container>
     </>   
    )
}
export default Invoice