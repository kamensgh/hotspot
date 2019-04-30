import React, {Component} from 'react';
import HomePresentation from '../presentation/home';
const $ = window.$;

class HomeContainer extends Component {
    render() {
        return <HomePresentation />;
    }

    componentDidMount() {
        $( ".event_range" ).hide();
        $(document).ready(function(){
            var selected =  $( ".event_date" ).val();

            $( ".event_date" ).change(function(){
                var selected = $(this).val();
        
                if (selected == 'range'){
                    $( ".event_date" ).hide();
                    $( ".event_range" ).fadeIn('slow');
                }
            });
        });
    }
}

export default HomeContainer;