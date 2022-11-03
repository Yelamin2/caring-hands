import { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Cookies from "js-cookie";
import Profile from "./Profile";

const INITIAL_USER=[{
        first_name: "",
        last_name: "",
        address1:"",
        address2:"",
        city:"",
        state:"",
        zip:"",


    }]
function ProfileForm(props){
    const [profileDetail, setProfileDetail]=useState([INITIAL_USER]);
    const[profile , setProfile]= useState({avatar: null});

    useEffect(() => {
        const fetchUserProfile = async () => {
            const response = await fetch("/api/v1/users/profiles/user/");
            if (!response.ok){
                if(!response.status === 404){
                    throw Error("Oops. Something went wrong!");
                }
                return;
            }

            const data = await response.json();
            setProfile({...data});
            console.log({profile})
            
        };
        fetchUserProfile();
    },[]);
    const {id} =profile;
    const handleInput = (e) => {
        const {name, value} = e.target;
        setProfileDetail((prevProfileDetail) => ({
            ...prevProfileDetail, 
            [name]: value,
        }));
    };
    const handleError = (err) => console.warn(err);

    const handleSubmit= async (e) => {
        e.preventDefault();
        
        const options = {
            method: `${id ? "PUT" : "POST"}`,
            headers: {
                // "Content-Type": "application/json; charset=UTF-8 ",
                "X-CSRFToken": Cookies.get('csrftoken'),   
               
            },
            body: JSON.stringify(profileDetail),
        };
        const response = await fetch(`/api/v1/users/profiles/${id ? "user/" : ""}`, options).catch(
            handleError
          );
          if (!response.ok) {
            throw new Error("Oops. Something went wrong!");
          } else {
            const data = await response.json();
            console.log("MY DATA",data)
            Cookies.set("Authorization", `Token ${data.key}`);
            props.setAuth(true);
          }
        };
        
    






    return (

        <>
        <div>{<Profile />}</div>
        <Form onSubmit={handleSubmit}>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" placeholder="First name" 
                name= "first_name"
                value= {profileDetail.first_name}
                onChange={handleInput}
                required/>
                </Form.Group>

                
                <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" placeholder="First name" 
                name= "last_name"
                value= {profileDetail.last_name}
                onChange={handleInput}
                required/>
                </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Label>Address</Form.Label>
                <Form.Control placeholder="1234 Main St" 
                name= "address1"
                value= {profileDetail.address1}
                onChange={handleInput}
                required/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGridAddress2">
                <Form.Label>Address 2</Form.Label>
                <Form.Control placeholder="Apartment, studio, or floor"
                name= "address2"
                value= {profileDetail.address2}
                onChange={handleInput}
                />
            </Form.Group>

            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>City</Form.Label>
                <Form.Control 
                name= "city"
                value= {profileDetail.city}
                onChange={handleInput}/>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                <Form.Label>State</Form.Label>
                <Form.Control 
                name= "state"
                value= {profileDetail.state}
                onChange={handleInput}/>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>Zip</Form.Label>
                <Form.Control 
                name= "zip"
                value= {profileDetail.zip}
                onChange={handleInput}/>
                </Form.Group>
            </Row>

            <Form.Group className="mb-3" id="formGridCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
        </>
    );
}


export default ProfileForm;