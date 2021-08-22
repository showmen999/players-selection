import React, { useEffect, useState } from 'react';
import playerData from '../../Data/data.json';
import Cart from '../Cart/Cart';
import Players from '../Players/Players';
import './Display.css';

const Display = () => {
    const[players,setPlayers] =useState([])
    useEffect(()=>{
        setPlayers(playerData);
        // console.log(playerData);
    }
    ,[])
    const[cart,setCart] = useState([])

    const handleAddPlayer = (players) => {
        const newCart = [...cart,players]
        setCart(newCart);
    }
    return (
        <div>
           <div className="playerinfo">
                   <div className='display'>
                   {
                        players.map(pl => <Players handleAddPlayer = {handleAddPlayer} players ={pl}></Players>)
                   }
                   </div>
           </div>
           <div className="selectedPlayersCart">
                   <Cart cart={cart}></Cart>
           </div>
        </div>
    );
};

export default Display;