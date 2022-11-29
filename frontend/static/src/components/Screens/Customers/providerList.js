import { useState, useEffect } from "react";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Button from "react-bootstrap/esm/Button";
import Card from 'react-bootstrap/Card';
import { useOutletContext } from "react-router-dom";
import Form from 'react-bootstrap/esm/Form';



let zip=[], ziplist=[], city=[], citylist=[];
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
            city.push(list.city);
            // <Form.Select name="client" required>
            // <option>Select customer</option>
            // <option>Select customer</option>
            // <option>{list.zip}r</option></Form.Select>
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

    if (zip > []){
        
        ziplist= new Set(zip);
        ziplist =Array.from(ziplist);
       
    } 
    if (city > []){
        
        citylist= new Set(city);
        citylist =Array.from(citylist);
       
    } 
    const sortByCity= (e) => {
        // console.log(e.target.value);
        let filtered= Object.values(mylistView).filter(city => 
            e.target.value.includes(city)).reduce((obj, city) =>
            {obj[city] = mylistView[city];
            return obj;
        }, {}
            );
        console.log("Filtered",filtered,Object.values(mylistView));
        
      };


    const sortByZip=(e) => {
        console.log(e.target.value);
        
      };

 

    

    return(
     
       <>
      
        
        <Form> <Row>
            <Col lg={2}></Col>
        <Col lg={4}>
            <Form.Select onChange={sortByZip} name="zip" aria-label="Default select example">
                <option>Sort by Zip Code</option>
                {ziplist>[]? (ziplist.map((zip, index) =>( < option key={index}  value={zip} name="zip" >{zip}
                  </option>))):<option>No list</option>}
            </Form.Select>
            </Col> Or 
            <Col lg={4}>
            <Form.Select onChange={sortByCity} name="city" aria-label="Default select example">
                <option>Sort by City</option>
                {citylist>[]? (citylist.map((city, index) =>( < option key={index}  value={city} name="zip" >{city}
                  </option>))):<option>No list</option>}
            </Form.Select> </Col>
            <Col lg={2}></Col></Row>

        </Form>
       
       
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