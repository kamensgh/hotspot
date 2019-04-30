import React,{Component} from 'react';
import Header from './header';
import Footer from './footer';

class BaseTemplate extends Component{
    render() {
        return (
            <div className="wrapper">
                <div className="content">
                    <Header />
                    {this.props.children}
                    <Footer />
                </div>
            </div>
        )
    }
}

export default BaseTemplate;