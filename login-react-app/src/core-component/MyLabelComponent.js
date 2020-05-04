import React from 'react';
import {Form} from 'react-bootstrap'

const MyLabelComponent = (props) =>{
  const {labelText} = props;

return(
<Form.Label className="text-dark" >{labelText}</Form.Label>
);
}

MyLabelComponent.defaultProps = {
  labelText: "My Label"
};

export default MyLabelComponent;