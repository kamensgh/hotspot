import React, {Component} from 'react';
import EventsPresentation from '../presentation/events';
const $ = window.$;

class EventsContainer extends Component {
    render() {
        return <EventsPresentation />;
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

export default EventsContainer;