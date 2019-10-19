import React from 'react'
import { navigate } from "@reach/router";

const Error404 = (props) => {
  const { status = 404, msg = 'Page Not FOund' } = props;
  return (
    <div>
      <h2 className='errorHead'>{status}Error!!!!!!!!!!!!</h2>
      <p className='errorMessage'>{msg}</p>
      <button onClick={backToHomePage}>Go back to Homepage :)</button>
    </div>
  )
}

const backToHomePage = () => {
  navigate('/')
}

export default Error404