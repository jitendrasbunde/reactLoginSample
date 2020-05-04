import React from 'react';
import { Form } from 'react-bootstrap'

const MyLabelComponent = (props) => {
  const { labelText, allClasses } = props;

  return (
    <Form.Label className={allClasses} >{labelText}</Form.Label>
  );
}

MyLabelComponent.defaultProps = {
  labelText: "My Label"
};

export default MyLabelComponent;
