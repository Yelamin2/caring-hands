import {BrowserRouter, Routes, Route} from "react-router-dom";
import App from "../App/App";
import CustomerProfile from "../Screens/Customers/CustomerProfile";
import LoginForm from "../Auth/LoginForm";
import Registeration from "../Auth/Registration";
import CustomerView from "../Screens/Customers/CustomerHome/CustomerView";
import Landing from "../Screens/Landing";
// import ProviderLogin from "../Screens/Providers/ProviderLogin";
import ProfileForm from '../Screens/ProfileForm';
import Profile from "../Screens/Profile";
import ProviderView from "../Screens/Providers/ProviderHome/ProviderView";
import ProviderForm from "../Screens/Providers/ProviderForm";
import ProviderList from "../Screens/Customers/ProviderList";
import CustomerApp from "../Screens/Customers/CustomerHome/CustomerApp";
import LoggedVisits from "../Screens/Providers/ProviderHome/LoggedVisits";

function Router(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />}>
                <Route path='home' element={<Landing />}/>
                <Route path='profile' element={<Profile />}/>
                <Route path="login" element={<LoginForm />} />
                <Route path='registeration' element={<Registeration />}/>
                <Route path='customer' element={<CustomerView />}/>
                <Route path='form' element={<ProfileForm />}/>
                <Route path='providerForm' element ={<ProviderForm />}/>
                <Route path='provider' element={<ProviderView />}/>
                <Route path = 'list' element={<ProviderList />}/>
                <Route path = 'selection' element={<CustomerApp />}/>
                <Route path ='logedvisits' element={<LoggedVisits />}/>
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