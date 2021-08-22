import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    console.log(cart);
    // let totaBudgets = ' ';
    // for (let i = 0; i < cart.length; i++) {
    //     const players = cart[i];
    //     totaBudgets = totaBudgets+' '+players.name;    
    // }
    const playingXI = cart.reduce((sum,players)=>sum+' '+players.name,'');
    const totalBudgets = cart.reduce((sum,players)=>sum+players.salary,0);
    return (
        <div>
            <h1>Today Playing XI</h1>
            <h3>Selection no: {cart.length}</h3>
            <h3>Selected players:{playingXI}</h3>
            <h4>Total Budgets: ${totalBudgets}</h4>
        </div>
    );
};

export default Cart;