import React from 'react'
import { Faq } from './Faq/Faq'
import { Footer } from './Footer/Footer'
import { Rarity } from './Rarity/Rarity'
import { Roadmap } from './Roadmap/Roadmap'
import { Video } from './Video/Video'
import { Welcome } from './Welcome/Welcome'
import './layout.css'





import {
    Element,
} from "react-scroll";
import { GYP } from './GYP/GYP'
import { PenguinsSlider } from './PenguinsSlider/PenguinsSlider'
import { Team } from './Team/Team'





const Layout = () => {
    return (
        <div className="layout-bg">
            <Element id="home" name="home">

                <Video />
                <Welcome />
                <Element name="rarity" className="element">
                    <Rarity />
                </Element>

                <Element name="gyp" className="element">
                    <GYP />
                </Element>

                <Element name="slider" className="element">
                    <PenguinsSlider />
                </Element>

                <Element name="roadmap" className="element">
                    <Roadmap />
                </Element>

                <Element name="faq" className="element">
                    <Faq />
                </Element>

                <Element name="team" className="element">
                    <Team />
                </Element>
                <Footer />

            </Element>
        </div>
    )
}

export default Layout
