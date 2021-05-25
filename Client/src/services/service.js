import axios from 'axios'

const appClient = axios.create({
  baseURL: 'apiURL', // this for api call
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-type': 'application/json'
  }
});

export default {
  getData() {
    return appClient.get('/name of json data from api') // for calling a json-data 
  }
}