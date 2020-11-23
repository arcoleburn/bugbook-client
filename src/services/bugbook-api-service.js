import config from '../config';
import TokenService from './token.service';

const ApiService = {
  getEntries() {
    return fetch(`${config.API_ENDPOINT}/entries/`, {
      headers: {
        authorization: `bearer ${TokenService.getAuthToken()}`,
      },
    }).then((res) => res.json().then((data) => {
      console.log('data from fetch', data)
      return data}));
  },
  getObservations() {
    return fetch(`${config.API_ENDPOINT}/observations/`, {
      headers: {
        authorization: `bearer ${TokenService.getAuthToken()}`,
      },
    }).then((res) => res.json().then((data) => data));
  },

  postEntry(data) {
    return fetch(`${config.API_ENDPOINT}/entries/`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
        authorization: `bearer ${TokenService.getAuthToken()}`,
      },
    })
      .then((res) => res.json())
  },

  postObservation(data) {
    return fetch(`${config.API_ENDPOINT}/observations/`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
        authorization: `bearer ${TokenService.getAuthToken()}`,
      },
    })
      .then((res) => {
        console.log('res from post obs', res);
        res.json();
      })
      .then((data) => console.log('success', data));
  },
  delEntry(id) {
    return fetch(`${config.API_ENDPOINT}/entries/${id}`, {
      method: 'DELETE',
      body: JSON.stringify({ entry_id: id }),
      headers: {
        'Content-Type': 'application/json',
        authorization: `bearer ${TokenService.getAuthToken()}`,
      },
    });
  },
  delObs(id) {
    return fetch(`${config.API_ENDPOINT}/observations/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        authorization: `bearer ${TokenService.getAuthToken()}`,
      },
    });
  },
  editEntry(id, entry) {
    return fetch(`${config.API_ENDPOINT}/entries/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(entry),
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      }
    })
      .then((res) => res.json())
  },
};

export default ApiService;
