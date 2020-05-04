import React, { useState } from 'react';
import { Row, Col, Button } from 'react-bootstrap'
import MyLabelComponent from '../core-components/MyLabelComponent'

const PeerlyFormComponent = (props) => {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <>
      <div className="mt-5 ">
        <center>
          <h1>
            <MyLabelComponent allClasses="text-white font-weight-bold" labelText="Peerly" />
          </h1>
        </center>
      </div>
      <div className="mt-5" style={{ height: 200, paddingLeft: 115 }}>
        <Row>
          <Col>
            <Button className="btn btn-dark" onClick={(e) => {
              setIsLogin(true);
            }}>
              Sign Up
            </Button>
          </Col>
          <Col>
            <Button
              className="btn btn-dark"
              onClick={(e) => {
                setIsLogin(false);
              }}
            >
              Login
            </Button>
          </Col>
        </Row>
      </div>
      <div className={isLogin ? "error text-light" : "d-none"}>
        <center>
          Sign In
        </center>
      </div>
      <div className={isLogin ? "d-none" : "error"}>
        <center>
          <Button size="sm" className="btn-light small">
            LOG IN WITH EMAIL
          </Button>
        </center>
      </div>
      <div className="mt-5">
        <h3>
          <Row className="text-white font-weight-bold " style={{ paddingLeft: 170 }}>Lets Create the </Row>
          <Row className="text-white font-weight-bold " style={{ paddingLeft: 170 }}>Office Positive </Row>
          <Row className="text-white font-weight-bold " style={{ paddingLeft: 240 }}>____</Row>
        </h3>
        <Row className="text-white font-weight-bold " style={{ paddingLeft: 180 }}>Encouragement Driven</Row>
      </div>
    </>
  );
}

export default PeerlyFormComponent;
