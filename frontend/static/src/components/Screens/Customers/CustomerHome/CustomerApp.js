import React from "react";
import CustomerView from "./CustomerView";
import { useOutletContext } from "react-router-dom";
import ProviderList from "../ProviderList";
import { useState, useEffect } from "react";
import Col from 'react-bootstrap/Col';
import Row from "react-bootstrap/esm/Row";
import Form from "react-bootstrap/esm/Form"


let selectedProviderHTML;
let company_name;
let notes;

function CustomerApp(props){
    const [selectedProvider, setSelectedProvider] = useState(null);
    const [timesheet, setTimesheet]= useState([]);
    const { user} = useOutletContext();
    const [addNote, setAddNote]= useState(null);


    if(selectedProvider == null){
        
        selectedProviderHTML = "Select your care provider";
        console.log("Provider Empty", selectedProviderHTML);
    } else {
        console.log("Provider Value =", selectedProvider);
        selectedProviderHTML= (
        <Col lg = {12}>
            <ul >
                <p></p>
                <p >{selectedProvider.company_name}</p>
                <p >{selectedProvider.address1} </p>
                <p>{selectedProvider.city} {selectedProvider.state} {selectedProvider.zip}</p>
                <p></p>
                <p></p>
                
            </ul>
        </Col>
    ); 
        // console.log("Provider Value =", selectedProvider, "HTML from useEffect:: ", {selectedProviderHTML});
        company_name= selectedProvider.id;
};
    //  
const handleChange = (e) => {
    const { name, value } = e.target;
    setAddNote((prevState) => ({
      ...prevState,
      [name]: value,
     
      
    }));
    // notes=addNote.note;
    
  };

  console.log("From Customer App :  ",notes);


    console.log("Selected Providers ::", selectedProvider , "HTML provider_i:::", (company_name))
    return(
        <>
        <Row 
        style={{ 
            marginTop:60,
            position: 'sticky',
            backgroundColor: 'LightGoldenrodYellow', 
            boxShadow: "10px 10px 9px SaddleBrown"
        }}>
        <Col lg={8} xs={12}  ><CustomerView company_name={company_name} notes={addNote}/></Col>
        <Col lg={3} xs={12}>
            <Row style={{minHeight: 120, marginTop:20, textAlign:'center' }}>{selectedProviderHTML}</Row>
            <Row><Form.Control
          as="textarea"
          onChange={handleChange}
          name='notes'
          placeholder="Leave a comment here"
          style={{ minHeight: 120 }}
        /></Row>
            <p></p>
            
            </Col>
        </Row>
        <p> 

        </p>
        <p> 

        </p>
        <Row style={{ marginTop: 40 }}>
        <ProviderList setSelectedProvider={setSelectedProvider}/></Row>
        
        </>
    )
}

export default CustomerApp