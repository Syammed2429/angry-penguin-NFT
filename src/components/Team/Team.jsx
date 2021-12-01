import React from 'react'
import team from './team.svg'
import grotto from './grotto.png';
import frozen from './frozenpengui.png';
import VR from './vrpunk.png';
import night from './nightdesign.png';

const Team = () => {
    return (
        <div className="container" >
            <div className="text-center my-5">
                <img
                    className="img-fluid"
                    src={team} alt="team heading" />

            </div>
            <div
                className=" text-center row"
                style={{ display: 'flex', justifyContent: 'center' }}>

                <div className="col-4 col-sm-4 col-md-3 col-lg-3 col-xl-3">
                    <img
                        className="img-fluid w-100"
                        width="500px"
                        src={grotto} alt="grotto" />
                    <h5

                    >GrottoCreozotto</h5>
                    <p>Founder, Designer,Community Manager</p>
                </div>

                <div className="col-4 col-sm-4 col-md-3 col-lg-3 col-xl-3">
                    <img
                        className="img-fluid w-100"
                        src={frozen} alt="frozen" />
                    <h4>Frozen Pengui</h4>
                    <p>Promo Assistant</p>
                </div>

                <div className="col-4 col-sm-4 col-md-3 col-lg-3 col-xl-3">
                    < img
                        className="img-fluid w-100"
                        src={VR} alt="vrPunk" />
                    <h4>VRPunk</h4>
                    <p>Smart Contract Developer</p>
                </div>

                <div className="col-4 col-sm-4 col-md-3 col-lg-3 col-xl-3">
                    <img
                        className="img-fluid  w-xl-75 w-lg-100 w-md-50 w-sm-25 w-100"
                        src={night} alt="nightDesign" />
                    <h4
                        className="h3 h3-sm h3-md h4-lg"
                    >NightDesign</h4>
                    <p>Artist, Designer</p>
                </div>

            </div>
        </div>
    )
}

export { Team }
