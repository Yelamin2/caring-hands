import { useState, useCallback, useEffect } from "react";
import { useOutletContext, Link , Outlet} from "react-router-dom";
import { handleError } from "../../utils/errorHandler";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Cookies from "js-cookie";
import Container from 'react-bootstrap/Container';
import Header from '../Header/Header';
import { useNavigate } from 'react-router-dom';
import App from "../App/App";
import Registeration from "./Registration";

function LoginForm(props) {
    const [user, setUser] = useState({
      username: "",
      email: "",
      password: "",
    });
    const[newUser, setNewUser]= useState();
  
    const { setIsAuth, navigate} = useOutletContext();
  
    const handleInput = (e) => {
      const { name, value } = e.target;
      setUser((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-CSRFToken": Cookies.get("csrftoken"),
        },
        body: JSON.stringify(user),
      };
  
      const response = await fetch("/dj-rest-auth/login/", options).catch(
        handleError
      );
      if (!response.ok) {
        throw new Error("Network response was not OK.");
      } else {
        const data = await response.json();
        Cookies.set("Authorization", `Token ${data.key}`);
        setIsAuth(true);
      }
     
      // setTimeout(500);      
        // const options2 = {
        //   method: "GET",
        //   headers: {
        //     "Content-Type": "application/json",
        //     "X-CSRFToken": Cookies.get("csrftoken"),
        //   },
        //   body: JSON.stringify(user),
        // }; 
        const response2 = await fetch("/dj-rest-auth/user/").catch(
          handleError
        );
        if (!response2.ok) {
          console.log("fetch failed")
          throw new Error("Network response was not OK.");
        } else {
          console.log("Login ok");

          const data = await response2.json();
          Cookies.set("Authorization", `Token ${data.key}`);
          setIsAuth(true);
          // props.loggedUser({...data});
          setNewUser({...data});
        } 
      
        };
      
    // console.log("NEW USER FORM LOGIN",newUser);

    if (newUser != undefined){
      
      
      
      
            
      if(newUser.is_provider==true){
        navigate('/provider/');        
      }
      else if(newUser.is_customer==true){
        navigate('/selection/');
      } else {
        navigate('/home/');
      }
      // <Outlet context={newUser} />
       const headerProps = {
        newUser,      
      };
      // window.location.reload(false);    
     }
  
  
    return (
      <>     
      <Form style={{marginTop:100}} onSubmit={handleSubmit} className="col-10 col-md-6 col-lg-4 mx-auto">
        <Form.Group className="mb-3" controlId="username">
          <Form.Label>Username</Form.Label>
          <Form.Control
           
            type="text"
            placeholder="Enter username"
            name="username"
            value={user.username}
            onChange={handleInput}
          />
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            value={user.email}
            onChange={handleInput}
          />
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            value={user.password}
            onChange={handleInput}
          />
        </Form.Group>
        <span className="d-block text-end mb-3">
          Need an account? <Link to="/registeration/">Register</Link> today!
        </span>
        <Button style={{backgroundColor:'PaleTurquoise', color:'black'}} type="submit">
          Submit
        </Button>
      </Form>
      <div></div>
      
      </>
    );
    
  }
  
export default LoginForm