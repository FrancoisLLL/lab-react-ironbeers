import axios from 'axios'
import React, { Component } from 'react'
import NavMain from '../components/NavMain'



export class NewBeer extends Component {
    state = {
        name: "name",
        tagline: "tagline",
        description: "description",
        first_brewed: "first brewed date",
        brewers_tips: "brewers tips",
        attenuation_level: 0,
        contributed_by: "contributed by"
    }

    handleChange = (event) => {
        console.log(event.target)
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    handleFormSubmit = (event) => {
        event.preventDefault();

        console.log(this.state)

        axios.post("https://ih-beers-api2.herokuapp.com/beers/new", this.state)
        .then(response => {console.log(response)
        // Reset
    this.setState({
        name: "name",
        tagline: "tagline",
        description: "description",
        first_brewed: "first brewed date",
        brewers_tips: "brewers tips",
        attenuation_level: 0,
        contributed_by: "contributed by"
      })  
    })
        .catch(e => console.log(e))
    }

    render() {
        return (
            <div>
                <NavMain></NavMain>
                <h2>Create a new beer !</h2>
                <form onSubmit={this.handleFormSubmit}>
                    <input onChange={this.handleChange} type="text" name="name" value={this.state.name} />
                    <input onChange={this.handleChange} type="text" name="tagline" value={this.state.tagline} />
                    <input onChange={this.handleChange} type="text" name="description" value={this.state.description} />
                    <input onChange={this.handleChange} type="text" name="first_brewed" value={this.state.first_brewed} />
                    <input onChange={this.handleChange} type="text" name="brewers_tips" value={this.state.brewers_tips} />
                    <input onChange={this.handleChange} type="number" name="attenuation_level" value={this.state.attenuation_level} />
                    <input onChange={this.handleChange} type="text" name="contributed_by" value={this.state.contributed_by} />
                    <button>
                        Submit
                    </button>
                </form>
            </div>
        )
    }
}

export default NewBeer
