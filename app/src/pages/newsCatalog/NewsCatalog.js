import RecentNews from "../../components/recentNews/RecentNews"
import SectionNews from "../../components/sectionNews/SectionNews";

import './newsCatalog.css'

const NewsCatalog = () => {

    return (
        <div className='wrapper-shop'>
            <RecentNews />
            <SectionNews />
        </div>
    );
}

export default NewsCatalog;