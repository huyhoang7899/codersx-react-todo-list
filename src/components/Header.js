import React from 'react';
// import logoReact from '../../public/logoReact.png';

class Header extends React.Component {
    render() {
        return (
            <div className="d-flex justify-content-around align-items-center content-header">
                <div>
                    <i className="fas fa-long-arrow-alt-left" />
                    <span className="ml-2">Go back</span>
                </div>
                <img src="image/logoReact.png" alt="logo" class="img-fluid"/>
                <button type="button" class="btn btn-outline-light">Sign up</button>
            </div>
        );
    }
}

export default Header

