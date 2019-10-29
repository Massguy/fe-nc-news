import React from 'react';

const EndpointError = (props) => {
  console.dir(props);
  return (
    <h1>404 {props.uri} not found!</h1>
  );
}

export default EndpointError;
