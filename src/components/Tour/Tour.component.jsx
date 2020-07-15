import React, { Component } from 'react'
import './tour.style.scss'

export default class Tour extends Component {

    constructor() {
        super()
        this.state = {
            showInfo: false
        }
    }

    handleClick = () => {
        this.setState({
            showInfo: !this.state.showInfo
        })
    }

    render() {
        const {city, img, name, info, id} = this.props.tour
        const {removeTour} = this.props
        return (
            <div className='tour'>
                <div className='img-container'>
                    <img src={img} alt="Location"/>

                    {/* Font Awesome close button */}
                        <span className='close-btn' onClick={() => {removeTour(id)}}>
                            <i className='fa fa-window-close ' />
                        </span>
                </div>
                {/* End of image container div */}

               <div className='tour-info'>
                    <h3>{city}</h3>
                    <h4>{name}</h4>
                    <h5>
                        Info 
                        <span onClick={this.handleClick}>
                            <i className='fa fa-caret-down' />
                        </span>
                    </h5> 
                   {this.state.showInfo &&  <p>{info}</p>}
               </div>
            </div>
        )
    }
}
