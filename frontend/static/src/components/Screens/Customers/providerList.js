import { useState, useEffect } from "react";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Button from "react-bootstrap/esm/Button";
import Card from 'react-bootstrap/Card';
import { useOutletContext } from "react-router-dom";
import Form from 'react-bootstrap/esm/Form';



let zip=[], ziplist=[], city=[], citylist=[], filtered, mylistViewHTML;
function ProviderList(props){

    
    // const[provider, setProvider]= useState([]);
    const [providerSelect, setProviderSelect] = useState([]);
    // const [list, setList]= useState([]);
    // const [rawList, setRawList]= useState([]);
    const [mylistView, setMylistView]= useState([]);
    const [action, setAction] =useState(null)
    
    const { user} = useOutletContext();
    
 
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
        
    },[]
    );

    function listproviders(sample){
        // zip=[];
        // city=[];
        console.log("My Sample",sample);
        mylistViewHTML = sample.map((sorted,id) =>{
        if (sorted.is_provider===true && sorted.company_name != undefined){
            zip.push(sorted.zip);
            city.push(sorted.city);
        return (<Col lg = {4} key={id} >
            <Card border="secondary"
            style={{ width: '20rem' , 
            backgroundColor: 'LightGoldenrodYellow', 
            boxShadow: "10px 10px 9px SaddleBrown",
            marginTop:20
            }}
            className=" text-center">
                <p></p>
            <p style={{fontWeight:"bold"}}>{sorted.company_name}</p>
            <p style={{marginBottom:5}}>{sorted.address1} {sorted.address2}</p>
            <p style={{marginBottom:15}}>{sorted.city}  {sorted.zip}</p>
            
            <Button  
            style={{ width: '5rem', 
            alignSelf:"center", 
            backgroundColor:'PaleTurquoise', 
            color:'black'}} 
            onClick={()=> props.setSelectedProvider(sorted)
            } type="button">Select</Button >
            <p> </p>
    
            </Card >
            <p></p>
        </Col>);}
    });
    if (zip > []){
        ziplist= new Set(zip);
        ziplist =Array.from(ziplist);
        console.log("ZIP", ziplist);
    } 
    if (city > []){
        citylist= new Set(city);
        citylist =Array.from(citylist);  
    } 
    
    console.log("expect Results it ran ", sample);
    return mylistViewHTML;
    };

    useEffect(() => {
        const createlist = ()=>{
            console.log("NO FILTER APPLIED");
            listproviders(mylistView);             
        }
        setTimeout(createlist(), 1000);;},
            [mylistView]
    );


    const sortByCity= (e) => {
        // setFilter(null);
        
        if (e.target.value==="Sort by City"){
            // setFilter(null);
            filtered= mylistView;
            listproviders(filtered);
        } else{ 
            // setFilter("Active");
            filtered= mylistView.filter(city => {
            return city.city === e.target.value; 
        });
        listproviders(filtered);};
        // console.log("CITY Filtered",filter,Object.values(mylistView),e.target.value); 
      };


    const sortByZip=(e) => {
        console.log(e.target.value);
        // setFilter("Active");
        if (e.target.value==="Sort by Zip Code"){
            setAction(null);
            filtered= mylistView;
            listproviders(filtered);
        } else {
            setAction("Active");
            filtered= mylistView.filter(city => {
            return city.zip === e.target.value;
        });
        let checker=document.getElementsByClassName('zipOption');
        // console.log("ZIP FILTERED",filtered);
        listproviders(filtered);
        console.log("ZIP Filtered",filtered,checker);
        
        }
        
      };
        
     
    return(
     
       <>  
        <Form> <Row>
            <Col lg={2}></Col>
        <Col lg={4}>
            <Form.Select onChange={sortByZip} name="zip" >
                <option className="zipOption">Sort by Zip Code</option>
                {ziplist>[]? (ziplist.map((zip, index) =>( < option key={index}  value={zip} name="zip" >{zip}
                  </option>))):<option>No list</option>}
            </Form.Select>
            </Col> Or 
            <Col lg={4}>
            <Form.Select onChange={sortByCity} name="city" >
                <option className="cityOption">Sort by City</option>
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