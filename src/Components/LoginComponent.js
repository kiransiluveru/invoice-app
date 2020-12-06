import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
const passwordValidator = require('password-validator');
const validator = require("email-validator");

const schema = new passwordValidator();
schema
    .is().min(8)
    .is().max(100)
    .has().uppercase()
    .has().lowercase()
    .has().digits(1)
    .has().not().spaces();

class LoginComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isUserLoggedIn: false,
            email: '',
            password: '',
        }
    }

    componentDidMount() {
        // this.props.router.push('/invoice');
    }

    changeAll = (event) => {
        // console.log('event.target.value ', event.target.value, ' <<< ', event.target.name);
        this.setState({ [event.target.name]: event.target.value });
    }

    onSubmit = (e) => {
        const { password, email } = this.state;
        console.log('schema.validate(password)', schema.validate(password), 'validator.validate(email)',validator.validate(email));
        if(!schema.validate(password) || !validator.validate(email)){
            window.alert('Email or Password not Valid, Please try again!');
            e.preventDefault();
            e.stopPropagation();
            return false;
        }
        this.props.router.push('/invoice');
    }

    render() {
        const { email, password, isUserLoggedIn } = this.state;
        return (
            <div>
                <h1 className="d-flex justify-content-center"> Invoice App </h1>
                <h2 className="d-flex justify-content-center"> SignIn </h2>
                <div style={{backgroundColor:'aliceblue',width: "35%"}} className="container d-flex justify-content-center border border-primary p-5 rounded">
                    <form className="">
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input type="email" name="email" required value={email} onChange={this.changeAll} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <input type="password" name="password" minLength={5} required value={password} onChange={this.changeAll} className="form-control" id="exampleInputPassword1" placeholder="Password" />
                            <small id="passwordHelp" className="form-text text-muted">Minimum length 8, should contain 1 Uppercase, 1 Lowercase, 1 digit and no spaces </small>
                        </div>
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

export default connect(mapStateToProps)(withRouter(LoginComponent));