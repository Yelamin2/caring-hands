import React from "react";
import CustomerView from "./CustomerView";

import ProviderList from "../ProviderList";
import { useState, useEffect } from "react";
import Col from 'react-bootstrap/Col';
import Row from "react-bootstrap/esm/Row";


let selectedProviderHTML;

function CustomerApp(props){
    const [selectedProvider, setSelectedProvider] = useState(null);
    const [schedule, setSchedule]= useState([]);


        if(selectedProvider == null){
            
            selectedProviderHTML = "Make a selection for your care provider.";
            console.log("Provider Empty", selectedProviderHTML);
        } else {
            console.log("Provider Value =", selectedProvider);
            selectedProviderHTML= (
            <Col lg = {12}>
                <ul >
                    <p >{selectedProvider.company_name}</p>
                    <p >{selectedProvider.address1} </p>
                    <p></p>
                    <p></p>
                    <p></p>
                    
                </ul>
            </Col>
        ); 
            console.log("Provider Value =", selectedProvider, "HTML from useEffect:: ", {selectedProviderHTML});
        };
   

    console.log("Selected Providers ::", selectedProvider , "HTML:::",selectedProviderHTML)
    return(
        <>
        <Row>
        <Col lg={8} xs={12}><CustomerView setSchedule={setSchedule}/></Col>
        <Col lg={4} xs={12}>{selectedProviderHTML}</Col>
        </Row>
        <Row>
        <ProviderList setSelectedProvider={setSelectedProvider}/></Row>
        
        </>
    )
}

export default CustomerApp