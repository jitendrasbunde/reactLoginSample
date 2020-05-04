import React,{useState} from 'react';
import {Form, Row, Col,Card} from 'react-bootstrap'
import MyInputTextComponent from '../core-component/MyInputTextComponent'
import MyButtonComponent from '../core-component/MyButtonComponent'
import MyLabelComponent from '../core-component/MyLabelComponent'
import RegisterContainer from '../container/RegisterContainer'
import Slides from './SlideComponent'
import {
  useHistory,
} from "react-router-dom";
//import { render } from '@testing-library/react';


const MyRegistrationComponent = (props) =>{
  const [validated, setValidated] = useState(false);
  const history = useHistory();
  const handleSubmit = async (event) => {
    const form = event.currentTarget;
    event.preventDefault();

    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      const formdata = new FormData(event.target);
      let fetchData = {
        method:"POST",
        credentials:"same-origin",
        headers:new Headers({
          "Content-Type":"application/json"
        }),
        body:JSON.stringify({
          email:formdata.get("email") ,
          password:formdata.get("pass")
        })
      }
      RegisterContainer(fetchData)
      .then(response => {
        if(response.token)
        {
          history.push('/home');
        }    
      }).catch((err)=>{
        console.log(err);
      }) 
      console.log(formdata.get("email")+" " +formdata.get("pass"));
    }
    setValidated(true);
  };
  
return(
  <>
    <div className="container-fluid bg-dark " style={{height:669}}> 
      <Row className="h-100 bg-bark " >
        <Col md="7" className="ml-1 mt-4"><Slides/></Col>
        <Col md="4" className="mt-5 ml-5">
          <Card className="bg-white">
            <Form noValidate validated={validated}  onSubmit={handleSubmit} >
              <center>
                <h3 className="font-weight-bold">
                <MyLabelComponent  labelText="Registration Form"/>
                </h3>
              </center>
              <div className="ml-2 mr-2">
                <h5 className="font-weight-bold">
                <MyLabelComponent  labelText="Email"/>
                </h5>
                <MyInputTextComponent 
                type="email"
                name="email"
                placeholder = "Please Enter UserName"
                value = ''
                errorMessage = "Email is required"
                />
              </div>
              <div className="ml-2 mr-2">
                <h5 className="font-weight-bold">
                  <MyLabelComponent  labelText="Password"/>
                </h5>
                <MyInputTextComponent
                  type="password"
                  name="pass"
                  placeholder = "Please Enter password"
                  value = ''
                  errorMessage = "password is required"
                />
              </div>
              <div className="md-1">
                <center>
                  <MyButtonComponent buttonText="Submit"/>
                </center>
              </div>
            </Form>
          </Card>
        </Col>
      </Row>
    </div>
  </>
);
}

MyRegistrationComponent.defaultProps = {
};
export default MyRegistrationComponent;
