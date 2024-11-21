
import Pagination from "./Components/PaginationArticles/Pages.jsx";
import Facts from "./Facts.jsx";




// eslint-disable-next-line react/prop-types
const Legends = ({articlesData}) => {
    return (
        <div>
            <Facts></Facts>
            <h1 className={""}>Статьи</h1>
            <Pagination data={articlesData} elementsOnPage={2}></Pagination>
        </div>
    );
};

export default Legends;