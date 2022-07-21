import sectionNewsImage from '../../static/section-news-image.jpg';
import './sectionContentItem.css';

const SectionContentItem = (props) => {

   const {title, description, category} = props;

    return (
        <div className='section-content-item'>
            <img className='section-content-item-img' src={sectionNewsImage} width='435'height='250' alt='a news'></img>
            <div className='section-content-item-title'>
                {title.lenth >= 30 ? title.slice(0, 30) + '...' : title}
            </div>
            <div className='section-content-item-description'>
                {description.length >= 50 ? description.slice(0, 50) + '...' : description}
            </div>
            <div className='section-content-item-category'>
                {category ? category : 'Other'}
            </div>
        </div>
    )
}

export default SectionContentItem;