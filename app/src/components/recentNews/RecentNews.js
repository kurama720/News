import recentImage from "../../static/recent-news-image.jpg";
import './recentNews.css'

const RecentNews = () => {

    return (
        <div className='recent-news-section'>
            <div className='section-title-wrapper'>
                <div className='section-title'>
                    Welcome to News.com
                </div>
                <div className='section-date'>
                    Wednesday, 20 July
                </div>
            </div>
            <div className='recent-wrapper'>
                <div className='recent-item' style={{
                        background: `linear-gradient(to bottom, rgba(0,0,0,0) 20%, rgba(0,0,0,1)), url(${recentImage})`,
                        backgroundSize: 'cover'
                    }}>
                    <div className='recent-item-content'>
                        <p className='recent-title'>
                            Title
                        </p>
                        <p className='recent-description'>
                            Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description 
                        </p>
                        <p className='recent-category'>
                            Category
                        </p>
                    </div>
                </div>
                <div className='recent-item' style={{
                        background: `linear-gradient(to bottom, rgba(0,0,0,0) 20%, rgba(0,0,0,1)), url(${recentImage})`,
                        backgroundSize: 'cover'
                    }}>
                    <div className='recent-item-content'>
                        <p className='recent-title'>
                            Title
                        </p>
                        <p className='recent-category'>
                            Category
                        </p>
                    </div>
                </div>
                <div className='recent-item' style={{
                        background: `linear-gradient(to bottom, rgba(0,0,0,0) 20%, rgba(0,0,0,1)), url(${recentImage})`,
                        backgroundSize: 'cover'
                    }}>
                    <div className='recent-item-content'>
                        <p className='recent-title'>
                            Title
                        </p>
                        <p className='recent-category'>
                            Category
                        </p>
                    </div>
                </div>
                <div className='recent-item' style={{
                        background: `linear-gradient(to bottom, rgba(0,0,0,0) 20%, rgba(0,0,0,1)), url(${recentImage})`,
                        backgroundSize: 'cover'
                    }}>
                    <div className='recent-item-content'>
                        <p className='recent-title'>
                            Title
                        </p>
                        <p className='recent-category'>
                            Category
                        </p>
                    </div>
                </div>
                <div className='recent-item' style={{
                        background: `linear-gradient(to bottom, rgba(0,0,0,0) 20%, rgba(0,0,0,1)), url(${recentImage})`,
                        backgroundSize: 'cover'
                    }}>
                    <div className='recent-item-content'>
                        <p className='recent-title'>
                            Title
                        </p>
                        <p className='recent-category'>
                            Category
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RecentNews;