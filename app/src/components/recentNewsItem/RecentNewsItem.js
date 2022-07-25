import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import noPhoto from '../../static/noPhoto.png';
import loadingIcon from "../../static/loadingIcon.gif"
import './recentNewsItem.css';

const RecentNewsItem = (props) => {

    const {id, title, description, category} = props;
    const _apiBase = process.env.REACT_APP_API_URL

    const [image, setImage] = useState('')
    const [loading, setLoading] = useState(true)

    useEffect ( () => {
        axios.get(`${_apiBase}/news/${id}/image`).then(response => {setImage(response.data); setLoading(false)})
        //eslint-disable-next-line
    }, [props]);

    const imageChecked = image !== 'None' ? `data:image/jpeg;base64,${image}` : noPhoto

    const renderLoaded = (
        <Link to={`/${id}`} className='recent-item' style={{
            background: `linear-gradient(to bottom, rgba(0,0,0,0) 20%, rgba(0,0,0,1)), center / cover no-repeat url(${imageChecked})`,
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
        </Link>
    )

    return (
        <>
        {loading ? <img src={loadingIcon} alt='loading data' /> : renderLoaded}
        </>
    )
}

export default RecentNewsItem;