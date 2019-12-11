import React, {Component} from 'react';
import SearchComponent from './search';
import MarqueeComponent from './marquee';
import PartnerComponent from './partner';
import BaseTemplate from '../shared/base';

class HomePresentation extends Component {
    render() {
        return (
            <BaseTemplate>
                <div className="">
                    <div className="">
                        <SearchComponent />
                        <MarqueeComponent />    
                        <PartnerComponent />
                    </div>
                </div>
            </BaseTemplate>    
        )
    }
}

export default HomePresentation;