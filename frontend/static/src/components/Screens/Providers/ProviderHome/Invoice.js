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


var visitsLogHTML;
function Invoice(){
  const [userOptions, setUserOptions] = useState([]);
  const [visitsLog, setVisitsLog]= useState();


  useEffect(() => {
    const fetchTimesheet= async () => {
        const response = await fetch("/api/v1/visits/visitlog/");
        if (!response.ok){
            if(!response.status === 404){
                throw Error("Oops. Something went wrong!");
            }
            return;
        }

        const data = await response.json();
        setVisitsLog([...data]);
                    
    };
    fetchTimesheet();
  },[]); 
  
  if (visitsLog != undefined){
    visitsLogHTML = visitsLog.map((logs, id) => {
       return  <p key={id}>{logs.end_visit}-{logs.end_visit}</p>
    })
  }else {
    visitsLogHTML='';
  }

    return (
     <>
      <Container>
      <Row>
        <Col> {visitsLogHTML}</Col>
      </Row>
    </Container>
     </>   
    )
}
export default Invoice