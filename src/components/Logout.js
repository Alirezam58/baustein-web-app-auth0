import {BiLogOut} from 'react-icons/bi';
import { useAuth0 } from "@auth0/auth0-react";

const Logout = () => {
  const { logout } = useAuth0();

  return (
    <BiLogOut onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })} className='logout-icon' size={36}/>
  );
};

export default Logout;