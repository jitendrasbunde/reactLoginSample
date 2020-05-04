import React from 'react';
import { Button } from 'react-bootstrap'

const MyButtonComponent = (props) => {
  const { buttonText, allClasses, type ,onClick} = props;

  return (
    <Button
      className={allClasses}
      type={type}
      onClick={()=>{
        console.log("IN My Button");
        onClick(true)
      }}
    >
      {buttonText}
    </Button>
  );
}

MyButtonComponent.defaultProps = {
  type: 'submit'
};

export default MyButtonComponent;
