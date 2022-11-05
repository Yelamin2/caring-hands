
import { useState, useEffect } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Header from '../Header/Header';
// import CustomerView from '../Screens/Customers/CustomerHome/CustomerView';
// import Spinner from "react-bootstrap/Spinner";
// import LoginForm from '../Auth/LoginForm';
// import ProviderForm from '../Screens/Providers/ProviderForm';


function App(props) {
  const [isAuth, setIsAuth] = useState(null);
  const navigate = useNavigate();
  const [loggedUser, setLoggedUser]=useState();

  useEffect(() => {
    const checkAuth = async () => {
      const response = await fetch("/dj-rest-auth/user/");
      
      
      if (!response.ok) {
        setIsAuth(false);
        navigate("home");
      } else {
        navigate("home");
        setIsAuth(true);
        
      }
      // const indata = await fetch("/dj-rest-auth/user/");
      // const data = await indata.json();
      // setLoggedUser({...data});
      // console.log("logged data", data);
    };

    
      


    setTimeout(checkAuth, 1000);
  }, []); 

  // useEffect(() => {
  //   console.log("second fetch")
  //   const checkUser = async () => {
  //     const response2 = await fetch("/dj-rest-auth/user/");
  //     // const indata = await fetch("/dj-rest-auth/user/");
  //     const data = await response2.json();
  //     setLoggedUser({...data});
  //     console.log("logged data", {...data});
  //   };
  //   setTimeout(checkUser, 1000);
  // }, []); 
  
  
  // eslint-disable-line react-hooks/exhaustive-deps
  // console.log("Results after fetch ",loggedUser,isAuth);

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
        <Outlet context={{ setIsAuth, navigate, loggedUser }} />
      </Container>
      <div className="App"></div>

      {/* {<ProviderForm loggedUser={loggedUser.id}/>} */}
      
    
    </>
    
  );
}

export default App;
