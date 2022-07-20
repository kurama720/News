
import sectionNewsImage from "../../static/section-news-image.jpg"
import './sectionNews.css'

const SectionNews = () => {

    return (
        <div className='section-news-wrapper'>
            <div className='section-news-title'>
                News
            </div>
            <div className='section-news-items-wrpaper'>
                <div className='section-news-item'>
                    <img classname='section-news-item-img' src={sectionNewsImage} width='435'height='250' alt='a news'></img>
                    <div className='section-news-item-title'>
                        Title
                    </div>
                    <div className='section-news-item-description'>
                        Description Description Description Description  Description Description  
                    </div>
                    <div className='section-news-item-category'>
                        Category
                    </div>
                </div>
                <div className='section-news-item'>
                    <img classname='section-news-item-img' src={sectionNewsImage} width='435'height='250' alt='a news'></img>
                    <div className='section-news-item-title'>
                        Title
                    </div>
                    <div className='section-news-item-description'>
                        Description Description Description Description  Description Description  
                    </div>
                    <div className='section-news-item-category'>
                        Category
                    </div>
                </div>
                <div className='section-news-item'>
                    <img classname='section-news-item-img' src={sectionNewsImage} width='435'height='250' alt='a news'></img>
                    <div className='section-news-item-title'>
                        Title
                    </div>
                    <div className='section-news-item-description'>
                        Description Description Description Description  Description Description  
                    </div>
                    <div className='section-news-item-category'>
                        Category
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SectionNews;