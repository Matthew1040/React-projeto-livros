import React from 'react';
import '../../global.css';
import './styles.css';
import logo from '../../assets/logo.svg';
import padlock from '../../assets/padlock.png';

export default function Login() {





    return ( // Efetivamente aparece na tela

       <div className="login-container">
<section className="form">
    <img src={logo} alt="Erudio Logo"/>

<form>
    <h1>Acess your Account</h1>
    <input placeholder="Username"></input>
    <input type="password" placeholder="password"></input>

    <button className="button" type="submit">Login</button>

</form>


</section>
<img src={padlock} alt="Login"/>
       </div>




    )
}