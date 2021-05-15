import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';

const Signup = () => {

    const [info, setInfo] = useState(null);

    function onUserLogin(e) {
        e.preventDefault();

        const nameInput = document.getElementById('user') as HTMLInputElement;
        const pswdInput = document.getElementById('password') as HTMLInputElement;
        const pswdConfInput = document.getElementById('passwordConf') as HTMLInputElement;

        if (nameInput.value === '') return setInfo('Please type in a username!');
        if (pswdInput.value === '') return setInfo('Please type in a password!');
        if (pswdConfInput.value === '') return setInfo('Please confirm your password!');

        if (pswdInput.value !== pswdConfInput.value) {
            pswdInput.value = '';
            pswdConfInput.value = '';
            return setInfo('Passwords don\'t match!');
        }

        console.log('Signing up ', nameInput.value)

        fetch('/user/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'Application/JSON' },
            body: JSON.stringify({ username: nameInput.value, password: pswdInput.value })
        })
            .then(response => response.json())
            .then(data => {
                switch (data) {
                    case 'userExists':
                        setInfo('Username is already taken!');
                        nameInput.value = '';
                        pswdInput.value = '';
                        pswdConfInput.value = '';
                        break;
                    case 'success':
                        nameInput.value = '';
                        pswdInput.value = '';
                        pswdConfInput.value = '';
                        <Redirect to='/login' />
                        break;
                    default:
                        throw new Error('Invalid Signup: Server ERROR');
                }
            })
            .catch((error) => {
                console.error('Error when POST-fetching for signup: ', error);
            })
    }

    return (
        <div className='login-wrapper'>
            <div className='logo'>(Logo image will go here)</div>
            <div className='logo-caption'>A visualization tool for Kafka consumer metrics</div>

            <div className='login-container'>
                <h3>Signup to deKaf</h3>
                <hr />
                <form id='login' onChange={onUserLogin}>
                    <input id='user' name='user' placeholder='Username' type='text' />
                    <br />
                    <input id='password' name='password' placeholder='Password' type='password' />
                    <br />
                    <input id='passwordConf' name='passwordConf' placeholder='Password Confirm' type='password' />
                    <br />
                    <button id='submit' type='submit'>Log in</button>
                </form>
                <div className='info'>{info}</div>
            </div>

            <div className='new-user'>Already have an account? <Link to='/login'>Login</Link>.</div>
        </div>
    )
}

export default Signup;