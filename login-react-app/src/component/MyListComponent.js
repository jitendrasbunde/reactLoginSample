import React from "react";
import NavBarComponent from './NavBarComponent'

const MyListComponent = (props) =>{
const {list} = (props);

return(
  <div>
    <NavBarComponent/>
    <div>
    {list}
    </div>     
  </div>
);
}

MyListComponent.defaultProps = {
  
};

export default MyListComponent;