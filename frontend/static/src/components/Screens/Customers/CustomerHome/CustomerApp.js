import React from "react";
import CustomerView from "./CustomerView";

import ProviderList from "../ProviderList";
import { useState } from "react";
import Col from 'react-bootstrap/Col';
import Row from "react-bootstrap/esm/Row";

var selectedProviderHTML=[];
const [state, setState]= [{ProviderList}];
function CustomerApp(props){
    const[state, setState]=useState([props.ProviderList]);
    const [selectedProvider, setSelectedProvider] = useState([]);


    const addProvider = (item) =>{
        setSelectedProvider([...selectedProvider, item]);
        
    }

    if(selectedProvider == ([])){
        console.log("Provider Empty");
        selectedProviderHTML = ["Make a selection for your care provider."];

    } else {
        console.log("Provider not empty");
        selectedProviderHTML= selectedProvider.map((care, id)=>{
            return (<Col lg = {4} key={id}>
            <ul >
                <p >{care.name}</p>
                <p >{care.address1} </p>
                <p></p>
                <p></p>
                <p></p>
                
            </ul></Col>);}
        );
        
    };

    console.log("Selected Providers ::", selectedProvider , "HTML:::",selectedProviderHTML)
    return(
        <>
        <Row>
        <Col lg={8} xs={12}><CustomerView /></Col>
        <Col lg={4} xs={12}>{selectedProviderHTML} </Col>
        </Row>
        <Row>
        <ProviderList addProvider={addProvider}/></Row>
        
        </>
    )
}

export default CustomerApp