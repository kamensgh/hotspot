import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <nav className="pb-0 w-100  navbar-expand-lg main px-0">
            <div className="align-items-baseline container-wide d-flex flex-column">
                <div className="d-md-flex justify-content-md-between w-100">
                    <Link className="navbar-brand" to="/">
                        {/*<img src="../app/dist/images/logo.png" className="img-fluid" width="98" /> */}
                        logo
                    </Link>
                    <button className="navbar-toggler position-relative right-0" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 87.611 62.901">
                                <g id="drawer" transform="translate(0.006 -1.871)">
                                    <path id="Path_7853" data-name="Path 7853" d="M1.36,2.051a11.578,11.578,0,0,1,2.066-.18c.241,0,.479.007.711.021H84.663c.057,0,.122,0,.187,0a4.487,4.487,0,0,1,2.28.557h0a1.08,1.08,0,0,1,.452.817.8.8,0,0,1-.035.239l0-.009V7.6a.786.786,0,0,1,.032.23,1.049,1.049,0,0,1-.406.778l.005-.006a4.478,4.478,0,0,1-2.285.561c-.081,0-.162,0-.241,0H4.108c-.206.012-.443.018-.684.018a12.5,12.5,0,0,1-2.077-.17l.049.007A1.894,1.894,0,0,1,0,8.166l0-.009V2.939a1.814,1.814,0,0,1,1.344-.886l.016,0Z" transform="translate(0.021 0)" fill="rgba(245,245,245,0.91)" />
                                    <path id="Path_7854" data-name="Path 7854" d="M.83,14.091a3.989,3.989,0,0,1,1.553-.155h46.57c.907-.04,1.68.564,1.65,1.208v4.863a1.049,1.049,0,0,1,.022.223,1.353,1.353,0,0,1-.388.9l.015-.019a1.884,1.884,0,0,1-1.419.444l-.1,0H1.577A1.534,1.534,0,0,1-.006,20.511V15.035c.019-.362.329-.691.836-.952l-.007,0Z" transform="translate(0 15.682)" fill="rgba(245,245,245,0.91)" />
                                    <path id="Path_7855" data-name="Path 7855" d="M0,27.04a2.829,2.829,0,0,1,2.517-1.063c.073,0,.149,0,.219,0h81.92c.051,0,.114,0,.173,0a4.608,4.608,0,0,1,2.187.5h0a.921.921,0,0,1,.514.743c0,.028,0,.058-.005.086v4.883c.035.615-1.349,1.161-2.879,1.119H2.9c-.105.007-.224.012-.346.012a3.066,3.066,0,0,1-2.552-1L0,32.309Z" transform="translate(0.021 31.45)" fill="rgba(245,245,245,0.91)" />
                                </g>
                            </svg>
                        </span>
                    </button>

                    <div className="justify-content-md-end justify-content-center navbar-collapse collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav align-items-center justify-content-center inner">


                            <li className="nav-item pb-3 pb-lg-0 ">
                                <Link className="nav-link" to="/">
                                    <i className="fas fa-calendar-alt"></i>
                                    Places</Link>
                            </li>
                            <li className="nav-item pb-3 pb-lg-0 ">
                                <Link className="nav-link" throw="/">
                                    <i className="fas fa-cocktail"></i>
                                    Events</Link>
                            </li>
                            <li className="nav-item pb-3 navbar-profile-dropdown pb-lg-0 ">
                                {/*<a className="nav-link login m-0" href="login.html">Login</a> */}
                                <a className="nav-link" href="#" id="navbarProfileDropdown" role="button" data-toggle="dropdown" aria-haspopup="true"
                                    aria-expanded="false">
                                    <span className="d-none d-lg-block">
                                        <img className="topbar__avatar-img" src={process.env.PUBLIC_URL+"/images/01.jpg"} alt="avatar"/>
                                            <p className="topbar__avatar-name">Brian Dalton </p> 
                                    </span>

                                    <span className="d-block d-lg-none">Account</span>
                                </a>
                                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarProfileDropdown">
                                    <a className="m-0">
                                        <div className="dropdown-header">
                                            <h5 className="text-truncate">
                                                <span>Brian Dalton</span>
                                            </h5>
                                        </div>
                                    </a>
                                    <a className="dropdown-item" href="create-event.html">Create Event</a>
                                    <a className="dropdown-item" href="search.html">Favourites</a>
                                    <a className="dropdown-item" href="login.html">Logout</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Header;