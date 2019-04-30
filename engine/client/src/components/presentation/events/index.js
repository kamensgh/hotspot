import React, {Component} from 'react';
import BaseTemplate from '../shared/base';
import SearchComponent from '../home/search';

class EventsPresentation extends Component {
    render() {
        return (
            <BaseTemplate>
                <div className="">
                    <div className="">
                        <SearchComponent />
                    </div>
                </div>
            </BaseTemplate>    
        )
    }
}

export default EventsPresentation;