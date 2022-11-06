import React from "react"
import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import defaultProfileImage from "../../images/profile.jpg"


function Profile(){
    const[profile , setProfile]= useState({avatar: null});
    const [preview, setPreview] = useState(defaultProfileImage)

    useEffect(() => {
        const fetchUserProfile = async () => {
            const response = await fetch("/api/v1/users/profiles/user/");
            if (!response.ok){
                if(!response.status === 404){
                    throw Error("Oops. Something went wrong!");
                }
                return;
            }
            const data = await response.json();
            setProfile({...data});
            setPreview(data.avatar);
        };
        fetchUserProfile();
    },[]);

    const handleImage = (event) => {
        const file = event.target.files[0];
        saveImage(file);
        const reader = new FileReader();

        reader.onloadend = async () => {
            setPreview(reader.result);
        };
        reader.readAsDataURL(file);
    };

    const saveImage = async (file) => {
        const formData = new FormData();
        formData.append("avatar", file);

        const {id} = profile;
        const options = {
            method: `${id ? "PUT" : "POST"}`,
            headers: {
                "X-CSRFToken": Cookies.get('csrftoken'),   
            },
            body: formData,
        };
        const response = await fetch(
            `/api/v1/users/profiles/${id ? "user/" : ""}`,
            options
        );
        if (!response.ok) {
            throw Error('Oops. Something went wrong!');
        }
    };

    return(
        <> 
        <Card style={{ width: '18rem' }}>
            <div className= "image-container">
            <Card.Img variant="top" src={preview} />
            <input type="file" name="avatar" onChange={handleImage} />
            </div>
        <Card.Body>
            <Card.Title>{profile.username?.toUpperCase()}</Card.Title>
            
        </Card.Body>
    </Card></>
    )
}

export default Profile;