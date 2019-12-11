import React, {Component} from 'react';
import BaseTemplate from '../shared/base';
import SearchComponent from '../home/search';

class PlacesPresentation extends Component {
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

export default PlacesPresentation;