import React from 'react'
import {FirstName, LastName} from "../App";
function TradWay() {
    return (
        <>
            <FirstName.Consumer>
                {(firstname)=>{
                    return(
                        <LastName.Consumer>
                            {(lastname)=>{
                                return <h1>Hello this is traditional way I am not using useContext, My Name is {firstname} {lastname} </h1>
                            }}
                        </LastName.Consumer>
                    )
                }}
            </FirstName.Consumer>
        </>
    )
}

export default TradWay
