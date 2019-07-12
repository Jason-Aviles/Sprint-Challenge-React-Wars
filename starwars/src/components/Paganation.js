import React from 'react';

const Paganation = (props) => {
    console.log(props)
    return (
        <div>
            <a href={` ${() =>props.getCharacters(props.next)}`}>next</a>
            <a href={` ${() =>props.getCharacters(props.prev)}`}>prev</a>
        </div>
    );
}

export default Paganation;
