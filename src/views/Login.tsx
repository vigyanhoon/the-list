import React from 'react';
import { useState } from 'react';
import Input from 'antd/es/input';
import Button from 'antd/es/button';
import message from 'antd/es/message'
import { useHistory } from "react-router-dom";
import firebase from 'firebase/app'
import 'firebase/auth'

const Login:React.FC<{}> = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  let history = useHistory()

  const login = ()=> {
    firebase.auth().signInWithEmailAndPassword(username, password).catch(function (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      showError(errorCode + ' ' + errorMessage)
    });
  }

  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      history.push("/dashboard")
    } else {
      console.log('logged out')
    }
  });

  const showError = (text: string) => {
    message.error(text);
  };

  return (
    <div className='loginContainer'>
      <div>
        <h1>Login</h1>
        <Input value={username} placeholder="Username"
          onChange={e=>setUsername(e.target.value)}  />
        <Input.Password placeholder="Password"
          value={password} onChange={e=>setPassword(e.target.value)} />
        <Button type="primary" block onClick={login}>
          Login
        </Button>
      </div>
    </div>
  )
}

export default Login