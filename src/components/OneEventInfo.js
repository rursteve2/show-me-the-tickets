import React from 'react'


export default function OneEventInfo(props) {
    const { oneEvent } = props
    return (
        <div role="list" className="ui list">
            <h1 role="listitem" className="item">Event: {oneEvent.LinkTitleText}</h1>
            <h4 role="listitem" className="item">Price: {oneEvent.MinPrice}</h4>
            <h5>{oneEvent.IsSoldOut ? "SOLD OUT" : null}</h5>
            <h5>{oneEvent.IsSellingFast ? "Selling Quickly!" : null}</h5>
            <h4 role="listitem" className="item">Time: {oneEvent.Day}, {oneEvent.Date} at {oneEvent.Time}</h4>
            <h6 role="listitem" className="item">{oneEvent.HeadingTowardsLimitedStockMessage}</h6>
            <div>
                <p role="listitem" className="item">Available Tickets: {oneEvent.AvailableTicketsNumber}</p>
                <p role="listitem" className="item">Country: {oneEvent.VenueCountry}</p>
                <p role="listitem" className="item">City: {oneEvent.VenueCity}</p>
                <p role="listitem" className="item">{oneEvent.VenueName}</p>
                <p role="listitem" className="item">Capacity: {oneEvent.VenueCapacity}</p>
                <h5 role="listitem" className="item">{oneEvent.VenueDescription}</h5>
            </div>
            
        </div>
    )
}

