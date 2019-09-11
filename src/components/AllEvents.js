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
        console.log(e.target.value)
        let newCity = this.props.data.Items.filter((el) => (el.VenueCity == e.target.value))
        console.log(newCity)
        this.setState({
            data: newCity
        })
    }


    render() {
    console.log(this.props)
    const { props } = this
        return (
            <div>
                <p>All Events</p>
                <select onChange={props.onChange} placeholder="Select City">
                    <option value="" disabled selected>Select City</option>
                {props.locations.map((city, key) => <option key={key} value={city}>{city}</option>)}
                </select>
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

