
import {useParams} from "react-router-dom";
import './ArticleDetail.css'
// eslint-disable-next-line react/prop-types
const ArticleDetail = ({articles}) => {
    const { id } = useParams(); // Get the ID from the route
    // eslint-disable-next-line react/prop-types
    const article = articles.find((a) => a.id === parseInt(id));

    if (!article) {
        return <p>Article not found.</p>;
    }

    return (
        <div className={'article-detail-container'}>
            <h2 className={'article-title-details'}>{article.title}</h2>
            <img className={'article-img-details'} src={article.imgurl} alt={article.title} />
            <pre className={'article-text-details'}>{article.articleText}</pre>

        </div>
    );
};

export default ArticleDetail;
