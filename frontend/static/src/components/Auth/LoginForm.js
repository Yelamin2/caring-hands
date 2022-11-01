import { useState } from "react";
import { useOutletContext, Link } from "react-router-dom";
import { handleError } from "../../utils/errorHandler";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Cookies from "js-cookie";

function LoginForm() {
    const [user, setUser] = useState({
      username: "",
      email: "",
      password: "",
    });
  
    const { setIsAuth, navigate } = useOutletContext();
  
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
        navigate("/");
      }
    };
  
    return (
      <Form onSubmit={handleSubmit} className="col-10 col-md-6 col-lg-4 mx-auto">
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
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
  }
  


export default LoginForm