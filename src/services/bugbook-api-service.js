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
};

export default ApiService;
