import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import PropTypes from 'prop-types';

class LoginComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            isUserLoggedIn: false,
            email:'',
            password:'',
        }
    }

    componentDidMount() {
        console.log('this.props in login', this.props);
        // this.props.router.push('/invoice');
        // this.props.router.push()
        // if(this.props.logged_user_info) {
        // }
    }

    changeAll = (event) => {
        console.log('event.target.value ', event.target.value, ' <<< ', event.target.name);
        this.setState({ [event.target.name]: event.target.value });
    }

    onSubmit = () => {
        this.props.router.push('/invoice');
    }

    render() {
        const { email, password , isUserLoggedIn} = this.state;

        return (
            <div>
                <h1> SIGN IN </h1>
                <div className="container w-50">
                    <form>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input type="email" name="email" required value={email}  onChange={this.changeAll} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <input type="password" name="password" minLength={5} required value={password} onChange={this.changeAll} className="form-control" id="exampleInputPassword1" placeholder="Password" />
                            <small id="passwordHelp" className="form-text text-muted">Minimum length 5</small>
                        </div>
                        {/* <div className="form-group form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                            <label className="form-check-label" htmlFor="exampleCheck1">Keep me Logged In</label>
                        </div> */}
                        <button type="submit" onClick={this.onSubmit} className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (store) => {
    console.log("store", store)
    return {
        logged_user_info: store.invoice.logged_user_info,
    }
}

LoginComponent.propTypes = {

};

export default connect(mapStateToProps)(withRouter(LoginComponent));