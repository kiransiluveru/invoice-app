import React from 'react';
import MainComponent from './MainComponent';
import AboutUs from './AboutUs';
import { Router, Route, hashHistory } from 'react-router';
import LoginComponent from './LoginComponent';

class InitialComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount(){
        // this.props.router.push()
    }

    render() {
        return (
            <div>
                <Router history={hashHistory} >
                    <div>
                        <Route  path="/" component={LoginComponent}></Route>
                        <Route path='/invoice' exact component={MainComponent} />
                        <Route path='/about' exact component={AboutUs} />
                    </div>
                </Router>
            </div>
        );
    }
}

export default InitialComponent;