import React from 'react'
import gyp from './gyp.svg'

const GYP = () => {
    return (
        <div className="roadmap-bg">

            <div className="container">
                <div className="text-center my-5">
                    <img
                        className="img-fluid"
                        src={gyp} alt="Get your penguin" />
                </div>
                <div className="text-center my-5">
                    <button>MINT 1</button>
                    <button>MINT 3</button>
                    <button>MINT 10</button>
                </div>
            </div>
        </div>
    )
}

export { GYP }
