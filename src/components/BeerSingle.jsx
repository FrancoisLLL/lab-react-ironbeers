
import React, { Component } from 'react'
import NavMain from './NavMain'

import axios from 'axios';
import BeerDetails from './BeerDetails';

export class BeerSingle extends Component {
    state = {
        beer: null
    }


    componentDidMount() {
        // console.log(this.props)
        axios
            .get("https://ih-beers-api2.herokuapp.com/beers/" + this.props.match.params.id)
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
                <h2>
                    Beer details
                </h2>
                <p>Loading ... </p>
            </div>
        }

        return (
            <div>
                <NavMain />
                {/* <pre>{JSON.stringify(this.state.beer,null,2)}</pre> */}
                <h2>
                    Beer details
                </h2>
                {
                    <BeerDetails beer={this.state.beer} />
                }
            </div>
        )
    }
}

export default BeerSingle
