import './video.css'

const Video = () => {
    function press() {
        alert("Hello React!")
    }

    return (
        <div className="home-video-container">
            <div className="video-wrapper" onClick={press}>

                <h1 className={"video-text text-white"}>Исследовать мистические легенды</h1>
                <video playsInline autoPlay muted loop poster="">
                    <source src="Home_Page_Background_Vid.mp4" type="video/webm"/>
                    Your browser does not support the video tag.
                </video>
            </div>
            <div className="video-quote-container">
                <q className={'video-quote-text mt-5'}>Экстраординарные заявления требуют экстраординарных доказательств.</q>
                <h3 className={'text-white mt-5'}>Карл Эдвард Сагган</h3>
            </div>


        </div>
    );
};

export default Video;