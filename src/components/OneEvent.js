import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export default class OneEvent extends Component {


    render() {
        const { event, index } = this.props
        return (
            <div className="ui segment">
                <Link to={`/${event.EventId}`}><h2 className="ui header">{event.LinkTitleText}</h2></Link>
                <div className="ui divider"></div>
                <div className="startinfo">
                    <p>Price: {event.MinPrice}</p>
                    <p className="sub header">{event.IsSellingFast ? "Selling fast!" : null}</p>
                    <p className="sub header">{event.IsSoldOut ? "SOLD OUT" : null}</p>
                </div>
            </div>
        )
    }
}

