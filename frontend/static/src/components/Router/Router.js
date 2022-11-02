import {BrowserRouter, Routes, Route} from "react-router-dom";
import App from "../App/App";
import CustomerProfile from "../Screens/Customers/ProfileCustomer";
import LoginForm from "../Auth/LoginForm";
import Registeration from "../Auth/Registration";
import CustomerView from "../Screens/Customers/CustomerHome/CustomerView";
import Landing from "../Screens/Landing";
// import ProviderLogin from "../Screens/Providers/ProviderLogin";
import ProfileForm from '../Screens/ProfileForm';
import Profile from "../Screens/Profile";
import ProviderView from "../Screens/Providers/ProviderHome/ProviderView";
import ProviderForm from "../Screens/Providers/ProviderForm";

function Router(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />}>
                
                <Route path='home' element={<Landing />}/>
                <Route path='profile' element={<Profile />}/>
                <Route path="login" element={<LoginForm />} />
                <Route path='registeration' element={<Registeration />}/>
                <Route path='Customer' element={<ProviderView />}/>
                <Route path='form' element={<ProfileForm />}/>
                <Route path='providerForm' element ={<ProviderForm />}/>

            </Route>
            <Route
          path="*"
          element={
            <main>
              <p>There is nothing here!</p>
            </main>
          }
        />
        </Routes>
        </BrowserRouter>

    )
}

export default Router