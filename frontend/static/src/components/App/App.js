
import { useState, useEffect } from 'react';
import { useNavigate, Outlet,useOutletContext } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Header from '../Header/Header';
import CustomerView from '../Screens/Customers/CustomerHome/CustomerView';
import Spinner from "react-bootstrap/Spinner";
import LoginForm from '../Auth/LoginForm';
import Landing from '../Screens/Landing';
import ProviderList from '../Screens/Customers/ProviderList';
import CustomerApp from '../Screens/Customers/CustomerHome/CustomerApp';

// /import ProviderForm from '../Screens/Providers/ProviderForm';


function App() {
  const [isAuth, setIsAuth] = useState(null);
  const navigate = useNavigate();
  const [user, setUser]=useState([]);
  // const [providerSelect, setProviderSelect] = useState([]);

    // const addProvider = (item) =>{
    //     setProviderSelect([...providerSelect, item]);
        
    // }

    // console.log("Selected Provides ::", providerSelect);

  // const loggedUser = (item => {
  //   setUser([...user, item]);

  // })
  

  // console.log("NEWUSER FROM APP",user);

  useEffect(() => {
    const checkAuth = async () => {
      // console.log("Fetch request for login")
      const response = await fetch("/dj-rest-auth/user/");
      if (!response.ok) {
        setIsAuth(false);
        navigate("/home/");
        // console.log("Not Auth");
      } else { 
        const data = await response.json();
        setUser({...data}) ;  
        setIsAuth(true);
      }
    };

    setTimeout(checkAuth, 1000);
    
  }, [isAuth]);

  //  console.log("Logged user from App.js",user);

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
    user 
  };
  

  return (
    
    <>
    <Header {...headerProps} />
    
    {/* <ProviderList addProvider={addProvider}/> */}
    {/* <LoginForm loggedUser={loggedUser}/> */}
    
    
      <Container>
        <Outlet context={{ setIsAuth, navigate, user}} />
      </Container>
    

      {/* {<ProviderForm loggedUser={loggedUser.id}/>} */}
      
    </>
    
  );
}

export default App;
