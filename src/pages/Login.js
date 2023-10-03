import Logo from '../assets/logo.png';
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import auth from '../auth0.js';
import './Login.css';

// const Login = ({ onLogin }) => {
//   const navigate = useNavigate();
//   const { loginWithRedirect, isAuthenticated, user } = useAuth0();

//   const submitHandler = (e) => {
//     e.preventDefault();
//     loginWithRedirect();
//   };

//   if (isAuthenticated) {
//     onLogin(user.email);
//     navigate('/dashboard');
//     return null;
//   }

//   return (
//     <div className="login-page">
//       <div className="logo">
//         <img src={Logo} />
//       </div>
//       <div className="form">
//         <form className="login-form" onSubmit={submitHandler}>
//           <h1>Willkommen</h1>
//           <p className="mb-5">
//             Bitte melden Sie sich an, um auf Ihr Projekt zuzugreifen
//           </p>
//           <button className="btn" type="submit">
//             Log in
//           </button>
//           {/* <QuestionCircleFill color='gray' size='26' className='icon'/> */}
//         </form>
//       </div>
//     </div>
//   );
// };
// export default Login;

// const Login = () => {
//   const { loginWithRedirect } = useAuth0();
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post(
//         'https://dev-yjuqmapldfi5hrgf.us.auth0.com',
//         {
//           grant_type: 'password',
//           username,
//           password,
//           audience: 'https://dev-yjuqmapldfi5hrgf.us.auth0.com/api/v2/',
//           client_id: 'mhV8gC9gKJT7BhAnoyj99eJ3gSyRr3gq',
//           client_secret:
//             '7PLFNV0u-0qCzvXzK4EogXVoEWHF5hkEkdKQL1mM8sdZMyNqOJr0_28hS-nN1mJ-',
//         }
//       );

//       const accessToken = response.data.access_token;

//       loginWithRedirect({
//         appState: { targetUrl: '/dashboard' },
//       });
//     } catch (error) {
//       console.error('Login error:', error);
//     }
//   };

//   return (
//     <div className="login-page">
//       <div className="logo">
//         <img src={Logo} alt="Logo" />
//       </div>
//       <div className="form">
//         <form className="login-form">
//           <h1>Willkommen</h1>
//           <p className="mb-5">
//             Bitte melden Sie sich an, um auf Ihr Projekt zuzugreifen
//           </p>
//           <input
//             type="text"
//             placeholder="Username"
//             className="input"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             className="input"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           <button className="btn" type="submit" onClick={handleLogin}>
//             Log in
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    auth.login(
      {
        realm: 'Username-Password-Authentication',
        username: email,
        password: password,
      },
      (err, authResult) => {
        if (err) {
          console.error(err);
        } else {
          console.log('Successfully logged in:', authResult);

          auth.client.userInfo(authResult.accessToken, (userInfoErr, user) => {
            if (userInfoErr) {
              console.error(userInfoErr);
            } else {
              setIsAuthenticated(true);
              onLogin(user.email);
              navigate('/dashboard');
            }
          });
        }
      }
    );
  };

  return (
    <div>
      <div>
        {isAuthenticated ? (
          <p>Redirectin to Dashboard...</p>
        ) : (
          <div className="login-page">
            <div className="logo">
              <img src={Logo} alt="Logo" />
            </div>
            <div className="form">
              <form className="login-form" onSubmit={handleLogin}>
                <h1>Willkommen</h1>
                <p className="mb-5">
                  Bitte melden Sie sich an, um auf Ihr Projekt zuzugreifen
                </p>
                <input
                  type="text"
                  placeholder="Username"
                  className="input"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="input"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button className="btn" type="submit">
                  Log in
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
