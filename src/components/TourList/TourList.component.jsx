import React, { Component } from 'react'
import './tourlist.style.scss'
import Tour from '../Tour/Tour.component'
import {tourData} from '../../tourData'

export default class TourList extends Component {
    constructor() {
        super() 
        this.state = {
            tours: tourData
        }
    }

    removeTour = id => {
        const {tours} = this.state
        this.setState({
            tours: tours.filter(item => id !== item.id)
        })
    }

    render() {

        const {tours} = this.state
        return (
            <section className='tourlist'>
                {tours.map(tour => <Tour key={tour.id}tour={tour} removeTour={this.removeTour}/>)}               
            </section> 
        )
    }
}
