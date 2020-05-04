import React from 'react';
import {Button} from 'react-bootstrap'

const MyButtonComponent = (props) =>{
  const { variant, buttonText, type } = props;

return(
<Button variant = {variant} type = {type} >{buttonText}</Button>
);
}

MyButtonComponent.defaultProps = {
  type: "submit",
  variant: "primary",
  buttonText: "submit"
};

export default MyButtonComponent;