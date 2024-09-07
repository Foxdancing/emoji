import React from 'react'
import './main.css'
import Card from '../Card/Card'


export default function Main() {
  return (
    <div className='main'>
        <div className='field'>
            <input 
            onChange={event => console.log(event.target.value)}
            type='text'/>
        </div>
        
       <Card></Card>
    </div>
  )
}
