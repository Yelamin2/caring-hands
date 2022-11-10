import Carousel from 'react-bootstrap/Carousel';
import React from 'react';
import ball3 from "./../../images/ball3.jpg"
import nurse2 from "./../../images/nurse2.png"
import people1 from "./../../images/people1.jpg"

function Landing(){
    

    return (
        <div>
        This is the Landing Page for the Application Homepage        
        <Carousel>
        <Carousel.Item>
            <img
            className="d-block w-100"        
            src={people1}
            alt="First slide"
            />
            <Carousel.Caption>
            <h3>We get you company</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
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
            <p> </p>
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
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>


        </div>
    )

}

export default Landing