import React, { Component } from 'react'
import axios from 'axios'
import NavMain from '../components/NavMain';

import BeerDetails
 from '../components/BeerDetails';
export class RandomBeer extends Component {

    state = {
        beer: null
    }
    componentDidMount() {
        // console.log(this.props)
        axios
            .get("https://ih-beers-api2.herokuapp.com/beers/random")
            .then((response) => {
                console.log(response)
                this.setState({
                    beer: response.data,
                });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    render() {

        if (!this.state.beer) {
            return <div>
                <NavMain />
                {/* <pre>{JSON.stringify(this.state.beer,null,2)}</pre> */}
                <h2>
                    Beer Random
                </h2>
            </div>
        }

        console.log(this.state.beer);

        return (
            <div>
                <NavMain />
                {/* <pre>{JSON.stringify(this.state.beer,null,2)}</pre> */}
                <h2>
                    Beer Random
                </h2>
                {
                    <BeerDetails beer={this.state.beer} />
                }
            </div>
        )
    }
}

export default RandomBeer
