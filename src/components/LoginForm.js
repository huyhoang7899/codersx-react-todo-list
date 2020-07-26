import React from 'react';
// import logoReact from '../../public/logoReact.png';

class LoginForm extends React.Component {
    render() {
        return (
            <form className="form-signin">
                <h1 className="my-5" >Sign in</h1>
                <label className="sr-only" for="InputEmail1">User name</label>
                <input type="email" class="form-control" id="inputEmail1" placeholder="Username" required autoFocus />
                <label className="sr-only" for="inputPassword">Password</label>
                <input type="password" class="form-control my-3" id="inputPassword" placeholder="Password" required />
                <button type="button" class="btn btn-primary btn-lg btn-block">Sign in</button>
                <div class="form-check my-4">
                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                    <label class="form-check-label" for="defaultCheck1">
                        Keep me signed in
                    </label>
                </div>
                <div className="d-flex justify-content-around">
                    <a href="https://www.google.com/">Forgot Username?</a>
                    <a href="https://www.google.com/">Forgot Password?</a>
                </div> 
            </form>
        );
    }
}

export default LoginForm