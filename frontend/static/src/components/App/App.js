
import { useState, useEffect } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Header from '../Header/Header';
import CustomerView from '../Screens/Customers/CustomerHome/CustomerView';
import Spinner from "react-bootstrap/Spinner";
import LoginForm from '../Auth/LoginForm';


function App(props) {
  const [isAuth, setIsAuth] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = async () => {
      const response = await fetch("/dj-rest-auth/user/");
      if (!response.ok) {
        setIsAuth(false);
        navigate("/home/");
      } else {
        setIsAuth(true);
      }
    };
    setTimeout(checkAuth, 1000);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  if (isAuth === null) {
    return ( console.log("Waiting")
      // <Spinner
      //   animation="border"
      //   role="status"
      //   className="d-block mx-auto mt-5"
      // >
      //   <span className="visually-hidden">Loading...</span>
      // </Spinner>
    );
  }

  const headerProps = {
    isAuth,
    setIsAuth,
    navigate,
  };

  
  return (
    <>
    <Header {...headerProps} />
      <Container>
        <Outlet context={{ setIsAuth, navigate }} />
      </Container>
      <div className="App"></div>
      
    
    </>
    
  );
}

export default App;
