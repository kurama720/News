import { useState, useEffect } from 'react';
import axios from 'axios';

import SectionContentItem from "../sectionContentItem/SectionContentItem"

import './sectionItem.css';

const SectionItem = (props) => {
    const {name} = props;

    const _apiBase = process.env.REACT_APP_API_URL

    const [news, setNews] = useState([])

    useEffect ( () => {
        axios.get(`${_apiBase}/news?limit=3&section__name=${name}`).then(response => setNews(response.data.results))
        //eslint-disable-next-line
    }, [name]);

    const sectionContentElements = news.map(item => {
        return (
            <SectionContentItem 
                key={item.id}
                {...item}
            />
        )
    })

    const renderEmptyContent = (
        <div className='empty-content'>
            No news at the moment
        </div>
    ) 

    return (
        <div className='section-item-wrapper'>
            <div className='section-item-title'>
                {name}
            </div>
            <div className='section-content-wrapper'>
                {sectionContentElements.length ? sectionContentElements : renderEmptyContent}
            </div>
         </div>
    )
}

export default SectionItem;