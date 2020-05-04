import React from 'react';
import { Button } from 'react-bootstrap'

const MyButtonComponent = (props) => {
  const { buttonText, allClasses, type } = props;

  return (
    <Button
      className={allClasses}
      type={type}
    >
      {buttonText}
    </Button>
  );
}

MyButtonComponent.defaultProps = {
  type: 'submit'
};

export default MyButtonComponent;
