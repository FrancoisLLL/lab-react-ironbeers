import React from 'react'


const HomePageCard = (props) => {
    return (
        <div className = "homePageCardContainer">
            {/* <pre>{JSON.stringify(props, null, 2)}</pre> */}
            <div>
                <img src={props.image} alt=""></img>
            </div>
            <h2>{props.title}</h2>
            <p>{props.description}</p>
        </div>
    )
}

export default HomePageCard
