import { useEffect, useState } from 'react';
import axios from 'axios';

import noPhoto from '../../static/noPhoto.png';
import './sectionContentItem.css';

const SectionContentItem = (props) => {

    const {id, title, description, category} = props;
    const _apiBase = process.env.REACT_APP_API_URL

    const [image, setImage] = useState('')

    useEffect ( () => {
        axios.get(`${_apiBase}/news/${id}/image`).then(response => setImage(response.data))
        //eslint-disable-next-line
    }, [props]);

    return (
        <div className='section-content-item'>
            <img className='section-content-item-img' src={image !== 'None' ? `data:image/jpeg;base64,${image}` : noPhoto} width='435'height='250' alt='a news'></img>
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