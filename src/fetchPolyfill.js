
import fetch from 'react-native-fetch-polyfill';

const TIME_OUT  = 3 * 1000;


//get
  async function getRequest(url) {

      try {

        let response = await fetch(
          url, {timeout: TIME_OUT}
        );
        let responseJson = await response.json();
        console.log('json:');
      
      } catch (error) {
        console.log('error:');
        return error

      }
    }


    export { getRequest }
