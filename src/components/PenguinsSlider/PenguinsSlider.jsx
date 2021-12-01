import React from 'react'
// import slide1 from './pengo1.png'
// import slide2 from './pengo2.png'
import './penguineslide.css'

const PenguinsSlider = () => {
    return (
        <div>



            <div>
                <div className="slider-wrap1">
                    <img alt="slide1" />
                </div>

                <div>
                    <div className="slider-wrap">
                        <img alt="slide2" />
                        {/* <img /> */}
                        {/* <img /> */}
                    </div>
                </div>

            </div>
        </div>
    )
}

export { PenguinsSlider }
