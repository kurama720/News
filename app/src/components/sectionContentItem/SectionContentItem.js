import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import noPhoto from '../../static/noPhoto.png';
import loadingIcon from "../../static/loadingIcon.gif"
import './sectionContentItem.css';

const SectionContentItem = (props) => {

    const {id, title, description, category} = props;
    const _apiBase = process.env.REACT_APP_API_URL

    const [image, setImage] = useState('')
    const [loading, setLoading] = useState(true)

    useEffect ( () => {
        axios.get(`${_apiBase}/news/${id}/image`).then(response => {setImage(response.data); setLoading(false)})
        //eslint-disable-next-line
    }, [props]);


    const renderLoaded = (
        <Link to={`/${id}`} className='section-content-item'>
            <img className='section-content-item-img' src={image !== 'None' ? `data:image/jpeg;base64,${image}` : noPhoto} width='432'height='250' alt='a news'></img>
            <div className='section-content-item-title'>
                {title.lenth >= 30 ? title.slice(0, 30) + '...' : title}
            </div>
            <div className='section-content-item-description'>
                {description.length >= 40 ? description.slice(0, 40) + '...' : description}
            </div>
            <div className='section-content-item-category'>
                {category ? category : 'Other'}
            </div>
        </Link>
    )

    return (
        <>
            {loading ? <img src={loadingIcon} alt='loading data' /> : renderLoaded}
        </>
    )
}

export default SectionContentItem;
