import React from 'react'

import NavMain from './NavMain'

const BeerDetails = (props) => {
    return (
        <div>
        {
            <>
                <div className="beerCardImageContainer">
                    <img className="beerImage" src={props.beer.image_url} alt="" />
                </div>
                <div>
                    <h3 className='BeerCardTitle'>{props.beer.name}</h3>
                    <p className='BeerCardTagLine'>{props.beer.tagline}</p>
                    <p className='BeerCardTagLine'>{props.beer.attenuation_level}</p>
                    <p className='BeerCardTagLine'>{props.beer.description}</p>
                    <p className='BeerCardCreatedBy'>Created by : {props.beer.contributed_by}</p>
                    <p className='BeerCardCreatedBy'>{props.beer.first_brewed}</p>
                </div>
            </>
        }
    </div>
    )
}

export default BeerDetails
