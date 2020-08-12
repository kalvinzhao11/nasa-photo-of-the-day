import React from 'react'

const Header = (props) =>{
    const nasaData = props
    // debugger
    // if (!nasaData) return <h1>Loading...</h1>
    return (
        <header>
                <h1>{nasaData.nasaData.title}</h1>
        </header>
    )
    
}

export default Header