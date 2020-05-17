import React from 'react';
import { useState } from 'react';
import { Input } from 'antd';
import { Button } from 'antd';
import { useHistory } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  let history = useHistory()

  const login = ()=> {
    console.log('login pressed', username, password)
    history.push("/Dashboard")
  }

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