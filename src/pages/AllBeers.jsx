import axios from 'axios'
import NavMain from '../components/NavMain'
import React, { Component } from 'react'
import BeerCard from '../components/BeerCard';

export class AllBeers extends Component {


    state = {
        beers: null
    }

    componentDidMount() {
        axios
            .get("https://ih-beers-api2.herokuapp.com/beers")
            .then((response) => {
                console.log(response)
                this.setState({
                    beers: response.data,
                });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    render() {

        if (!this.state.beers) {
            return <div>
                <NavMain />
                <h2>
                    All beers
                </h2>
                <p>Loading ... </p>
            </div>
        }

        return (
            <div>
                <NavMain />
                {/* <pre>{JSON.stringify(this.state.beers,null,2)}</pre> */}
                <h2>
                    All beers
                </h2>
                {this.state.beers.map((item) => {
                    return (<BeerCard
                    id = {item._id}
                    image = {item.image_url}
                    name = {item.name}
                    tagline = {item.tagline}
                    contributedBy = {item.contributed_by}
                    />)
                })
            }
            </div>
        )
    }
}

export default AllBeers
