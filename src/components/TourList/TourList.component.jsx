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
    render() {

        const {tours} = this.state
        return (
            <section className='tourlist'>
                {tours.map(tour => <Tour key={tour.id}tour={tour}/>)}               
            </section> 
        )
    }
}
