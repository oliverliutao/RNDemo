// ApiUtils.js
var ApiUtils = {
  checkStatus: function(response) {
    if (response.ok) {
      return response;
    } else {
      let error = new Error(response.statusText);
      error.response = response;
      throw error;
    }
  }
};


//get sample
function getFetch() {

   fetch('https://facebook.github.io/react-native/movies.json', {
     method: "GET"
   })
   .then(ApiUtils.checkStatus)
  .then(response => {
    const statusCode = response.status;
    const data = response.json();
    return {codekey: statusCode, datakey: data};//return promise
  })
  .then(res => {
    console.log(res.codekey);
    console.log(res.datakey);
  })
  .catch(error => {
    console.error(error);
  });

}




export { ApiUtils as default };
