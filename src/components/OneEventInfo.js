import React from 'react'


export default function OneEventInfo(props) {
    console.log(props)
    const { oneEvent } = props
    return (
        <div>
            <h1>Event: {oneEvent.LinkTitleText}</h1>
            <h4>Price: {oneEvent.MinPrice}</h4>
            <h5>{oneEvent.IsSoldOut ? "SOLD OUT" : null}</h5>
            <h5>{oneEvent.IsSellingFast ? "Selling Quickly!" : null}</h5>
            <h4>Time: {oneEvent.Day}, {oneEvent.Date} at {oneEvent.Time}</h4>
            <h6>{oneEvent.HeadingTowardsLimitedStockMessage}</h6>
            <div>
                <p>Available Tickets: {oneEvent.AvailableTicketsNumber}</p>
                <p>Country: {oneEvent.VenueCountry}</p>
                <p>City: {oneEvent.VenueCity}</p>
                <p>{oneEvent.VenueName}</p>
                <p>Capacity: {oneEvent.VenueCapacity}</p>
                <h5>{oneEvent.VenueDescription}</h5>
            </div>
            
        </div>
    )
}

