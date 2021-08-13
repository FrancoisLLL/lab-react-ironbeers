import React from 'react'
import { Link } from "react-router-dom"
import HomePageCard from '../components/HomePageCard'
import beersPhoto from './../assets/beers.png'
import randomBeerPhoto from './../assets/random-beer.png'
import newBeerPhoto from './../assets/new-beer.png'


const HomePage = () => {

    return (
        <div >
            <h2>Home page</h2>
            <Link to="/beers">
                <HomePageCard title="All Beers" description="lorem" image={beersPhoto} />
            </Link>
            <Link to="/random-beer">
                <HomePageCard title="Random Beer" description="lorem" image={randomBeerPhoto} />
            </Link>
            <Link to="/new-beer">
                <HomePageCard title="New Beer" description="lorem" image={newBeerPhoto} />
            </Link>
        </div>
    )

}

export default HomePage
