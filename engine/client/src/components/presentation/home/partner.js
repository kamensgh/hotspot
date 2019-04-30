import React from 'react';

const PartnerComponent = () => {
    return (
        <div className="container mt-5">
            <div className="small--card d-flex flex-wrap justify-content-between"> 
                <div className="card bg-dark text-white" data-aos="fade-up" data-aos-once="true"  data-aos-duration="400">
                    <a href="search.html">
                        <img className="card-img" src="images/67.jpg" alt="Card image"/>
                        <div className="align-items-center align-items-lg-end justify-content-center justify-content-lg-between card-img-overlay d-flex">
                            <h5 className="card-title">family </h5>
                        
                        </div>
                    </a>
                </div>
    
                <div className="card bg-dark text-white" data-aos="fade-up" data-aos-once="true"  data-aos-duration="600">
                    <img className="card-img" src="images/65.jpg" alt="Card image"/>
                    <div className="align-items-center align-items-lg-end justify-content-center justify-content-lg-between card-img-overlay d-flex">
                        <h5 className="card-title">friends </h5>
                    
                    </div>
                </div>
    
                <div className="card bg-dark text-white" data-aos="fade-up" data-aos-once="true"  data-aos-duration="800">
                    <img className="card-img" src="images/67.jpg" alt="Card image"/>
                    <div className="align-items-center align-items-lg-end justify-content-center justify-content-lg-between card-img-overlay d-flex">
                        <h5 className="card-title">colleagues </h5>
                    
                    </div>
                </div>
    
                <div className="card bg-dark text-white" data-aos="fade-up" data-aos-once="true"  data-aos-duration="1000">
                    <img className="card-img" src="images/65.jpg" alt="Card image"/>
                    <div className="align-items-center align-items-lg-end justify-content-center justify-content-lg-between card-img-overlay d-flex">
                        <h5 className="card-title">partners </h5>
                    
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PartnerComponent;