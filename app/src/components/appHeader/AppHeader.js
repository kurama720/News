import { Link } from 'react-router-dom';

import './appHeader.css'
import profileIcon from '../../static/images.png'

const AppHeader = () => {

    return (
        <header className="header">
            <div className="header-wrapper">
                <div className="news-title">
                    News
                </div>
                <div className='header-signin'>
                    <img className='signin-icon' src={profileIcon} alt='profile'></img>
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