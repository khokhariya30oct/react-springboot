
const AUTH_USER = 'username'
const AUTH_PASSWORD = 'password'

class AuthService {

    setSession(username,password) {
        window.sessionStorage.setItem(AUTH_USER,username);
        window.sessionStorage.setItem(AUTH_PASSWORD,password);
    }


    checkIfLoggedInUser() {
        if (window.sessionStorage.getItem(AUTH_USER) !== null) {
            return true
        }
        else{
            return false
        }
    }

    logout() {
        window.sessionStorage.removeItem(AUTH_USER);
        window.sessionStorage.removeItem(AUTH_PASSWORD);        
    }
}

export default new AuthService()