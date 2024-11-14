

import './App.css'

import Video from "./Components/HomepageVideoComponent/video.jsx";
import Footer from "./Components/footerComponent/Footer.jsx";
import HomeText from "./Components/HomeTextSectionComponent/HomeText.jsx";
import Facts from "./Facts.jsx";


function App() {
// Это / хоум страница

    return (
        <div>
            <Video></Video>
            <Facts></Facts>
            <HomeText></HomeText>

        </div>
    )
}

export default App
