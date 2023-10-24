import React, { useState, useEffect } from 'react';
import { Element, animateScroll as scroll } from 'react-scroll';
import Home from './Home/Home';
import AboutUs from './Home/AboutUs';
import OurHistory from './Home/OurHistory';
import Testimonials from './Home/Testimonials';
import AudioVideo from './Services/AudioVideo';
import MarineCar from './Services/MarineCar';
import Security from './Services/Security';
import Cameras from './Services/Cameras';
import Lighting from './Services/Lighting';
import Shades from './Services/Shades';
import Partners from './Home/Partners';
import FAQs from './Home/FAQs';
import Commitment from './Home/Commitment';
import Contact from './Home/Contact';
import Surveillance from './Services/Surveillance';
import Automation from './Services/Automation';

// const sections = ['home', 'aboutUs', 'ourHistory', 'testimonials', 'audioVideo', 'marineCar', 'security', 'cameras', 'lighting', 'shades', 'partners', 'faqs', 'commitment', 'contact'];

const Content = ({sections}) => {
    // const [touchStart, setTouchStart] = useState(null)
    // const [touchEnd, setTouchEnd] = useState(null)

    // const minSwipeDistance = 50

    // const onTouchStart = (e) => {
    //     setTouchEnd(null) // otherwise the swipe is fired even with usual touch events
    //     setTouchStart(e.targetTouches[0].clientY)
    // }

    // const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientY)

    // const onTouchEnd = (e, prevSection, nextSection) => {
    //     setTouchEnd(e.changedTouches[0].clientY)
    //     if (!touchStart || !touchEnd) return;
    //     const distance = touchStart - touchEnd;
    //     console.log(distance)
    //     if (distance < minSwipeDistance && distance > -minSwipeDistance) return;
    //     const isUpSwipe = distance < minSwipeDistance;
    //     const isDownSwipe = distance > -minSwipeDistance;
    //     if (isDownSwipe || isUpSwipe) {
    //         console.log(isDownSwipe)
    //         const targetSectionIndex = isDownSwipe ? nextSection : prevSection;
    //         console.log(targetSectionIndex)
    //         scroll.scrollTo(sections.indexOf(targetSectionIndex) * window.innerHeight, {
    //             duration: 500,
    //             smooth: true,
    //         });
    //     }
    //     setTouchStart(null);
    //     setTouchEnd(null);
    // };

    // const handleWheel = (event, prevSection, nextSection) => {

    //     if (event.deltaY > 0 && nextSection) {
    //         scroll.scrollTo(sections.indexOf(nextSection) * window.innerHeight, {
    //             duration: 500,
    //             smooth: true,
    //         });
    //     } else if (event.deltaY < 0 && prevSection) {
    //         scroll.scrollTo(sections.indexOf(prevSection) * window.innerHeight, {
    //             duration: 500,
    //             smooth: true,
    //         });
    //     }

    // };

    // useEffect(() => {
    //     const handleScroll = () => {
    //         // Handle scroll position logic
    //     };

    //     document.body.style.touchAction = 'none';

    //     window.addEventListener('scroll', handleScroll);

    //     return () => {
    //         window.removeEventListener('scroll', handleScroll);
    //         document.body.style.touchAction = '';
    //     };
    // }, []);

    return (
        <div>
            <Element
                name={sections[0]}
                // onWheel={(event) => handleWheel(event, null, sections[1])}
                // onTouchStart={(e) => onTouchStart(e)}
                // onTouchMove={(e) => onTouchMove(e)}
                // onTouchEnd={(e) => onTouchEnd(e, null, sections[1])}
            >
                <Home />
            </Element>
            <Element
                name={sections[1]}
                // onWheel={(event) => handleWheel(event, sections[0], sections[2])}
                // onTouchStart={(e) => onTouchStart(e)}
                // onTouchMove={(e) => onTouchMove(e)}
                // onTouchEnd={(e) => onTouchEnd(e, sections[0], sections[2])}
            >
                <AboutUs />
            </Element>
            <Element
                name={sections[2]}
                // onWheel={(event) => handleWheel(event, sections[1], sections[3])}
                // onTouchStart={(e) => onTouchStart(e)}
                // onTouchMove={(e) => onTouchMove(e)}
                // onTouchEnd={(e) => onTouchEnd(e, sections[1], sections[3])}
            >
                <OurHistory />
            </Element>
            <Element
                name={sections[3]}
                // onWheel={(event) => handleWheel(event, sections[2], sections[4])}
                // onTouchStart={(e) => onTouchStart(e)}
                // onTouchMove={(e) => onTouchMove(e)}
                // onTouchEnd={(e) => onTouchEnd(e, sections[2], sections[4])}
            >
                <Testimonials />
            </Element>
            <Element
                name={sections[4]}
                // onWheel={(event) => handleWheel(event, sections[3], sections[5])}
                // onTouchStart={(e) => onTouchStart(e)}
                // onTouchMove={(e) => onTouchMove(e)}
                // onTouchEnd={(e) => onTouchEnd(e, sections[3], sections[5])}
            >
                <AudioVideo />
            </Element>
            <Element
                name={sections[5]}
                // onWheel={(event) => handleWheel(event, sections[4], sections[6])}
                // onTouchStart={(e) => onTouchStart(e)}
                // onTouchMove={(e) => onTouchMove(e)}
                // onTouchEnd={(e) => onTouchEnd(e, sections[4], sections[6])}
            >
                <MarineCar />
            </Element>
            <Element
                name={sections[6]}
                // onWheel={(event) => handleWheel(event, sections[5], sections[7])}
                // onTouchStart={(e) => onTouchStart(e)}
                // onTouchMove={(e) => onTouchMove(e)}
                // onTouchEnd={(e) => onTouchEnd(e, sections[5], sections[7])}
            >
                <Surveillance />
            </Element>
            <Element
                name={sections[7]}
                // onWheel={(event) => handleWheel(event, sections[6], sections[8])}
                // onTouchStart={(e) => onTouchStart(e)}
                // onTouchMove={(e) => onTouchMove(e)}
                // onTouchEnd={(e) => onTouchEnd(e, sections[6], sections[8])}
            >
                <Automation />
            </Element>
            
            <Element
                name={sections[8]}
                // onWheel={(event) => handleWheel(event, sections[9], sections[11])}
                // onTouchStart={(e) => onTouchStart(e)}
                // onTouchMove={(e) => onTouchMove(e)}
                // onTouchEnd={(e) => onTouchEnd(e, sections[9], sections[11])}
            >
                <Partners />
            </Element>
            <Element
                name={sections[9]}
                // onWheel={(event) => handleWheel(event, sections[10], sections[12])}
                // onTouchStart={(e) => onTouchStart(e)}
                // onTouchMove={(e) => onTouchMove(e)}
                // onTouchEnd={(e) => onTouchEnd(e, sections[10], sections[12])}
            >
                <FAQs />
            </Element>
            <Element
                name={sections[10]}
                // onWheel={(event) => handleWheel(event, sections[11], sections[13])}
                // onTouchStart={(e) => onTouchStart(e)}
                // onTouchMove={(e) => onTouchMove(e)}
                // onTouchEnd={(e) => onTouchEnd(e, sections[11], sections[13])}
            >
                <Commitment />
            </Element>
            <Element
                name={sections[11]}
                // onWheel={(event) => handleWheel(event, sections[12], null)}
                // onTouchStart={(e) => onTouchStart(e)}
                // onTouchMove={(e) => onTouchMove(e)}
                // onTouchEnd={(e) => onTouchEnd(e, sections[12], sections[13])}
            >
                <Contact />
            </Element>
        </div>
    );
};

export default Content;