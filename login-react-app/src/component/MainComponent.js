import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import MyRegistrationComponent from './MyRegistrationComponent'
import MyListContainer  from '../container/MyListContainer'
import HomeComponent from './HomeComponent'
export default function MainComponent() {
  
  return (
    <Router>
      <ModalSwitch />
    </Router>
  );
  
}


function ModalSwitch(){
  return(
    <Switch /*location={background || location}*/>
        <Route exact path="/" children={<MyRegistrationComponent/>} />
        <Route exact path="/home" children={<HomeComponent/>} />
        <Route exact path="/allUsers" children={<MyListContainer/>} />
    </Switch>
  );
}