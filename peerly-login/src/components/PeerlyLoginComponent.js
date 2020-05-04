import React from 'react';
import { Row, Col } from 'react-bootstrap'
import PeerlyWorkingComponent from './PeerlyWorkingComponent'
import PeerlyFormComponent from './PeerlyFormComponent'

const PeerlyLoginComponent = (props) => {

  return (
    <>
      <div className="container-fluid bg-dark h-100">
        <Row>
          <Col md='4' className="bg-info">
            <PeerlyWorkingComponent />
          </Col>
          <Col md='3' className="pl-0 pr-0">
            <img
              className="d-block w-100"
              src={require('../images/12.jpg')}
              height="669px"
            />
          </Col>
          <Col md='5'>
            <PeerlyFormComponent />
          </Col>
        </Row>
      </div>
    </>
  );
}

export default PeerlyLoginComponent;
