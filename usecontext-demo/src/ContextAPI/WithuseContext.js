import React, {useContext} from 'react'
import {FirstName,LasName, LastName} from "../App";



function WithuseContext() {
  const firstname = useContext(FirstName);
  const lastname = useContext(LastName)
    return (
        <>
          <h1>Hello I am using useContext and this is better approach, I am {firstname} {lastname} </h1>
        </>
    )
}

export default WithuseContext
