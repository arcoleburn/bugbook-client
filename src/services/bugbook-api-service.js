import config from '../config';
import TokenService from './token.service';

const ApiService = {
  getEntries() {
    console.log(`get entries ran`);
    return fetch(`${config.API_ENDPOINT}/entries/`, {
      headers: {
        authorization: `bearer ${TokenService.getAuthToken()}`,
      },
    }).then((res) => res.json().then((data) => data));
  },
  getObservations() {
    console.log('get observations ran');
    return fetch(
      `${config.API_ENDPOINT}/observations/`, {
        headers: {
          authorization: `bearer ${TokenService.getAuthToken()}`,
        },
      }
    ).then((res) => res.json().then((data) => data));
  },

  postEntry( data) {
    console.log('post entry ran');
    console.log('data sent: ', JSON.stringify(data));
    return fetch(`${config.API_ENDPOINT}/entries/`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
        authorization: `bearer ${TokenService.getAuthToken()}`,
      },
    })
      .then((res) => res.json())
      .then((data) => console.log('success', data));
  },

  postObservation(data) {
    console.log('post obs ran');
    return fetch(`${config.API_ENDPOINT}/observations/`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
        authorization: `bearer ${TokenService.getAuthToken()}`,
      },
    })
      .then((res) => res.json())
      .then((data) => console.log('success', data));
  },
};

export default ApiService;
