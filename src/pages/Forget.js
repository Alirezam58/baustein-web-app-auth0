import './Forget.css';
import Logo from '../assets/logo.png';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';


const Forget = () => {
  const [email,setEmail] = useState('')
  const navigate = useNavigate()

  const submitHanldle =async (e) =>{
    e.preventDefault();
    navigate('/login')
  }

  return (
    <div className='forget-page'>
      <div className='logo'>
        <img src={Logo} />
      </div>
      <div className='form'>
        <form className='forget-form' onSubmit={submitHanldle}>
              <h1>Passwort vergessen</h1>
              <p className='mb-5'>Bitte geben Sie Ihre E-Mail Adresse ein.</p>
              <input id='username' type="email" placeholder='E-Mail Adresse' className='input mt-3' onChange={(e) =>setEmail(e.target.value)}/>
              <button className='btn'>absenden</button>
              
        </form>
      </div>
    </div>
    
  )
}
export default Forget