import {useState, useEffect} from "react";
import axios from "axios";

import RecentNewsItem from "../recentNewsItem/RecentNewsItem"
import currentDate from "../../utils/currentDate"

import './recentNews.css';

const RecentNews = () => {

    const _apiBase = process.env.REACT_APP_API_URL

    const [news, setNews] = useState([]);
    const {currentWeekday, currentDay, currentMonth} = currentDate();

    useEffect ( () => {
        axios.get(`${_apiBase}/news?limit=5`).then(response => setNews(response.data.results))
        //eslint-disable-next-line
    }, []);

    const elements = news.map(item => {
        return (
            <RecentNewsItem 
                key={item.id}
                {...item}
            />
        )
    })

    return (
        <div className='recent-news-section'>
            <div className='section-title-wrapper'>
                <div className='section-title'>
                    Welcome to News.com
                </div>
                <div className='section-date'>
                    {currentWeekday}, {currentDay} {currentMonth}
                </div>
            </div>
            <div className='recent-wrapper'>
                {elements}
            </div>
        </div>
    )
}

export default RecentNews;