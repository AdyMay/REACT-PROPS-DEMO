import React from 'react';

function Login(props) {
    console.log(props);
  return (
    <>
        <h2>Login</h2>
        <input type="text" placeholder="username"/>
        <input type="password" placeholder="password"/>
         <button onClick={()=>props.setIsLoggedIn(true)}>Login</button>
    </>
  );
}

export default Login;
