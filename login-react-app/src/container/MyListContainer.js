import React, {useState,useEffect}from "react";
import MyListComponent from '../component/MyListComponent'
import UseFetch from '../hooks/useFetch'

function MyListContainer() {
  const [listData,setListData] = useState([]);
  const [isData,setIsData] = useState(false);

  useEffect(async ()=> {
    const fetchOptions = {
      method: "GET",
    headers: new Headers({
      "Content-Type": "application/json",
    })
    };
    
   const res = await UseFetch("https://reqres.in/api/users?page=2",fetchOptions
  
  },[listData])



if(!isData){
  return (
    <h1>
      ListData
    </h1>
  );
}else{
  return(
    <>
    {listData.map((object) =>(
      <h1>{object}</h1>
    ))};
    </>
  );
}
}
export default MyListContainer;