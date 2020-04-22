import React, { useState } from 'react';
import Facebook from './component/Facebook';
import './Auth.css';

const Auth = () => {

    const [name,setName] = useState('');
    const response = () => {
        setName()
    }
    console.log(response.name)
    return(
        <div className="auth">
            <Facebook response={response} />
            <h1>111 {name}</h1>
        </div>
        
    )
    console.log(response.name)
}

export default Auth;