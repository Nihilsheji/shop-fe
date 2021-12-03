class AuthService {
    username = null;
    isLoggedIn = false;
    token = null;    

    async login({ username, password }) {
        const data = {
            token: 'someveryfunnytoken',
            name: 'Somebody'
        }
        const result = await new Promise.resolve(data); //Hit API here

        if(!result) return;

        this.token = result.token;
        //Save token to local storage here
        this.name = data.name;
    }
} 

const authService = new AuthService();

export default authService;