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
        
        selectedProviderHTML = "Make a selection for your care provider.";
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
        console.log("Provider Value =", selectedProvider, "HTML from useEffect:: ", {selectedProviderHTML});
        company_name= selectedProvider.id;
};
    
const handleChange = (e) => {
    const { name, value } = e.target;
    setAddNote((prevState) => ({
      ...prevState,
      [name]: value,
     
      
    }));
    notes=addNote.note;
    
  };

  console.log(notes)

 



   

    console.log("Selected Providers ::", selectedProvider , "HTML provider_i:::", (company_name))
    return(
        <>
        <Row 
        style={{ 
            position: 'sticky',
            backgroundColor: 'LightGoldenrodYellow', 
            boxShadow: "10px 10px 9px SaddleBrown"
        }}>
        <Col lg={8} xs={12}  ><CustomerView company_name={company_name} notes={notes}/></Col>
        <Col lg={3} xs={12}>
            <Row style={{ height: '20vh' }}>{selectedProviderHTML}</Row>
            <Row><Form.Control
          as="textarea"
          onChange={handleChange}
          name='note'
          placeholder="Leave a comment here"
          style={{ height: '20vh' }}
        /></Row>
            <p></p>
            
            </Col>
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