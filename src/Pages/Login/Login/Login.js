import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const { user, setUser, signInUsingGoogle, isLoading, setIsLoading } = useAuth()
    const location = useLocation();
    const history = useHistory();

    const redirect_uri = location.state?.from || '/';

    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(res => {
                // setUser(res.user)
                history.push(redirect_uri)
            }).finally(() => {
                setIsLoading(false)
            });

    }
    return (
        <div>
            <h2>Please LogIn</h2>
            <button onClick={handleGoogleLogin} className="btn btn-warning">Google SignIn</button>
        </div>
    );
};

export default Login;