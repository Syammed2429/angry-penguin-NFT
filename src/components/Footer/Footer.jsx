import React from 'react'
import footerLogo from './footer logo.png'
import discord from './discord.svg';
import twitter from './twitter.svg';
import openSea from './opensea.svg'
import { Element } from 'react-scroll'



const Footer = () => {
    return (
        <div className="container text-center">
            <Element id="footer" name="footer">

                <div className="my-3">
                    <img width="70px" src={footerLogo} alt="footer Logo" />
                </div>
                <h4>Verified Smart Contract (will be soon)</h4>
                <div className=" mb-5 d-flex justify-content-center gap-4">
                    <img width="50px" src={twitter} alt="twitter " />
                    <img width="50px" src={discord} alt="discord " />
                    <img width="50px" src={openSea} alt="openSea" />
                </div>
            </Element>

        </div>
    )
}

export { Footer }
