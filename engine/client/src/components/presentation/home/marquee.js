import React from 'react';

const MarqueeComponent = () => {
    return (
        <div className="happening_now d-flex align-items-center" data-aos="fade-up" data-aos-once="true"  data-aos-duration="800">
            <div className="container">
                <div className="d-flex justify-content-center flex-wrap">
                    <h5 className="mr-4 mb-0"> Check Out whats happening now:</h5>
                    <a href="events.html" className="text-dark">Click here</a>
                </div>
            </div>
        </div>
    )
}

export default MarqueeComponent;