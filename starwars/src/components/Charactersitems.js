import React from 'react';
import './StarWars.css'


const Characteritems = (props) => {
    
    return (
        <div className='items'>
          <h1>{props.item.name}</h1>
          <h2>Gender:<span>{props.item.gender}</span> </h2>
              <p>height:<span> {props.item.height}</span></p>
          
          <div className='bottom'>
          <p>Brith Year: {props.item.birth_year}</p>
          <h4>created:{props.item.created}</h4>
            </div>
        </div>
    );
}

export default Characteritems;
