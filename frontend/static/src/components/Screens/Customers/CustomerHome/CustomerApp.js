import React from "react";
import CustomerView from "./CustomerView";
import ProviderList from "../ProviderList";
import { useState } from "react";


function CustomerApp(){
    const [providerSelect, setProviderSelect] = useState([]);

    const addProvider = (item) =>{
        setProviderSelect([...providerSelect, item]);
        
    }

    console.log("Selected Provides ::", providerSelect)
    return(
        <>
        <ProviderList addProvider={addProvider}/>
        </>
    )
}

export default CustomerApp