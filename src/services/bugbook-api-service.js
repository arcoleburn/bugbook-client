import config from '../config';

const ApiService = {
  getEntries(userId) {
      console.log(`${config.API_ENDPOINT}/entries/${userId}`)
    return fetch(`${config.API_ENDPOINT}/entries/${userId}`).then((res) =>
      res.json().then(data => data)
    );
  },
};

export default ApiService;
