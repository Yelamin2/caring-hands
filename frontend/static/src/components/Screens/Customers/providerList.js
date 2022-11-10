import { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";

const INITIAL_PROVIDER=[{
    id:1,
    company_name: "1ST CHOICE HOME CARE OF SC",
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
    company_name: "A INTEGRITY HOME CARE SERVICE",
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
    company_name: "BLESSED WITH GOODNESS LLC ",
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
    company_name: "ALLEGIANT QUALITY HOME CARE LLC ",
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
    company_name: " CIRCLE OF LIFE DIVINE CARE SERVICES LLC",
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
    company_name: "PRIME HOME CARE SERVICES ",
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
    company_name: "PALMETTO HOME CARE SERVICE ",
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
    company_name: "CAPITAL HEALTH SERVICE ",
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
    company_name: "IN LOVING HANDS HOME CARE AGENCY ",
    address1:"314 W GEORGIA RD ",
    address2:"",
    city:"Simpsonville",
    state:"SC",
    zip:"29681",
    license:"IHCP-0538 ",
    expiration:"03/31/2023  "

}];

    const any= [{username:"",
    address1:"",
    company_name:"",
    address2:"",
    is_customer:"",
    is_provider:"",
    city:"",
    zip:"",
    }];
function ProviderList(props){

    const[providerList, setProviderList] = useState(INITIAL_PROVIDER);
    const[provider, setProvider]= useState([]);
    const [providerSelect, setProviderSelect] = useState([]);
    const [list, setList]= useState([]);
    const [rawList, setRawList]= useState([]);
    const [mylistView, setMylistView]= useState([]);


    // const addProvider = (item) =>{
    //     setProviderSelect([...providerSelect, item]);
        
    // }
    useEffect(() => {
        const fetchUserList = async () => {
            const response = await fetch("/api/v1/users/list/");
            if (!response.ok){
                if(!response.status === 404){
                    throw Error("Oops. Something went wrong!");
                }
                return;
            }
            const data = await response.json();
            setMylistView([...data]);
            
        };
        fetchUserList();
        
    },[]);
    console.log("This is my ListView", mylistView);
    console.log("This is my providerList", providerList);

   


    function handleClick(item) { 
        // console.log("I clicked provider ", provider.name);
        setProviderSelect([
            
        {
            name: item.company_name,
            address1: item.address1,
            is_provider: item.is_provider,
            
        }]);
        console.log("Selected Provides ::", providerSelect);
        // setProviderSelect([...providerSelect, 
        //     {
        //         //  name: list.company_name,
        //         address1: list.address1,
        //     }]);
        //     console.log("Selected Providers ::", providerSelect);
    }
    console.log("Selected Provides ::", providerSelect);



    
    

    const providersHTML = providerList.map((provider, id) =>{
        return (<Col lg = {4} key={id}>
        <ul >
            <p >{provider.company_name}</p>
            <p >{provider.address1} {provider.address2}</p>
            <p></p>
            <p>{provider.city}  {provider.zip}</p>
            <p></p>
            <button onClick={()=> handleClick(provider)
            } type="submit" as="input">Select</button>
        </ul></Col>);}
    );
    
    const  mylistViewHTML = mylistView.map((list,id) =>{
        return (<Col lg = {4} key={id}>
        <ul >
            <p >{list.username} {list.company_name}</p>
            <p >{list.address1} {list.address2}</p>
            <p></p>
            <p>{list.city}  {list.zip}</p>
            <p></p>
            <button onClick={()=> handleClick(list)
            } type="submit" as="input">Select</button>
        </ul></Col>);
    });

    // if(listView != []){}
    //     );
    //     return listViewHTML;
    // }else {
    //     const listViewHTML={};
    //     return listViewHTML;
    // }

    

    return(
     
       <>
       {mylistViewHTML}
       <Row>
         {providersHTML},
         </Row>
       </>
    
    )
}

export default ProviderList