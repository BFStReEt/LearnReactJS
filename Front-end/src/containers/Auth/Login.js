import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";
import * as actions from "../../store/actions";
import './Login.scss';
import { FormattedMessage } from 'react-intl';
import { handleLoginApi } from '../../services/userService';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            isShowPassword: false,
            errMessage: ''
        }
    }
    //Hàm thay đổi của username
    handleOnChangeUsername = (event) => {
        this.setState({
            username: event.target.value
        })
        // console.log(event.target.value)
    }

    //Hàm thay đỏi của password
    handleOnChangePassword = (event) => {
        this.setState({
            password: event.target.value
        })
        //Console cho thấy sự thay đổi của password
        // console.log(event.target.value)
        //Value
    }

    //Funtion login
    handleLogin = async () => {
        this.setState({
            errMessage: ''
        })
        try {
            let data = await handleLoginApi(this.state.username, this.state.password).then(res => {
                console.log('BFStReEt', res)
            });
        } catch (error) {
            if (error.response) {
                if (error.response.data) {
                    this.setState({
                        errMessage: error.response.data.message
                    })
                }
            }
            console.log('BFStReEt ', error.response)

        }
    }

    //Hàm ẩn hiện password
    handleShowHidePassword = (event) => {
        this.setState({
            isShowPassword: !this.state.isShowPassword
        })
    }
    render() {
        //JSX
        return (
            <div className='login-background'>
                <div className='login-container'>
                    <div className='login-content row'>
                        <div className='col-12 text-login'>Login</div>

                        <div className='col-12 form-group login-input'>
                            <label>Username:</label>
                            <input type='text' className='form-control' placeholder='Enter your username'
                                // value={this.state.username}
                                onChange={(event) => this.handleOnChangeUsername(event)}
                            />
                        </div>

                        <div className='col-12 form-group login-input'>
                            <label>Password:</label>
                            <div className='custom-input-password'>
                                <input
                                    className='form-control'
                                    type={this.state.isShowPassword ? 'text' : 'password'}
                                    placeholder='Enter your password'
                                    // value={this.state.password}
                                    onChange={(event) => this.handleOnChangePassword(event)}
                                />

                                <span
                                    onClick={(event) => { this.handleShowHidePassword(event) }}>
                                    <i className={this.state.isShowPassword ? 'far fa-eye' : 'fas fa-eye-slash'} ></i></span>
                            </div>
                        </div>
                        <div className='col-12' style={{ color: 'red' }}>
                            {this.state.errMessage}
                        </div>

                        <div className='col-12'>
                            <button className='btn-login' onClick={() => { this.handleLogin() }}>Login</button>
                        </div>

                        <div className='col-12'>
                            <span className='forgot-password'>Forgot your password ?</span>
                        </div>

                        <div className='col-12 text-center mt-3'>
                            <span className='text-other-login'>Or login with:</span>
                        </div>

                        <div className='col-12 social-login'>
                            <i className="fab fa-google google"></i>
                            <i className="fab fa-facebook facebook"></i>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        language: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
        navigate: (path) => dispatch(push(path)),
        adminLoginSuccess: (adminInfo) => dispatch(actions.adminLoginSuccess(adminInfo)),
        adminLoginFail: () => dispatch(actions.adminLoginFail()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
