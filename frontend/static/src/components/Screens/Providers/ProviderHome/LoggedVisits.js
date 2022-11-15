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



let visitsLogHTML;

function LoggedVisits(){
    const {user} = useOutletContext();
    const [timesheet, setTimesheet] = useState([]);

    const [visitsLog, setVisitsLog]= useState();
    const [addVisitLog, setAddVisitLog ] = useState([]);

    const [userOptions, setUserOptions] = useState([]);

    useEffect(() => {
        const fetchTimesheet= async () => {
            const response = await fetch("/api/v1/visits/visits/");
            if (!response.ok){
                if(!response.status === 404){
                    throw Error("Oops. Something went wrong!");
                }
                return;
            }
    
            const data = await response.json();
            const users = data.map(obj => obj.user);
            const filteredUsers = users.filter((value, index, self) => {
                return self.findIndex(v => v.id === value.id) === index;
            });
            console.log({filteredUsers});
            setUserOptions(filteredUsers);

            setTimesheet([...data]);
                        
        };
        fetchTimesheet();
      },[]);  
    

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
           return  <p key={id}>{logs.start_visit}</p>
        })
      }

      const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("click submit")
        const options = {
          // `${user ? "PUT" : "POST"}`
          method: "POST" ,
          headers: {
              "Content-Type": "application/json; charset=UTF-8 ",
              "X-CSRFToken": Cookies.get('csrftoken'),   
             
          },
          body: JSON.stringify(addVisitLog),
        };
        const response = await fetch("/api/v1/visits/visitlog/", options).catch(
            handleError
          );
          if (!response.ok) {
            throw new Error("Oops. Something went wrong!");
          } else {
            const data = await response.json();
            console.log("MY DATA",data);
            Cookies.set("Authorization", `Token ${data.key}`);
            
          }
    
        console.log(addVisitLog,"OPTIONS",options );};
    
     
    
      const handleTime = (e) => {
        const { name, value } = e.target;
        setAddVisitLog((prevState) => ({
          ...prevState,
          [name]: value,
          user: user.id,
          
        }));
      };

      console.log(addVisitLog);
        
    
      
    
      const displayHTML = (
        <Form.Group controlId="formGridState">
            <Row lg={6} sm={12}>
            <Col lg={4} sm={4}>
                <Row lg={12} sm={12}>
                    <Col lg={2} xs={3}>
                    <Form.Label>Start Time</Form.Label>
                    </Col>
                    <Col lg={4} xs={3}><input type="datetime-local" step='900' id="appt1" name="start_visit"
                      onChange={handleTime} />
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
                      onChange={handleTime} />
                    </Col>
                 </Row>
                </Col>
                <Col>
                <Form.Select onChange={handleTime} name="client">
                        {userOptions.map((timetable, id) =>( < option key={id}  value={timetable.id} name="client" >{timetable.first_name}
                        </option>))}
                        
                    
                </Form.Select>
               
                </Col>
            </Row>
            <Form.Control type="text" placeholder="Normal text" name="notes"
                      onChange={handleTime}/>
            <Row>

            </Row>
            </Form.Group>
      )
    

    return(
        <>
        <div>{visitsLogHTML}</div>
        <Form  onSubmit={handleSubmit}>
        <Row 
        style={{ 
        backgroundColor: 'LightGoldenrodYellow'
       }}>
        {displayHTML}</Row>
        <Row></Row>
        <p>  </p>
        <Button  
            style={{ width: '6rem', 
            alignItems: "center" , 
            backgroundColor:"LightGreen"}} 
            type="submit">
            Submit
          </Button>
          <p> </p>
          <p> </p>
      </Form>
      
        </>
    )
}
export default LoggedVisits