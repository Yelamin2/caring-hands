import { useState } from "react";
import { useOutletContext, Link } from "react-router-dom";
import { handleError } from "../../utils/errorHandler";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Cookies from "js-cookie";

function Registeration() {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password1: "",
    password2: "",
    is_customer:true,
    is_provider:false,
  });
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckbox = () => {
    setUser((prevState) => ({
      ...prevState,
      is_provider: !prevState.is_provider,
      is_customer: !prevState.is_customer,
    }));
    // setIsChecked(!isChecked);
  };
  
  const { setIsAuth, navigate } = useOutletContext();


  const handleInput = (e) => {
    const { name, value } = e.target;
    setUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    if(user.is_provider==true){
      setUser.is_customer=false;
    }
    console.log({user});
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

    const response = await fetch("/dj-rest-auth/registration/", options).catch(
      handleError
    );
    if (!response.ok) {
      throw new Error("Network response was not OK.");
    } else {
      const data = await response.json();
      Cookies.set("Authorization", `Token ${data.key}`);
      setIsAuth(true);
      navigate("/profile/");
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
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" id="formGridCheckbox">
        <input
            type="checkbox"
            id="topping"
            checked={user.is_provider}
            name="is_provider"
            onChange={handleCheckbox}
          /> I want to be service provider.
             
               
      </Form.Group>

      <Form.Group className="mb-3" controlId="password1">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          name="password1"
          value={user.password1}
          onChange={handleInput}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="password2">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Confirm password"
          name="password2"
          value={user.password2}
          onChange={handleInput}
        />
      </Form.Group>
      <span className="d-block text-end mb-3">
        Already have an account? <Link to="/login/">Login</Link> today!
      </span>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}



export default Registeration