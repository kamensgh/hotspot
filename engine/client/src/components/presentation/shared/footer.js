import React from 'react';

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-8">
                        <div className="footer__contact-us">
                            <h3 className="footer--title">Contact us</h3>
                            <h4><a href="tel:0121 711 7300">+233 267 626 632</a></h4>
                            <h4><a href="">info@hotspot.com</a></h4>
                        </div>

                        <ul className="social-links">
                            <li>
                                <a href="" target="_blank" aria-label="Facebook">
                                    <span style={{backgroundImage: "url('https://renewalcc.com/app/uploads/2018/08/facebook.svg')"}}></span>        
                                </a>
                            </li>
                            <li>
                                <a href="" target="_blank" aria-label="Instagram">
                                    <span style={{backgroundImage: "url('https://renewalcc.com/app/uploads/2018/08/Instagram.svg')"}}></span>       
                                </a>
                            </li>
                            <li>
                                <a href="" target="_blank" aria-label="Twitter">
                                    <span style={{backgroundImage: "url('https://renewalcc.com/app/uploads/2018/08/Twitter.svg')"}}></span>        
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="col-12 col-md-2">
                        <div className="footer__location">
                            <h3 className="footer--title">
                                <i className="fas fa-map-marker-alt"></i> 
                            Links</h3>
                            
                            <span>
                                <a href="">About</a>
                            </span>
                            <span><a href="">Terms of Use</a></span>
                            <span><a href="">Privacy Policy</a></span>
                        </div>
                    </div>
                    <div className="col-12 col-md-2">
                        <div className="footer__location">
                            <h3 className="footer--title">
                                <i className="fas fa-map-marker-alt"></i> 
                            Links</h3>
                            
                            <span>
                                <a href="">About</a>
                            </span>
                            <span><a href="">Terms of Use</a></span>
                            <span><a href="">Privacy Policy</a></span>
                        </div>
                    </div>
                </div>

                <div className="d-flex justify-content-center footer__copyright">
                    <span>© {new Date().getFullYear()} Qomot |  All Rights Reserved </span>
                </div>

            </div>
        </footer>
    )
}

export default Footer;