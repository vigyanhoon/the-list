import React from 'react';
import { Input } from 'antd';
import { Button } from 'antd';

function Login() {
    return (
        <div className='loginBG'>
            <div>
                <h1>Login</h1>
                <Input placeholder="Username" />
                <Input.Password placeholder="Password" />
                <Button type="primary" block>
                    Login
                </Button>
            </div>
        </div>
    )
}

export default Login