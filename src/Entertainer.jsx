import './assets/styles/main.css'
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";

import background from './assets/images/shutterstock_253662781-1920x1080.webp'
import Content from './pages/Content';
import Sidebar from './components/Sidebar.jsx/Sidebar';

const sections = ['home', 'aboutUs', 'ourHistory', 'testimonials', 'audioVideo', 'marineCar', 'surveillance', 'automation', 'partners', 'faqs', 'commitment', 'contact'];

const Entertainer = () => {
    return (
        <div>
            <div style={{ position: 'relative', zIndex: 1 }}>
                <Navbar sections={sections} />
                <Sidebar />
                <Content sections={sections}/>
                <Footer />
            </div>

        </div>
    );
}

export default Entertainer;