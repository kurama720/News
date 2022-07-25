import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

import noPhoto from '../../static/noPhoto.png';
import loadingIcon from "../../static/loadingIcon.gif"
import './newsDetail.css';

const NewsDetail = () => {

    const _apiBase = process.env.REACT_APP_API_URL

    const [newsDetail, setNewsDetail] = useState({})
    const [image, setImage] = useState('')
    const [loading, setLoading] = useState(true)
    const {newsId} = useParams();

    
    useEffect ( () => {
        axios.get(`${_apiBase}/news/${newsId}/image`).then(response => setImage(response.data));
        axios.get(`${_apiBase}/news/${newsId}`).then(response => {setNewsDetail(response.data); setLoading(false)});
        //eslint-disable-next-line
    }, []);
    
    const {title, description, category, section} = newsDetail;
    const imageChecked = image !== 'None' ? `data:image/jpeg;base64,${image}` : noPhoto

    const renderLoaded = (
        <div className='news-detail news-detail-wrapper'>
            <div className='news-detail-title'>
                {title}
            </div>
            <div className="news-detail-image-wrapper">
                <img className='news-detail-image' src={imageChecked} alt='a news'></img>
            </div>
            <div className='news-detail-description'>
                {description}
            </div>
            <div className="related-topics">
                Related topics:    
                <Link to={'#'} className='news-detail-related'>
                {category ? category : 'Other'},
                </Link>
                <Link to={'#'} className="news-detail-related">
                    {section ? section : 'Other'}
                </Link>
            </div>
        </div>
    )

    return (
        <>
        {loading ? <img src={loadingIcon} alt='loading data' /> : renderLoaded}
        </>
    )

}

export default NewsDetail;