import { useEffect, useState } from "react";
import axios from "axios";

import SectionItem from "../sectionItem/SectionItem";

import loadingIcon from "../../static/loadingIcon.gif"
import './sectionNews.css'

const SectionNews = () => {
    const _apiBase = process.env.REACT_APP_API_URL

    const [sections, setSections] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect ( () => {
        axios.get(`${_apiBase}/news/section`).then(response => {setSections(response.data); setLoading(false)})
        //eslint-disable-next-line
    }, []);

    const sectionElements = sections.map(item => {
        return (
            <SectionItem 
                key={item.id}
                {...item}
            />
        )
    })

    const renderLoaded = (
        <div className='section-news-wrapper'>
            {sectionElements}
        </div>
    )

    return (
        <>
            {loading ? <img src={loadingIcon} alt='loading data' /> : renderLoaded}
        </>
    )
}

export default SectionNews;