import Article from "./Components/LegendArticle/Article.jsx";
const articles = [
    {
        id:1,
        title: "Разоблачение мифа о Бермудском треугольнике",
        desc: "Развенчивание мифов о таинственных исчезновениях кораблей и самолетов в Бермудском треугольнике.  Анализ статистических данных, природных явлений и научных объяснений.",
        date: "2024-10-27",
        views:123134,
        imgurl:"https://news.store.rambler.ru/img/149d9ec31854e854824cc39be5fd3c9f?img-format=auto&img-1-resize=width:640,height:360,fit:cover&img-2-filter=sharpen"
    },
    {
        id:2,
        title: "Проклятие Тутанхамона: правда и вымысел",
        desc: "Исследование легенды о проклятии фараона Тутанхамона.  Обзор исторических фактов, археологических находок и  научных исследований, которые объясняют  гибель людей, якобы связанных с проклятием.",
        date: "2024-10-20",
        views:73177,
        imgurl: "http://cdn.iz.ru/sites/default/files/styles/900x506/public/article-2019-02/GettyImages-503126924.jpg?itok=_5oqlEtg"
    },
    {
        id:3,
        title: "Лох-несское чудовище: реальность или вымысел?",
        desc: "Анализ  фотографий, видеоматериалов  и свидетельских показаний о Лох-несском чудовище.  Рассмотрение возможных объяснений  феномена,  включая  ошибки наблюдения и  естественные явления.",
        date: "2024-10-13",
        views:52249,
        imgurl:"https://intrigue.dating/wp-content/uploads/2023/07/1667267125_28-celes-club-p-lokhnesskoe-chudovishche-ozero-instagram-29.jpg"
    },
    {
        id:4,
        title: "Чупакабра: миф или реальность?",
        desc: "Разоблачение легенды о чупакабре,  мифическом существе,  которое якобы  нападает на домашний скот в  Латинской Америке.  Исследование  свидетельских показаний,  фотографий  и  видеозаписей,  а также  научные  объяснения возможных  причин  появления мифа.",
        date: "2024-10-06",
        views:89012,
        imgurl: "https://avatars.dzeninfra.ru/get-zen_doc/271828/pub_65e647453c952045d3f6c399_65e647b08ebaf940911b5a9d/scale_1200"
    },
    {
        id:5,
        title: "Фигуры на полях:  естественное явление  или  инопланетный  сигнал?",
        desc: "Обзор  феномена  фигур  на полях  (круги  на полях).  Анализ  свидетельских  показаний,  фотографий  и  видеоматериалов.  Исследование  возможных  причин  появления  фигур,  включая  естественные  явления,  искусные  подделки  и  другие  гипотезы.",
        date: "2024-09-29",
        views:1251242,
        imgurl:"https://i.pinimg.com/736x/88/c1/a2/88c1a2e9f14aff7052e0d20e1e38f76c.jpg"
    }
];

const Legends = () => {
    return (
        <div>
            <h2 className={"mt-5"}>Статьи</h2>
            {articles.map(article => (
                <Article views={article.views} key={article.id} imgurl={article.imgurl} title={article.title} desc={article.desc} date={article.date}></Article>
            ))}
        </div>
    );
};

export default Legends;