import {BrowserRouter, Routes, Route} from "react-router-dom";
import App from "../App/App";
import CustomerProfile from "../Screens/Customers/CustomerProfile";
import LoginForm from "../Auth/LoginForm";
import Registeration from "../Auth/Registration";
import CustomerView from "../Screens/Customers/CustomerHome/CustomerView";
import Landing from "../Screens/Landing";
import ProviderLogin from "../Screens/Providers/ProviderLogin";
import ProviderProfile from "../Screens/Providers/ProviderProfile";
import ProviderView from "../Screens/Providers/ProviderHome/ProviderView";

function Router(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />}>
                
                <Route path='home' element={<Landing />}/>
                <Route path='profile' element={<CustomerProfile />}/>
                <Route path="login" element={<LoginForm />} />
                <Route path='registeration' element={<Registeration />}/>
                <Route path='Customer' element={<ProviderView />}/>

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