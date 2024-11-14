import {useEffect, useState} from "react";
import Article from "../LegendArticle/Article.jsx";
import './pagination.css'
// eslint-disable-next-line react/prop-types
function Pagination({data, elementsOnPage}) {
    const [articles, setArticles] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const dataLimit = elementsOnPage; // Number of articles to display per page
    useEffect(() => {

        setArticles([...data]);
    }, [data]);
    const renderPage = () => {
        const startIndex = currentPage;
        const endIndex = Math.min(currentPage + dataLimit, articles.length);
        return articles.slice(startIndex, endIndex).map((article) => (
            <Article
                key={article.id}
                views={article.views}
                imgurl={article.imgurl}
                title={article.title}
                desc={article.desc}
                date={article.date}
            />
        ));
    };
    const handlePreviousPage = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        if (currentPage < Math.ceil(articles.length / dataLimit) - 1) {
            setCurrentPage(currentPage + 1);
        }
    };

    function sortByPopularity() {
        setArticles(articles.sort((a, b) => b.views - a.views));
        setCurrentPage(1)
        setTimeout(() => {
            setCurrentPage(0)
        }, 5);
    }

    function sortByDate() {
        // setArticles(articles.sort((a, b) => {
        //     // Convert date strings to Date objects for comparison
        //     const dateA = new Date(a.date);
        //     const dateB = new Date(b.date);
        //
        //     // Compare dates in descending order
        //     return dateB - dateA;
        //
        // }));

        const sortedArticles = [...articles].sort((a, b) => {
            const dateA = new Date(a.date);
            const dateB = new Date(b.date);
            return dateB.getTime() - dateA.getTime();
        });
        setArticles(sortedArticles);
        setCurrentPage(1)
        setCurrentPage(0)
    }

    function sortLowPopularity() {

        setArticles(articles.sort((a, b) => a.views - b.views));
        setCurrentPage(1)
        setTimeout(() => {
            setCurrentPage(0)
        }, 5);
    }

    return (
        <div>
            <h3>Сортировка</h3>
            <button className={'btn btn-info'} onClick={sortByPopularity}>По популярности</button>
            <button className={'btn btn-info'} onClick={sortByDate}>По дате</button>
            <button className={'btn btn-info'} onClick={sortLowPopularity}>Менее популярные</button>

            {/* Render */}
            {renderPage()}
            {/*кнопки пагинации*/}
            <div className="pagination-controls">
                <button onClick={handlePreviousPage} disabled={currentPage === 0}>
                    Назад
                </button>
                <button
                    onClick={handleNextPage}
                    disabled={currentPage === Math.ceil(articles.length / dataLimit) - 1}
                >
                    Дальше
                </button>
            </div>
        </div>
    );
}

export default Pagination;