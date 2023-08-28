/* eslint-disable jsx-a11y/anchor-is-valid */
import * as authService from '~/services/authService';
import { ModalBodyNameContext } from '~/layouts/components/Header/Header';
import { useContext, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './EmailAndPasswordLoginForm.module.scss';

const cx = classNames.bind(styles);

function EmailAndPasswordLoginForm() {
    const value = useContext(ModalBodyNameContext);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const loginUser = () => {
        authService
            .login(username, password)
            .then((data) => {
                if (data.meta && data.meta.token) {
                    localStorage.setItem('user', JSON.stringify(data));
                    window.location.reload();
                } else {
                    alert('Username or password is invalid! Please try again');
                }
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <>
            <div className={cx('loginForm-container')}>
                <div className={cx('loginForm-content')}>
                    <h3 className={cx('loginForm-title')}>Log in</h3>

                    <div className={cx('loginForm-desc')}>
                        <label>Email or username</label>
                        <a
                            href="#"
                            className={cx('loginForm-loginPhone')}
                            onClick={(event) => {
                                event.preventDefault();
                                value.handleModalBodyName('login-with-phone');
                            }}
                        >
                            Log in with phone
                        </a>
                    </div>

                    <form>
                        <div className={cx('loginForm-inputForm')}>
                            <input
                                className={cx('loginForm-input')}
                                name="email"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                type="text"
                                placeholder="Username or email"
                            />
                        </div>
                        <div className={cx('loginForm-inputForm')}>
                            <input
                                className={cx('loginForm-input')}
                                name="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                type="password"
                                placeholder="Password"
                            />
                        </div>
                        <a
                            href="#"
                            className={cx('loginForm-forgotPassword')}
                            onClick={(event) => {
                                event.preventDefault();
                                value.handleModalBodyName('reset-password-with-email');
                            }}
                        >
                            Forget password?
                        </a>
                        <button
                            className={cx('loginForm-loginButton')}
                            onClick={(e) => {
                                e.preventDefault();
                                loginUser();
                            }}
                        >
                            Log in
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default EmailAndPasswordLoginForm;
