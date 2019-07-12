import React from 'react';
import Charactersitems from './Charactersitems'

const CharactersList = (props) => {
    
    return (
        <div className='cards'>
        { props.starwarsChars.map(
            (item)=>{
              return  <Charactersitems key={item.created} item={item}/>
            }
        )
          }
        </div>
    );
}

export default CharactersList;
