import { useState, useEffect } from "react";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Button from "react-bootstrap/esm/Button";
import Card from 'react-bootstrap/Card';
import { useOutletContext } from "react-router-dom";

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


function ProviderList(props){

    const[providerList, setProviderList] = useState(INITIAL_PROVIDER);
    const[provider, setProvider]= useState([]);
    const [providerSelect, setProviderSelect] = useState([]);
    const [list, setList]= useState([]);
    const [rawList, setRawList]= useState([]);
    const [mylistView, setMylistView]= useState([]);

    const { user} = useOutletContext();
    console.log(user.id, user.company_name);


 
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

    console.log("Selected Provides ::", providerList);


    const providersHTML = providerList.map((provider, id) =>{
        
        return (<Col lg = {3} key={id}  >
            <Card border="secondary"
             style={{ width: '18rem' , 
             backgroundColor: 'rgb(138, 208, 219)', 
             boxShadow: "10px 10px 9px SaddleBrown"
            }}
             className=" text-center">
                <p ></p>
            <p >{provider.company_name}</p>
            <p >{provider.address1} {provider.address2}</p>
            
            <p>{provider.city}  {provider.zip}</p>
            <p></p>
            <Button variant="info"  
            style={{ width: '5rem', 
            alignSelf:"center", 
            backgroundColor:""}} 
            onClick={()=> props.setSelectedProvider(list)
            } type="button">Select</Button>
            <p> </p>
            </Card>
            <p></p>
       </Col>);}
    );
    
    const  mylistViewHTML = mylistView.map((list,id) =>{
        if (list.is_provider==true && list.company_name != undefined){
        return (<Col lg = {4} key={id} >
            <Card border="secondary"
             style={{ width: '20rem' , 
             backgroundColor: 'LightGoldenrodYellow', 
             boxShadow: "10px 10px 9px SaddleBrown",
             marginTop:20
            }}
             className=" text-center">
                <p></p>
            <p style={{fontWeight:"bold"}}>{list.company_name}</p>
            <p style={{marginBottom:5}}>{list.address1} {list.address2}</p>
            <p style={{marginBottom:15}}>{list.city}  {list.zip}</p>
            
            <Button  
            style={{ width: '5rem', 
            alignSelf:"center", 
            backgroundColor:'PaleTurquoise', 
            color:'black'}} 
            onClick={()=> props.setSelectedProvider(list)
            } type="button">Select</Button >
            <p> </p>
    
            </Card >
            <p></p>

            
            
            
       </Col>);}
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
       <Row>
        {mylistViewHTML}
        </Row>
       
       <Row>
         {/* {providersHTML}, */}
         </Row>
       </>
    
    )
}

export default ProviderList