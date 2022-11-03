import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import { handleError } from "../../utils/errorHandler";

function Header({ isAuth, setIsAuth, navigate }) {
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
      Cookies.remove("Authorization");
      navigate("/home/");
    }
  };
  return (
    <Navbar bg="dark" variant="dark" className="mb-3 px-3">
      <Nav className="ml-auto flex-grow-1">
        <Link className="navbar-expand navbar-nav nav-link" to="/home/">
          Home
        </Link><Link className="navbar-expand navbar-nav nav-link" to="/profile/">
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
        </Link>
        {isAuth ? ( <Link
          className="navbar-expand navbar-nav nav-link ms-auto"
          to="/form/"
        >
          Profile
        </Link>):(<Link className="navbar-expand navbar-nav nav-link ms-auto" to="/form/">Profile</Link>)}

       
        {isAuth ? (
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
        )}
      </Nav>
    </Navbar>
  );
}

export default Header;