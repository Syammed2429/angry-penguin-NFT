import React from 'react'
import roadMap from './Roadmap.svg'
import { Element } from "react-scroll";
import './roadmap.css'


const Roadmap = () => {
    return (
        <div className="roadmap-bg">

            <div className="container ">
                <Element id="roadmap" name="roadmap">
                    <div className="text-center my-5 ">
                        <img
                            className="img-fluid"
                            src={roadMap} alt="roadMap" />
                    </div>
                    <div>
                        <div className=" 0 shadow col-5 mx-5">
                            <div className="d-flex">
                                <h2>PHASE 1</h2>
                                <p>(PRE-RELEASE)</p>
                            </div>
                            <li>Presale marketing, contests, giveaways (in progress)</li>
                        </div>

                        <div>
                            <div>
                                <h2>PHASE 2</h2>
                                <p>(MINING)</p>
                            </div>
                            <div>
                                <li>Public sale launch</li>
                                <li>APG will be tradable on OpenSea</li>
                                <li>Transferring prizes to giveaway and contests winners</li>
                                <li>Active promotion of the collection</li>
                                <li>Mem and art contests, giveaways for holders</li>
                                <li>Airdrop 5 APG NFT to random OG holders</li>
                                <li>Listing on rarity services</li>
                                <li>Verification on OpenSea</li>
                            </div>
                        </div>

                        <div>
                            <div>
                                <h2>PHASE 3</h2>
                                <p>(SOLD OUT)</p>
                            </div>
                            <div>
                                <li>10% of royalties will be distributed among the holders who have suffered the most from the scam projects</li>
                                <li>At least 5% of royalties will be raffled in upcoming events and contests for our community</li>
                                <li>Start of work on the next collection with drops to eligible APG holders</li>
                            </div>
                        </div>

                    </div>
                </Element>
            </div>
        </div>

    )
}

export { Roadmap }
