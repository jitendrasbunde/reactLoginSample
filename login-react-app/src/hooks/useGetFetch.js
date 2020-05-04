
const UseGetFetch = (url,options) =>{

  return fetch(url)
  .then(resp => {
      return resp.json();
    })
    .catch(error=> {
        console.log("error :", error)
  });
}
export default UseGetFetch;
