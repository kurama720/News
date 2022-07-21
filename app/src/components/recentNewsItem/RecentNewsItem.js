import recentImage from "../../static/recent-news-image.jpg";
import './recentNewsItem.css';

const RecentNewsItem = (props) => {

   const {title, description, category} = props;

    return (
            <div className='recent-item' style={{
                    background: `linear-gradient(to bottom, rgba(0,0,0,0) 20%, rgba(0,0,0,1)), url(${recentImage})`,
                    backgroundSize: 'cover'
                }}>
                <div className='recent-item-content'>
                    <p className='recent-title'>
                        {title.lenth >= 30 ? title.slice(0, 30) + '...' : title}
                    </p>
                    <p className='recent-description'>
                        {description.length >= 50 ? description.slice(0, 50) + '...' : description}
                    </p>
                    <p className='recent-category'>
                        {category ? category : 'Other'}
                    </p>
                </div>
            </div>
    )
}

export default RecentNewsItem;