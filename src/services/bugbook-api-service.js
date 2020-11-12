import config from '../config';

const ApiService = {
  getEntries(userId) {
    console.log(`get entries ran`);
    return fetch(
      `${config.API_ENDPOINT}/entries/${userId}`
    ).then((res) => res.json().then((data) => data));
  },
  getObservations(userId) {
      console.log('get observations ran')
    return fetch(
      `${config.API_ENDPOINT}/observations/${userId}`
    ).then((res) => res.json().then((data) => data));
  },

  postEntry(userId, data){
      console.log('post entry ran')
      console.log('data sent: ', JSON.stringify(data))
      return fetch(`${config.API_ENDPOINT}/entries/${userId}`,{
          method: 'POST',
          body: JSON.stringify(data),
          headers: {"Content-Type": "application/json"}
      }).then(res=>res.json()).then(data=>console.log('success', data))
  },

  postObservation(userId, data){
      console.log('post obs ran')
      return fetch(`${config.API_ENDPOINT}/observations/${userId}`,{
          method: 'POST',
          body: JSON.stringify(data),
          headers:{
              "Content-Type": "application/json"
          }
      }).then(res=>res.json()).then(data=>console.log('success', data))
  }
};

export default ApiService;
