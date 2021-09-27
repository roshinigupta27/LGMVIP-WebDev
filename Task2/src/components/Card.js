import React from 'react';
import './card.css';
const Card = ({ name, email, id, }) => {
  //Displays all the information in a card format
    return (
      <div className='tc grow bg-light-blue br2 pa5 ma3 dib bw2 shadow-10' id='card'>
       <div>
		  <br />
          <h3>{email}</h3>
		  <br />
          <h2>{name}</h2>
        </div>
        <br />
        <img alt='robots' id="image" src={`https://reqres.in/img/faces/${id}-image.jpg`} />
        
      </div>
    );
  }

export default Card;
