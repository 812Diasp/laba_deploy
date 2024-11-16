
import Pagination from "./Components/PaginationArticles/Pages.jsx";




// eslint-disable-next-line react/prop-types
const Legends = ({articlesData}) => {
    return (
        <div>
            <h1 className={"mt-5"}>Статьи</h1>
            <Pagination data={articlesData} elementsOnPage={2}></Pagination>
        </div>
    );
};

export default Legends;