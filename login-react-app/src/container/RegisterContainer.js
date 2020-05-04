import UseFetch from '../hooks/useFetch';

const RegisterContainer = (fetchOptions) => {
      
      return UseFetch("https://reqres.in/api/register",fetchOptions
        ).then(response => {
          console.log(response);
          return response;
        });
}
export default RegisterContainer;