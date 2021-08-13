import React from 'react'
import {Link} from 'react-router-dom'
const BeerCard = (props) => {
    return (
        <div className='beerCard'>
            <Link to = {"/beers/" + props.id}>
            <div className = "beerCardImageContainer">
                <img className="beerImage" src={props.image} alt="" />
            </div>
            <div>
                <h3 className='BeerCardTitle'>{props.name}</h3>
                <p className='BeerCardTagLine'>{props.tagline}</p>
                <p className='BeerCardCreatedBy'>Created by : {props.contributedBy}</p>
            </div>
            </Link>
        </div>
    )
}

export default BeerCard
