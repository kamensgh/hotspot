import React from 'react';

const SearchComponent = () => {
    return (
        <div class="search-banner d-flex align-items-center">
            <div class="searchcontent mt-0 mt-lg-5 container" data-aos="fade-up" data-aos-once="true"  data-aos-duration="700">
                <form action="">
                    <div class=" d-flex mb-4 flex-wrap">
                        <div class="group flex-fill">     
                            {/* <div class="d-block d-md-none text-light">Name</div> */}
                            <input type="text" className="form-control" placeholder="Search for anything"/>
                            {/* <label className="d-none d-md-block">Name</label> */}
                        </div>
                        <div className="group middle flex-fill ">   
                            {/* <div className="d-block d-md-none text-light">Location</div>    
                            <input type="text"  className="form-control">
                            <label className="d-none d-md-block">Location</label> */}
                            <select name="event_category" className="filters__select flex-fill">
                                    <option value="all">All Categories</option>
                                    <option value="">Music</option>
                            </select>

                          
                        </div>
                        <div className="group">    
                                <select name="event_date" className="filters__select flex-fill event_date">
                                    <option value="all">Any Date</option>
                                    <option value="Today">Today</option>
                                    <option value="Tomorrow">Tomorrow</option>
                                    <option value="Today">This weekend</option>
                                    <option value="Tomorrow">This week</option>
                                    <option value="Today">Next week</option>
                                    <option value="Tomorrow">This month</option>
                                    <option value="Tomorrow">Next month</option>
                                    <option value="range">Pick a date range...</option>
                                </select>

                                <div className="align-items-center event_range flex-fill">
                                    <div className="input-group date flex-fill">
                                        <input type="text" className="form-control flex-fill" placeholder="Start"/>   
                                    </div>
                                    <span className="font-weight-bold p-2 text-muted">-</span>
                                    <div className="input-group end-date flex-fill">
                                        <input type="text" className="form-control flex-fill" placeholder="End"/>
                                    </div>
                                </div>
                        </div>
                    </div>
                    <div className="text-right">
                        <a href="search.html" className="badge badge-pill bg-transparent font-weight-normal">Search</a>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SearchComponent;