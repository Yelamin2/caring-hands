import { useState } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";

const INITIAL_PROVIDER=[{
    id:1,
    name: "1ST CHOICE HOME CARE OF SC",
    address1:"439 CONGAREE RD ",
    address2:"STE 13 A",
    city:"Greenville",
    state:"SC",
    zip:"29607",
    license:"IHCP-1767",
    expiration:"09/30/2023"

},
{
    id:2,
    name: "A INTEGRITY HOME CARE SERVICE",
    address1:"109-A PILGRIM RD ",
    address2:" ",
    city:"Greenville",
    state:"SC",
    zip:"29607",
    license:"IHCP-1339",
    expiration:"11/30/2023"

},
{
    id:3,
    name: "BLESSED WITH GOODNESS LLC ",
    address1:"716 E FAIRFIELD RD   ",
    address2:"UNIT 120 ",
    city:"Greenville",
    state:"SC",
    zip:"29605",
    license:"IHCP-0591",
    expiration:"10/31/2023 "

},
{
    id:4,
    name: "ALLEGIANT QUALITY HOME CARE LLC ",
    address1:" 210 WEST STONE AVE  ",
    address2:"UNIT UL1 ",
    city:"Greenville",
    state:"SC",
    zip:"29609 ",
    license:"IHCP-1211 ",
    expiration:"05/31/2023  "

},

{
    id:5,
    name: " CIRCLE OF LIFE DIVINE CARE SERVICES LLC",
    address1:" 1200 WOODRUFF RD  ",
    address2:"A-3 STE 138 ",
    city:"Greenville",
    state:"SC",
    zip:"29607",
    license:"IHCP-1748 ",
    expiration:" 09/30/2023 "

},
{
    id:6,
    name: "PRIME HOME CARE SERVICES ",
    address1:"105 ARBORDALE LN ",
    address2:"",
    city:"Simpsonville",
    state:"SC",
    zip:"29680",
    license:"IHCP-0811 ",
    expiration:"01/31/2023  "

},
{
    id:7,
    name: "PALMETTO HOME CARE SERVICE ",
    address1:" 879 NE MAIN ST",
    address2:" UNIT B",
    city:"Simpsonville",
    state:"SC",
    zip:"29681",
    license:"IHCP-0888 ",
    expiration:" 07/31/2023 "

},
{
    id:8,
    name: "CAPITAL HEALTH SERVICE ",
    address1:"526 S MAIN ST ",
    address2:"",
    city:"Simpsonville",
    state:"SC",
    zip:"29681",
    license:"IHCP-0028 ",
    expiration:"12/31/2022  "

},
{
    id:9,
    name: "IN LOVING HANDS HOME CARE AGENCY ",
    address1:"314 W GEORGIA RD ",
    address2:"",
    city:"Simpsonville",
    state:"SC",
    zip:"29681",
    license:"IHCP-0538 ",
    expiration:"03/31/2023  "

}];
function ProviderList(addProvider){

    const[providerList, setProviderList] = useState(INITIAL_PROVIDER);
    const[provider, setProvider]= useState([]);

    function handleClick(provider) {
        console.log("I clicked provider ", provider.name);
        addProvider(
            {
               name: provider.name,
            }
        )
    }
    

    const providersHTML = providerList.map((provider, id) =>{
        return (<Col lg = {4} key={id}>
        <ul >
            <p >{provider.name}</p>
            <p >{provider.address1} {provider.address2}</p>
            <p></p>
            <p>{provider.city}  {provider.zip}</p>
            <p></p>
            <button onClick={()=>handleClick(provider)} type="submit" as="input">Select</button>
        </ul></Col>);}
    );

    return(
     
       <>
       <Row>
         {providersHTML},
         </Row>
       </>
    
    )
}

export default ProviderList