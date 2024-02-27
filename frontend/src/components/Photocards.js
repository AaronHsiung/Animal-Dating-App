import React, { useState, useEffect } from 'react';
import { format } from "date-fns";
import { lightBlue, pink, grey } from '@mui/material/colors';
import PetsRoundedIcon from '@mui/icons-material/PetsRounded';
import WcRoundedIcon from '@mui/icons-material/WcRounded';
import TodayRoundedIcon from '@mui/icons-material/TodayRounded';
import MonitorWeightRoundedIcon from '@mui/icons-material/MonitorWeightRounded';
import EventAvailableRoundedIcon from '@mui/icons-material/EventAvailableRounded';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import './photocards.css';
import Modal from './Modal';

// Function to return true if pet's Availability is "Available"
const filterAvailable = (pets) => {
    return pets.petAvailability === "Available";
}

export default function Photocard() {
    // fetch and store full pet data
    const [fullPetData, setFullPetData] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/pets')
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            console.log(data);
            setFullPetData(data);
        })
        .catch(function(error) {
            console.log('Request failed', error);
            window.location.reload(false);
        });
    }, []);

    // array of pets (objects) that are "Available" for display on page
    const availablePets = fullPetData.filter(filterAvailable);

    const [likedPets, setLikedPets] = useState([]);

    const toggleLike = (petID) => {
        if (likedPets.includes(petID)) {
            setLikedPets(likedPets.filter(id => id !== petID));
        } else {
            setLikedPets([...likedPets, petID]);
        }
    };

    // modal states
    const [modal, setModal] = useState(false);
    const [pet, setPet] = useState(0);

    const toggleModal = (id) => {
        setPet(id);
        setModal(!modal);
    }

    // Prevents scrolling in main content when modal is open
    if (modal) {
        document.body.classList.add('active-modal')
    }
    else {
        document.body.classList.remove('active-modal')
    }

    // map each individual pet to photocard
    const petdata = availablePets.map((pet) => (
        <div className="photocard" key={pet.petID}>
            <div onClick={()=> {toggleModal(pet.petID);}}>
                <img
                    src={pet.petPicture}
                    height={400}
                    alt={pet.name}
                />
                <h2>{pet.petName}</h2>
                <ul>
                    <li><PetsRoundedIcon sx={{ fontSize: 16, color: lightBlue[900] }} /></li>
                    <li>{pet.petType}</li>
                    <li><WcRoundedIcon sx={{ fontSize: 16, color: lightBlue[900] }} /></li>
                    <li>{pet.petSex}</li>
                    <li><TodayRoundedIcon sx={{ fontSize: 16, color: lightBlue[900] }} /></li>
                    <li>{pet.petAge} yrs</li>
                    <li><MonitorWeightRoundedIcon sx={{ fontSize: 16, color: lightBlue[900] }} /></li>
                    <li>{pet.petWeight} lbs</li>
                    <li><EventAvailableRoundedIcon sx={{ fontSize: 16, color: lightBlue[900] }} /></li>
                    <li>{format(pet.addedData, 'MM/dd/yy')}</li>
                </ul>
                <h3>{pet.petAvailability}</h3>
            </div>

            <button className="like-button" onClick={() => toggleLike(pet.petID)}>
                {likedPets.includes(pet.petID) ? <FavoriteIcon color="error" /> : <FavoriteBorderIcon />} 
            </button>
        </div>
    ));

    return (
        <>
            <div className="photocards">{petdata}</div>

            {modal && (
                <div className="modal">
                    <div onClick={toggleModal} className="overlay"></div>
                    <div className="modal-content">
                        <Modal pet={availablePets.find(p => p.petID === pet)} />
                        <div className="modal-btns">
                            <button className="close-modal" onClick={toggleModal}>
                                <CloseRoundedIcon sx={{color: grey[900], fontSize: 36 }} />
                            </button>

                            <button className="like-modal" onClick={() => toggleLike(pet.petID)}>
                                {likedPets.includes(pet.petID) ? <FavoriteIcon sx={{color: pink[500], fontSize: 36 }} /> : <FavoriteBorderIcon sx={{color: pink[500], fontSize: 36 }}/>} 
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}


