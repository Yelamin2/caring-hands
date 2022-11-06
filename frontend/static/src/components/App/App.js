
import { useState, useEffect } from 'react';
import { useNavigate, Outlet,useOutletContext } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Header from '../Header/Header';
import CustomerView from '../Screens/Customers/CustomerHome/CustomerView';
import Spinner from "react-bootstrap/Spinner";
import LoginForm from '../Auth/LoginForm';
import Landing from '../Screens/Landing';
// /import ProviderForm from '../Screens/Providers/ProviderForm';


function App(props) {
  const [isAuth, setIsAuth] = useState(null);
  const navigate = useNavigate();
  const [loggedUser, setLoggedUser]=useState();
  

  console.log("NEWUSER FROM APP",loggedUser);

  useEffect(() => {
    const checkAuth = async () => {
      console.log("Fetch request for login")
      const response = await fetch("/dj-rest-auth/user/");
      if (!response.ok) {
        setIsAuth(false);
        navigate("/home/");
        console.log("Not Auth");
      } else { 
        const data = await response.json();
        setLoggedUser({...data}) ;  
        setIsAuth(true);
      }
    };

    setTimeout(checkAuth, 1000);
    
  }, []);
   console.log("Logged user from App.js",{loggedUser});

  if (isAuth === null) {
    return ( console.log("Waiting"),
      <Spinner
        animation="border"
        role="status"
        className="d-block mx-auto mt-5"
      >
        <span className="visually-hidden">Loading...</span>
      </Spinner>
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
        <Outlet context={{ setIsAuth, navigate, loggedUser}} />
      </Container>
      <div className="App"></div>

      {/* {<ProviderForm loggedUser={loggedUser.id}/>} */}
    </>
    
  );
}

export default App;
