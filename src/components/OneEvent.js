import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export default class OneEvent extends Component {


    render() {
        const { event, index } = this.props
        return (
            <div>
                <Link to={`/${index}`}><h2>{event.LinkTitleText}</h2></Link>
                <p>{index}</p>
                
            </div>
        )
    }
}

