import React from 'react';

const HomeText = () => {
    return (
        <div className="HomeText text-white mt-5">
            <h1 className="mt-5"> Развенчание мифов и легенд</h1>

            <p className={'mt-5'}> Добро пожаловать на сайт, посвященный критическому анализу мифов и легенд.</p>

            <h2 className={'mt-5'}> Мы предлагаем вам:</h2>

            <ul className={'mt-5 HomeText-list'}>
                <li>
                    <p> <b> Разоблачение популярных мифов</b>: Мы анализируем происхождение, эволюцию и реальные факты, стоящие
                        за самыми известными мифами и легендами.</p>
                </li>
                <li>
                    <p> <b>Рациональный подход</b>: Мы опираемся на логику и исторические факты, чтобы отделить правду от
                        вымысла.</p>
                </li>
                <li>
                    <p>  <b> Объективная информация</b>: Мы предоставляем вам достоверные сведения о том, как появились мифы и
                        легенды, и как
                        они влияли на жизнь людей.</p>
                </li>
            </ul>
            <div className="wrap-text1">
            <h3> Наш сайт - место для тех, кто ценит логику и здравый смысл.</h3>
            <h3> Приглашаем вас присоединиться к <i className={"highlight"}>нам</i>!</h3>
            </div>


        </div>
    );
};

export default HomeText;