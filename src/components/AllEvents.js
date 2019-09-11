import React, { Component } from 'react'
import OneEvent from './OneEvent'


export default class AllEvents extends Component {
    constructor() {
        super()
        this.state = {
            data: null
        }
    }



    onChange = (e) => {
        let newCity = this.props.data.Items.filter((el) => (el.VenueCity == e.target.value))
        this.setState({
            data: newCity
        })
    }


    render() {
    const { props } = this
        return (
            <div>
                <div>
                    <select onChange={props.onChange}>
                        <option value="" disabled selected>Select City</option>
                    {props.locations.map((city, key) => <option key={key} value={city}>{city}</option>)}
                    </select>
                </div>
                <div>
                    <p className="sort">Sort by:</p>
                    <select onChange={props.filterData} className="sort">
                        <option disabled selected>Select Option</option>
                        <option value="price">Price(Low to High)</option>
                        <option value="time">Date(Earliest first)</option>
                        <option value="ticketsleft">Tickets Left(Low to High)</option>
                    </select>
                </div>
                {props.data && props.data.map((event, index) => (
                <OneEvent
                event={event}
                key={index}
                index={index}
                />
                ))}
                
            </div>
        )
    }
}

