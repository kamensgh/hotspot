import React, {Component} from 'react';
import Header from '../shared/header';
import SearchComponent from './search';
import MarqueeComponent from './marquee';
import PartnerComponent from './partner';
import Footer from '../shared/footer';

class HomePresentation extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="wrapper">
                    <div className="content">
                        <Header />

                        <div className="">
                            <div className="">
                                <SearchComponent />
                                <MarqueeComponent />    
                                <PartnerComponent />
                            </div>
                        </div>

                        <Footer />
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default HomePresentation;