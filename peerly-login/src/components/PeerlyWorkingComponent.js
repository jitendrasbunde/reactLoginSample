import React from 'react';
import MyLabelComponent from '../core-components/MyLabelComponent'
import WorkingSlideComponent from './WorkingSlideComponent'

const PeerlyWorkingComponent = (props) => {

  return (
    <>
      <div className="mt-5">
        <center>
          <h2>
            <MyLabelComponent allClasses="text-white font-weight-bold" labelText="How it Work" />
          </h2>
          <div>
            <WorkingSlideComponent />
          </div>
        </center>
      </div>
    </>
  );
}

export default PeerlyWorkingComponent;
