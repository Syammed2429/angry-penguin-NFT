import React from 'react'
import rarity from './Rarity.png'
import two from './222.svg'
import eight from './8888.svg';
import name from './Rarity_.svg'
import { Element } from 'react-scroll'
import './rarity.css'

const Rarity = () => {
    return (
        <div className="rarity-bg">

            <div className="container">
                <Element id="rarity" name="rarity">
                    <div >
                        <img
                            className="w-25"
                            src={rarity} alt="rarity" />

                    </div>
                    <div>
                        <img src={two} alt="two" />
                        <p>unique nft pengos</p>
                        <img src={eight} alt="eight" />
                        <p>POSSIBLE TRAITS</p>
                    </div>

                    <div>
                        <div>
                            <img src={name} alt="name" />
                        </div>
                        <div >
                            <div>
                                <h1>31</h1>
                                <p>BACKGROUNDS</p>
                            </div>

                            <div>
                                <h1>24</h1>
                                <p>BODIES</p>
                            </div>

                            <div>
                                <h1>33</h1>
                                <p>CLOTHES</p>
                            </div>

                            <div>
                                <h1>7</h1>
                                <p>NECKLACES</p>
                            </div>

                            <div>
                                <h1>32</h1>
                                <p>BEAKS</p>
                            </div>

                            <div>
                                <h1>6</h1>
                                <p>PIERCINGS</p>
                            </div>

                            <div>
                                <h1>47</h1>
                                <p>HEADS</p>
                            </div>

                            <div>
                                <h1>47</h1>
                                <p>EYES</p>
                            </div>

                            <div>
                                <h1>1</h1>
                                <p>SAINT ANGRY</p>
                            </div>

                        </div>
                    </div>
                </Element>
            </div>
        </div>

    )
}

export { Rarity }
