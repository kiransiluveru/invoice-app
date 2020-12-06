import React from 'react';
import MainComponent from './MainComponent';
import { Link } from 'react-router'
import AboutUs from './AboutUs';
import { Router, Route, hashHistory } from 'react-router';
import AddUser from './AddUser';
import LoginComponent from './LoginComponent';

/* <ul>
    <li><Link to={'/about'}>About</Link></li>
    <li><Link to={'/main'}>MAIN COMPONENT</Link></li>
    </ul>
<hr /> */
/* <Route path='/' exact component={MainComponent} /> */
class InitialComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount(){
        console.log('this.props');
        // this.props.router.push()
    }

    render() {
        return (
            <div>
                <Router history={hashHistory} >
                    <div>
                        <Route  path="/" component={LoginComponent}></Route>
                        <Route path='/invoice' exact component={MainComponent} />
                        <Route path='/addNewUser' exact component={AddUser} />
                        <Route path='/about' exact component={AboutUs} />
                    </div>
                </Router>
            </div>
        );
    }
}

export default InitialComponent;