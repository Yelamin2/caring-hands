import {BrowserRouter, Routes, Route} from "react-router-dom";
import App from "../../App";
import CustomerLogin from "../Customers/CustomerLogin";
import CustomerRegisteration from "../Customers/CustomerRegistration";
import CustomerProfile from "../Customers/CustomerProfile";
import CustomerView from "../Customers/CustomerHome/CustomerView";

import ProviderLogin from "../Providers/ProviderLogin";
import ProviderRegisteration from "../Providers/ProviderRegisteration";
import ProviderProfile from "../Providers/ProviderProfile";
import ProviderView from "../Providers/ProviderHome/ProviderView";

function Router(){
    return(
        <BrowserRouter>
        <Routes>
            <Route>
                <Route path='Home' element={<></> }/>
                <Route path='Customer' element={<CustomerView />}/>
            </Route>
        </Routes>
        </BrowserRouter>

    )
}

export default Router