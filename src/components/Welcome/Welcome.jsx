import React from 'react'
import welcome from './Welcome.svg'

const Welcome = () => {
    return (
        <div className=" container container-sm ">
            <div className="container text-center ">
                <img
                    className="w-75 w-sm-25 img-fluid my-4 my-sm-2 my-md-4 my-lg-5 " src={welcome} alt="Welcome" />
            </div>
            <div className="container col-10 col-sm-10 col-md-11 col-lg-12">
                <p>APG is a collection of 8888 art pieces that will be minted & sorted upon the Ethereum blockchain as an ERC-721 tokens. Each Angry Penguin is unique and programmatically generated from over 200 possible traits, including bodies, beaks, eyes, and more. All images and metadata are stored in IPFS. After the initial minting phase, they will continue to be sale and tradable via OpenSea. Membership & Roadmap perks for Angry Penguins Grotto are exclusive to APG NFT holders only. </p>

                <p>You can ask, why are theses penguins so angry? Well, these are several reasons for thus. And one of them is high gas fee. That is why we made free mint of 1 NFT for everyone! You will only pay for gas. And for those who want to mint more, 2 more options will be available at attractive prices. But there is one more thing that penguins angry. Scam projects, which are becoming more and more. Therefore, 10% of royalties will go to holders most affected by the scam.</p>
            </div>
        </div>
    )
}

export { Welcome }
