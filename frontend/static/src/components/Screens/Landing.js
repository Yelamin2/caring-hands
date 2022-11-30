import Carousel from 'react-bootstrap/Carousel';
import React from 'react';
import ball3 from "./../../images/ball3.jpg"
import nurse2 from "./../../images/nurse2.png"
import people1 from "./../../images/people1.jpg"
import caring from "./../../images/CaringHands.jpg"

function Landing(){
    

    return (
        <div style={{marginTop:50}}>
            {/* <h1 style={{textAlign:"center", color:'MintCream', fontSize:50, padding:20}}>Caring Hands</h1> */}
            
        <Carousel>
        <Carousel.Item>
            <img
            className="d-block w-100"        
            src={people1}
            alt="First slide"
            />
            <Carousel.Caption>
            <h3>We get you company</h3>
            <p>If want to have someone to talk to and do activites.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={nurse2}
            alt="Second slide"
            />
            <Carousel.Caption>
            <h3>Caring hands</h3>
            <p>Help you and your loved ones with everyday life tasks</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={ball3}
            alt="Third slide"
            />
            <Carousel.Caption>
            <h3>Keep you active</h3>
            <p>
                When yoou need someone to support you to stay active and healthy.
            </p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={caring}
            alt="Forth slide"
            />
            <Carousel.Caption>
            <h3>Gentle and Caring</h3>
            <p>
                Gentle and caring staff.
            </p>
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>


        </div>
    )

}

export default Landing