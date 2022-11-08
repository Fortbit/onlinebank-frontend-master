import axios from 'axios';

const API_URL='http://localhost:8085/softbank/api/user';
const API_URL1='http://localhost:8085/softbank/api/user';

export const USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser';

class AuthenticationService{

    loginUser(user){

          return axios.post(API_URL,user);
    }

    registerUser(user){
        return axios.post(API_URL1, user);
       }

    fduser(user){
        return axios.post(API_URL, user)
    }

    registerSuccessfulLogin(username, password) {
      
       sessionStorage.setItem(USER_NAME_SESSION_ATTRIBUTE_NAME, username);
      // console.log("First"+username);
      
    }

    logout() {
     
        sessionStorage.removeItem(USER_NAME_SESSION_ATTRIBUTE_NAME);
    }

    isUserLoggedIn() {
        let user = sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME)
        if (user === null) return false
        return true
    }

    getLoggedInUserName() {
        let user = sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME)
       // console.log("Second"+user);
        if (user === null) return ''
        return user
    }

} 

export default new AuthenticationService();