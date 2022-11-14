import React from "react";
import CustomerView from "./CustomerView";

import ProviderList from "../ProviderList";
import { useState, useEffect } from "react";
import Col from 'react-bootstrap/Col';
import Row from "react-bootstrap/esm/Row";


let selectedProviderHTML;
let company_name;

function CustomerApp(props){
    const [selectedProvider, setSelectedProvider] = useState(null);
    const [timesheet, setTimesheet]= useState([]);


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
                <p>{selectedProvider.city} {selectedProvider.state} {selectedProvider.zip}</p>
                <p></p>
                <p></p>
                
            </ul>
        </Col>
    ); 
        console.log("Provider Value =", selectedProvider, "HTML from useEffect:: ", {selectedProviderHTML});
        company_name= selectedProvider.id;
};
    


   

    console.log("Selected Providers ::", selectedProvider , "HTML provider_i:::", (company_name))
    return(
        <>
        <Row 
        style={{ 
            position: 'sticky',
            backgroundColor: 'LightGoldenrodYellow', 
            boxShadow: "10px 10px 9px SaddleBrown"
        }}>
        <Col lg={8} xs={12}><CustomerView company_name={company_name}/></Col>
        <Col lg={4} xs={12}>{selectedProviderHTML}</Col>
        </Row>
        <p> 

        </p>
        <p> 

        </p>
        <Row>
        <ProviderList setSelectedProvider={setSelectedProvider}/></Row>
        
        </>
    )
}

export default CustomerApp