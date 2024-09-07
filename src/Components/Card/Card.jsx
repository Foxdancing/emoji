import React from 'react'
import './card.css'

export default function Card({emoji, serch}) {
 console.log(serch);

  return (
    <div className='wrap'>
        
        {emoji.map(elem => (
          elem.title.includes(serch)))}

        {emoji.map ((elem, index) => (
            <div className='cards'>
                <p className='symbol'>{elem.symbol}</p>
                <h3>{elem.title}</h3>
                <p className='keywords'>{elem.keywords}</p>
            </div>
        ))}
    </div>
  );
}
