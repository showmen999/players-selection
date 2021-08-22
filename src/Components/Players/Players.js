import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import './Players.css';

const Players = (props) => {
    // console.log(props);
    const {name,country,strikeRate,salary,img} = props.players;
    const handleAddPlayer = props.handleAddPlayer;
    return (
       <div className="players">
         <div className="boxPlayers">
            <img src={img} alt="" />
            <h3>{name}</h3>
            <h4>from:{country}</h4>
            <p>Strike Rate:{strikeRate}</p>
            <p>${salary}</p>
            <button onClick={() => handleAddPlayer(props.players)} className="button"><FontAwesomeIcon icon={faUserPlus} /> Add Player</button>
        </div>
       </div>
    );
};

export default Players;