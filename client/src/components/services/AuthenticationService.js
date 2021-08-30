import axios from 'axios';

class AuthenticationService {

    constructor() {
        this.username = null;
        this.authenticated = null;
        this.loginStatusObservers = [];
    }

    async login(username, password, rememberMe) {
        let loginResponse;
        const body = { username, password, rememberMe };

        loginResponse = await axios.post('/login', body)
            .then(response => response.data)
            .catch((error) => {
                if (error.response && error.response.data) {
                    return error.response.data;
                } else {
                    return {
                        "success": false,
                        "message": "Could not reach server, contact support",
                    }
                }
            });

        this.authenticated = loginResponse.success;
        if (this.authenticated) this.username = username;
        notifyLoginStatusChanged(this);

        return loginResponse;
    }

    async logout() {
        this.authenticated = false;
        this.username = null;
        this.killCookie();
        notifyLoginStatusChanged(this);

        let logoutResponse;
        logoutResponse = await axios.get('/logout')
            .then(response => response.data)
            .catch((error) => {
                if (error.response && error.response.data) {
                    return error.response.data;
                } else {
                    return {
                        "success": false,
                        "message": "Could not reach server, contact support",
                    }
                }
            });

        return logoutResponse;
    }

    async killCookie() {
        document.cookie.split(";").forEach((c) => {
            document.cookie = c
                .replace(/^ +/, "")
                .replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
        });
    }

    isUserLoggedIn() {
        return this.authenticated;
    }

    isUserAdmin() {
        return this.username === 'admin';
    }

    registerForLoginStatusChangedEvent(callback) {
        this.loginStatusObservers.push(callback);
    }

    getEmail() {
        return this.username;
    }

}

function notifyLoginStatusChanged(service) {
    service.loginStatusObservers.forEach(callback => callback(service.isUserLoggedIn()));
}

export default new AuthenticationService();
