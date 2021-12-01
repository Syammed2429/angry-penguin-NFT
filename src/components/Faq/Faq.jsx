import React from 'react'
// import { FAQContext } from '../contexts/FAQContext'
import { Element } from 'react-scroll'
import './faq.css'
import faq from './FAQ.svg'

const visible = {
    hide: {
        display: 'none',
    },
    show: {
        display: 'block',
    }
}


const Faq = () => {
    const [whats, setwhats] = React.useState(visible.hide)

    const [releaseDate, setReleaseDate] = React.useState(visible.hide)

    // const [expaded, setExpanded] = React.useState(false)

    // const { theme, handleThemeChange, Styles } = React.useContext(FAQContext)

    return (
        <>
            <div
                className="bg-image text-transparent"

            >

                <Element id="faq" name="faq">
                    <div className="container">
                        <div>
                            <img src={faq} alt="faq" />
                        </div>
                        <div >
                            <h2>What's the Angry Penguins Grotto?</h2>
                            <div
                                style={{
                                    color: 'white',
                                    fontSize: '25px'
                                }}
                                onClick={() => {
                                    setwhats(whats === visible.hide ? visible.show : visible.hide)
                                }}>{whats === visible.hide ? "+" : "-"}</div>
                            <p style={{ ...whats }}>APG is a collection of 8888 programmatically, randomly generated NFTs on the Ethereum blockchain.</p>




                            <h2>When is the release date?</h2>
                            <div
                                style={{
                                    color: 'white',
                                    fontSize: '25px'
                                }}
                                onClick={() => {
                                    setReleaseDate(releaseDate === visible.hide ? visible.show : visible.hide)

                                }}
                            >{releaseDate === visible.hide ? "+" : "-"}</div>


                            <p style={{ ...releaseDate }}>Penguins are eager to get into the blockchain, so it will happen very soon.Join our Discord community to keep up to date.</p>


                            <h2>Why get angry Penguins?</h2>


                            <h2>Alright, How much?</h2>



                            <p>1 NFT per wallet for 0 ETH.Yes, that's exactly it! Everyone can mint 1 NFT for free. YOu only pay for gas. And there are 2 more options for those who want to mint more penguins: 3 NFTs for 0.04 ETH + gas and 10 NFTs for 0.1 ETH + gas. They will then be available on OpenSea.io
                            </p>


                            <h2>How Do i mint an angry penguin?</h2>


                            <p >You'll only be able to mint from this site using Metamask extension for your browser. All the necessary information will be in the  #how-to-mint channel in our Discord</p>
                            <h2>Where are the images stored</h2>
                            <p>All images and metadata are stored in IPFS</p>
                            <h2>Are there secondary sale royalties?</h2>
                            <p>7.5% of the secondary sales will be deducted in royalties.After all APG have been sold, we will use them to: </p>
                            <ul type="square">

                                <li>up to 30% for marketing part and sustainable development of the project, to make sure that the project continues to grow,</li>
                                <li>5% goes to the holders suffered from the scam projects,</li>
                                <li>at least 5% will be returned to the community with prize payments of upcoming contents and raffles,</li>
                                <li>at least 30% will serve as budget for subsequent project with drops for eligible APG holders</li>
                                <li>and 30% will go to the team</li>
                            </ul>

                            <h2>When is the reveal?</h2>
                            <p>APG will be revealed in 5-6 hours after start minting</p>
                            <h2>What can i do with my angry penguin?</h2>
                            <p>You are free to do anything with them under a non-exclusive license.</p>
                            <h2>What does eligible APG holder imply?</h2>
                            <p>Having at least 1 APG NFT makes you a full-fledged member of our grotto and gives you access to events and raffles for all APG owners.But we recommend minting at least 3 pengos, because in this case you are guaranteed to get a free drop from the subsequent collection.</p>
                            <h2>Are angry penguins grotto a good investment?</h2>
                            <p>Long-term approach to project development in conjunction with significantly lower mint prices compared to similar projects allow us to believe that this is most likely a good investment, but ultimate, it is your decision that you have to make.</p>
                            <h2>What are your future plans for this project?</h2>
                            <p>It will depend on the wishes of the community.From our side, we are going to promote the collection and organize contests, giveaways and exciting events for our fellow penguins!</p>
                        </div>

                    </div>
                    <hr></hr>
                    <hr></hr>
                </Element>
            </div>

        </>
    )
}

export { Faq }
