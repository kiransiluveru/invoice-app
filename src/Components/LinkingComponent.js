import React from 'react';
import {Link} from 'react-router'

class LinkingComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div>
            <ul role="nav">
                <li><Link to="/about">About</Link></li>
                <li><Link to="/repos">Repos</Link></li>
            </ul>
        </div>
        );
    }
}

export default LinkingComponent;