// auth0.js
import auth0 from 'auth0-js';

const auth = new auth0.WebAuth({
  domain: 'dev-yjuqmapldfi5hrgf.us.auth0.com',
  clientID: 'IJBpbAju7QM21fM3Bgc0YCGXa9LBWULX',
  redirectUri: 'http://localhost:3000/',
  responseType: 'token id_token',
});

export default auth;
