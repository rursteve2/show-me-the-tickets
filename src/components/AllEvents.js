import React from 'react'
import OneEvent from './OneEvent'


export default function AllEvents(props) {
    console.log(props)
    return (
        <div>
            <p>All Events</p>
            {props.data && props.data.Items.map((event, index) => (
            <OneEvent
            event={event}
            key={index}
            index={index}
            />
            ))}
            
        </div>
    )
}

