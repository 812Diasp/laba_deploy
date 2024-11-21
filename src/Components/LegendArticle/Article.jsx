import './article.css'
import {Link} from "react-router-dom";

// eslint-disable-next-line react/prop-types
function Article({id,desc, title, date,imgurl,views}) {


    function formatViews(){
        return views.toLocaleString('en-US').replaceAll(',','.');
    }

    return (
        <Link to={`/article/${id}`}>
        <div className={"article"}>
            <div className="article-img">
                <img src={imgurl} className="article-img"/>
            </div>
            <div className="article-text">
                <h2 className={"article-title"}>{title}</h2>
                <p className={"article-desc"}>{desc}</p>
                <div className="date-views">
                    <p>{date}</p>
                    <span>{formatViews()} просмотров</span>
                </div>

            </div>
        </div>
        </Link>
    );
}

export default Article;