import React from 'react'
import LoginForm from '../components/LoginForm';
import { Container } from '@material-ui/core'

const Login = () => {
    return (
        <div className='login-page'>
            <Container>
                <LoginForm />
            </Container>
        </div>
    )
}

export default Login;
