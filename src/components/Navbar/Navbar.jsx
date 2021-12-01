import React from 'react'
// import { Link } from 'react-router-dom'
import logo from './logo.png'
import './navbar.css'
import './navbar.css'
import {
    Link,
} from "react-scroll";





const Navbar = () => {
    return (
        <div>

            <div
                className="d-block d-sm-none navbar-bg "
                style={{
                    color: "white",
                    fontSize: "50px"

                }}>fg</div>
            < div className="navbar-bg d-none d-sm-block">
                <div>
                </div>
                <ul className="flex">

                    <Link
                        activeClass="active"
                        className="home"
                        to="home"
                        spy={true}
                        smooth={true}
                        duration={500}
                    >
                        <img src={logo} width="50px" alt="logo" />
                    </Link>

                    <Link
                        activeClass="active"
                        className="rarity"
                        to="rarity"
                        spy={true}
                        smooth={true}
                        duration={500}
                        className="text-reset"
                    >
                        <li>Rarity</li>
                    </Link>

                    <Link
                        activeClass="active"
                        className="roadmap"
                        to="roadmap"
                        spy={true}
                        smooth={true}
                        duration={500}
                    >
                        <li>Roadmap</li>
                    </Link>

                    <Link
                        activeClass="active"
                        className="faq"
                        to="faq"
                        spy={true}
                        smooth={true}
                        duration={500}
                    >
                        <li>Faq</li>
                    </Link>

                    <Link
                        activeClass="active"
                        className="team"
                        to="team"
                        spy={true}
                        smooth={true}
                        duration={500}

                    >
                        <li>Team</li>
                    </Link>

                    <Link
                        activeClass="active"
                        className="footer"
                        to="footer"
                        spy={true}
                        smooth={true}
                        duration={500}

                    >
                        <li>Footer</li>
                    </Link>
                    <button className="connect-to-wallet">Connect Wallet</button>
                </ul>


            </div >
        </div>
    )
}

export { Navbar }
