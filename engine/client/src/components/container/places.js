import React, {Component} from 'react';
import PlacesPresentation from '../presentation/events';
const $ = window.$;

class PlacesContainer extends Component {
    render() {
        return <PlacesPresentation />;
    }

    componentDidMount() {
        $( ".event_range" ).hide();
        $(document).ready(function(){
            $( ".event_date" ).change(function(){
                var selected = $(this).val();
        
                if (selected === 'range'){
                    $( ".event_date" ).hide();
                    $( ".event_range" ).fadeIn('slow');
                }
            });
        });
    }
}

export default PlacesContainer;