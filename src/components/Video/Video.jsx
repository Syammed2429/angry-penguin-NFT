import React from 'react'
import video from './angry.mp4'

const Video = () => {
    return (
        <div className="container container-sm container-md container-lg container-xl container-xl
          col-10 ">
            <div className="rounded 0 shadow ">
                <video
                    className="my-5"
                    width="100%" autoPlay loop muted >
                    <source src={video} />
                </video>
            </div>
        </div>
    )
}

export { Video }
