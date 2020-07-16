import React from 'react';
import { useState } from 'react';
import Input from 'antd/es/input';
import Button from 'antd/es/button';
import { useHistory } from "react-router-dom";
import firebase from 'firebase'

const Login:React.FC<{}> = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  let history = useHistory()

  const login = ()=> {
    firebase.auth().signInWithEmailAndPassword('admin@admin.com', 'adminadmin').catch(function (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode,errorMessage)
    });
    console.log('login pressed', username, password)
    // history.push("/dashboard")
  }

  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      console.log(user.displayName);
    } else {
      console.log('logged out')
    }
  });

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