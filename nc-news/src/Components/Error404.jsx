import React from 'react'
import { navigate } from "@reach/router";

const Error404 = () => {
  return (
    <div>
      <p>Page Not Found</p>
      <button onClick={backToHomePage}>Go back to Homepage :)</button>
    </div>
  )
}

const backToHomePage = () => {
  navigate('/')
}

export default Error404