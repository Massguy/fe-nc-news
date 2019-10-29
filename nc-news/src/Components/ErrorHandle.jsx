import React from 'react'
import { navigate } from "@reach/router";

const ErrorHandle = ({ status, msg }) => {
  return (
    <div>
      <h2>{status}Error!!!!!!!!!!!!</h2>
      <p>{msg}</p>
      <button onClick={backToHomePage}>Go back to Homepage :)</button>
    </div>
  )
}

const backToHomePage = () => {
  navigate('/')
}

export default ErrorHandle