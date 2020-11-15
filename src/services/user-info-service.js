import config from '../config';



const userInfoService = {
  saveUserId(id) {
    window.localStorage.setItem('userId', id);
  },
  saveUserFirstName(firstName) {
    window.localStorage.setItem('firstName', firstName);
  },
  getUserInfo() {
    return {
      userId: window.localStorage.getItem('userId'),
      firstName: window.localStorage.getItem('firstName'),
    };
  },
  clearUserInfo(){
    window.localStorage.removeItem('userId')
    window.localStorage.removeItem('firstName')
  }
};

export default userInfoService
