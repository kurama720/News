import { Link } from 'react-router-dom';

import './appHeader.css'
import signinIcon from '../../static/signinIcon.png'

const AppHeader = () => {

    return (
        <header className="header">
            <div className="header-wrapper">
                <Link to={'/'} className="news-title">
                    News
                </Link>
                <div className='header-signin'>
                    <img className='signin-icon' src={signinIcon} alt='profile'></img>
                    <Link className='signin-item' to='#'>Sign in</Link>
                </div>
                <div className="nav-bar">
                    <Link className='nav-link' to="#">Home</Link>
                    <Link className='nav-link' to="#">News</Link>
                    <Link className='nav-link' to="#">Sport</Link>
                    <Link className='nav-link' to="#">Reel</Link>
                    <Link className='nav-link' to="#">Worklife</Link>
                    <Link className='nav-link' to="#">Travel</Link>
                    <Link className='nav-link' to="#">Future</Link>
                    <Link className='nav-link' to="#">Culture</Link>
                </div>
            </div>
        </header>
    )
}

export default AppHeader;