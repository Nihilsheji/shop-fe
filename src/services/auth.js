import { useNavigate } from "react-router-dom";

class AuthService {
    username = null;
    isLoggedIn = true;
    token = null;        

    async login({ username, password }) {        
        const data = {
            token: 'someveryfunnytoken',
            name: 'Somebody'
        }

        const result = await Promise.resolve(
            username === "user" && password === "pass" ? data : null
        ); //Hit API here

        if(!result) return false;

        this.token = result.token;
        //Save token to local storage here
        this.name = data.name;
        this.isLoggedIn = true;

        return true;
    }

    async register({}) {

    }
} 

const authService = new AuthService();

export default authService;