import { useState, useEffect } from "react";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Button from "react-bootstrap/esm/Button";
import Card from 'react-bootstrap/Card';
import { useOutletContext } from "react-router-dom";
import Form from 'react-bootstrap/esm/Form';



let zip=[], ziplist=[], city=[], citylist=[], filtered, mylistViewHTML;
function ProviderList(props){

    
    const[provider, setProvider]= useState([]);
    const [providerSelect, setProviderSelect] = useState([]);
    const [list, setList]= useState([]);
    const [rawList, setRawList]= useState([]);
    const [mylistView, setMylistView]= useState([]);
    const [filter, setFilter] =useState(null)
    


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
    setTimeout(100);
    console.log(mylistView);

    useEffect(() => {
        const createlist = ()=>{
        console.log("FILTER",filter);

        if (filter===null){
            console.log("NO FILTER APPLIED");
        mylistViewHTML = mylistView.map((list,id) =>{
           
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
        
            
       
        });}
        
        if(filter==="Active"){  mylistViewHTML = filtered.map((filter,id) =>{
            
            if (filter.is_provider===true && filter.company_name != undefined){
                console.log("FILTERED LIST", filter.company_name);
                
            
            return (<Col lg = {4} key={id} >
                <Card border="secondary"
                style={{ width: '20rem' , 
                backgroundColor: 'LightGoldenrodYellow', 
                boxShadow: "10px 10px 9px SaddleBrown",
                marginTop:20
                }}
                className=" text-center">
                    <p></p>
                <p style={{fontWeight:"bold"}}>{filter.company_name}</p>
                <p style={{marginBottom:5}}>{filter.address1} {filter.address2}</p>
                <p style={{marginBottom:15}}>{filter.city}  {filter.zip}</p>
                
                <Button  
                style={{ width: '5rem', 
                alignSelf:"center", 
                backgroundColor:'PaleTurquoise', 
                color:'black'}} 
                onClick={()=> props.setSelectedProvider(filter)
                } type="button">Select</Button >
                <p> </p>
        
                </Card >
                <p></p>

                
                
            
        </Col>);}
        
            ;
        
        });}}
        setTimeout(createlist(), 1000);;},
            [filtered,mylistView]);

    if (zip > []){
        
        ziplist= new Set(zip);
        ziplist =Array.from(ziplist);
        console.log("ZIP", ziplist);
       
    } 
    if (city > []){
        
        citylist= new Set(city);
        citylist =Array.from(citylist);
       
    } 
    const sortByCity= (e) => {
        setFilter(null);
        
        if (e.target.value==="Sort by City"){
            setFilter(null);
            filtered= mylistView;
        } else{ 
            setFilter("Active")
            filtered= mylistView.filter(city => {
            return city.city === e.target.value;
        })};
           
       
        console.log("CITY Filtered",filter,Object.values(mylistView),e.target.value);
        
      };


    const sortByZip=(e) => {
        console.log(e.target.value);
        setFilter(null);
        
        if (e.target.value==="Sort by Zip Code"){
            setFilter(null)
            filtered= mylistView;
        } else {
            setFilter("Active")
            filtered= mylistView.filter(city => {
            return city.zip === e.target.value;
        });
        // setFiltered(listedzip);
        console.log("ZIP FILTERED",filtered);
    }
           
       
        console.log("ZIP Filtered",filtered,Object.values(mylistView),e.target.value, list);
        
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