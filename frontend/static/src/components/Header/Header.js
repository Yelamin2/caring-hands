import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { Link ,useOutletContext} from "react-router-dom";
import Cookies from "js-cookie";
import LoginForm from "../Auth/LoginForm";
import { handleError } from "../../utils/errorHandler";
import { useEffect, useState } from "react";

function Header({ isAuth, setIsAuth, navigate,is_customer,user}) {

  const[loggedUser, setLoggedUser]= useState({username:""});
 
  
  // console.log("NewUSER FROM Header", isAuth,is_customer,"/n","NEWUSER",user,"/n","IS_CUSTOMER", user.is_customer)
// Check if the user is authorized with proper login token
  const handleLogout = async () => {
    const options = {
      method: "POST",
      headers: {
        "X-CSRFToken": Cookies.get("csrftoken"),
      },
    };

    const response = await fetch("/dj-rest-auth/logout/", options).catch(
      handleError
    );
    if (!response.ok) {
      throw new Error("Network response was not OK.");
    } else {
      setIsAuth(false);
      // setLoggedUser={username:""};
      Cookies.remove("Authorization");
      navigate('/home/');

    }
  };

 
  return (
    <Navbar bg="dark" variant="dark" className="mb-2 px-3">
      <Nav className="ml-auto flex-grow-1">
      <Link className="navbar-expand navbar-nav nav-link" to="/home/">
        Home
        </Link> 
        
        {isAuth && user.is_customer  ? ( <><Link
          className="navbar-expand navbar-nav nav-link ms-auto"
          to="/form/"
        >
          Profile
        </Link> <Link className="navbar-expand navbar-nav nav-link ms-auto" to="/selection/">
          Providers
        </Link> <Link className="navbar-expand navbar-nav nav-link ms-auto" to="/schedule/">
          Schedule
        </Link></>):
        isAuth && user.is_provider  ? ( <><Link className="navbar-expand navbar-nav nav-link ms-auto" to="/logedvisits/">
        LoggedVisit
      </Link><Link className="navbar-expand navbar-nav nav-link ms-auto" to="/provider/">
          ProviderView
        </Link><Link className="navbar-expand navbar-nav nav-link ms-auto" to="/invoice/">
          Invoice
        </Link><Link className="navbar-expand navbar-nav nav-link ms-auto" to="/providerform/">
          Profile
        </Link></>)
          :
        (<>
         
        </>)
          }



        {/* <Link className="navbar-expand navbar-nav nav-link" to="/profile/">
          Profile
        </Link><Link className="navbar-expand navbar-nav nav-link" to="/registeration/">
          Registeration
        </Link><Link className="navbar-expand navbar-nav nav-link" to="/Customer/">
          CustomerV
        </Link><Link className="navbar-expand navbar-nav nav-link" to="/provider/">
          ProviderView
        </Link><Link className="navbar-expand navbar-nav nav-link" to="/form/">
          ProfileForm
        </Link><Link className="navbar-expand navbar-nav nav-link" to="/providerform/">
          ProviderForm
        </Link><Link className="navbar-expand navbar-nav nav-link" to="/invoice/">
          Invoice
        </Link><Link className="navbar-expand navbar-nav nav-link" to="/selection/">
          Selection 
        </Link><Link className="navbar-expand navbar-nav nav-link" to="/logedvisits/">
        LoggedVisit
      </Link>   */}
        
        {/* {isAuth && user.is_customer  ? ( <Link
          className="navbar-expand navbar-nav nav-link ms-auto"
          to="/form/"
        >
          Profile
        </Link>):(<Link className="navbar-expand navbar-nav nav-link ms-auto" to="/form/">CustomerView</Link>)}

       
        {/* {isAuth ? (
          <Button
            variant="link"
            className="navbar-expand navbar-nav nav-link border-0"
            onClick={handleLogout}
          >
            Logout
          </Button>
        ) : (
          <Link className="navbar-expand navbar-nav nav-link" to="/login/">
            Login
          </Link>
        )} */}
        {/* {user == undefined? (
          <Link className="navbar-expand navbar-nav nav-link" to="/login/">
            CustomerFalse
          </Link>
        ): user.is_customer ? (
          <Link className="navbar-expand navbar-nav nav-link" to="/Customer/">
          CustomerV
        </Link>
          // <Button
          //   variant="link"
          //   className="navbar-expand navbar-nav nav-link border-0"
          // >
          //   Customer
          // </Button>
        ) : (
          <Link className="navbar-expand navbar-nav nav-link" to="/login/">
            Not Customer
          </Link>
        )

        } */}
        {isAuth ? (
          <Button
            variant="link"
            className="navbar-expand navbar-nav nav-link ms-auto border-0"
            onClick={handleLogout}
          >
            Logout
          </Button>
        ) : (
          <Link className="navbar-expand navbar-nav nav-link ms-auto" to="/login/">
            Login
          </Link>
        )}
        
      </Nav>
    </Navbar>
  );
}

export default Header;