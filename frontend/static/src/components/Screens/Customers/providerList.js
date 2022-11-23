import { useState, useEffect } from "react";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Button from "react-bootstrap/esm/Button";
import Card from 'react-bootstrap/Card';
import { useOutletContext } from "react-router-dom";
import Form from 'react-bootstrap/esm/Form';



let zip=[];
function ProviderList(props){

    
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


   
    const  mylistViewHTML = mylistView.map((list,id) =>{
        <Form.Select name="client" required>
                  <option>Select customer</option>
                  <option>Select customer</option>
                  <option>{zip}r</option></Form.Select>
        if (list.is_provider===true && list.company_name != undefined){
            zip.push(list.zip);
            <Form.Select name="client" required>
            <option>Select customer</option>
            <option>Select customer</option>
            <option>{list.zip}r</option></Form.Select>
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
       console.log("ZIP",new Set(zip)) ;
       
    });

 

    

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