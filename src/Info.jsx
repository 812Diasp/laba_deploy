

const Info = () => {
    return (
        <div className={' px-4 py-5'}>
        <h2 className="pb-2">О сайте</h2>
    <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
        <div className="feature col">

            <h3 className="fs-2  highlight">О чем сайт?</h3>
            <p>Этот сайт является простой версией агрегатора статей и новостей.<br/>
                В последствии сюда можно добавить секцию комментариев, админ панель и многое другое</p>

        </div>
        <div className="feature col">
            <h3 className="fs-2  highlight">Сделал</h3>
            <p>Ткаченко Денис Сергеевич из группы ИНС-24-2. Затрачено времени 6 часов (на то чтобы вспомнить что такое
                реакт блин хыхых)</p>
        </div>
        <div className="feature col">
            <h3 className="fs-2  highlight">Инструменты</h3>
            <p><b className={'react-main-color'}>React JS</b> <b className={'react-color'}><br/>UseState<br/>UseRef <br/>React Router DOM<br/>UseEffect<br/></b>HTML<br/>CSS</p>

        </div>
    </div>
        </div>
);
};

export default Info;