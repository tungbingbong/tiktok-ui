/* eslint-disable jsx-a11y/anchor-is-valid */
import { useContext } from 'react';
import classNames from 'classnames/bind';

import styles from './PhoneAndPasswordLoginForm.module.scss';
import { ModalBodyNameContext } from '~/layouts/components/Header/Header';

const cx = classNames.bind(styles);

function PhoneAndPasswordLoginForm() {
    const value = useContext(ModalBodyNameContext);

    return (
        <>
            <div className={cx('loginPassword-wrapper')}>
                <div className={cx('loginPassword-content')}>
                    <form>
                        <h3 className={cx('loginPassword-title')}>Log in</h3>
                        <div className={cx('loginPassword-desc')}>
                            <label>Phone</label>
                            <a
                                href="#"
                                className={cx('loginPassword-loginEmail')}
                                onClick={(event) => {
                                    event.preventDefault();
                                    value.handleModalBodyName('login-with-email');
                                }}
                            >
                                Log in with email or username
                            </a>
                        </div>
                        <div className={cx('loginPassword-phoneNumber')}>
                            <div className={cx('loginPassword-phoneDivContainer')}>
                                <div className={cx('loginPassword-selectionContainer')}>
                                    <div className={cx('loginPassword-labelContainer')}>
                                        <span className={cx('loginPassword-regionLabel')}>VN +84</span>
                                        <svg
                                            className={cx('loginPassword-arrowIcon')}
                                            width="1em"
                                            height="1em"
                                            viewBox="0 0 48 48"
                                            fill="currentColor"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M25.5187 35.2284C24.7205 36.1596 23.2798 36.1596 22.4816 35.2284L8.83008 19.3016C7.71807 18.0042 8.63988 16 10.3486 16H37.6517C39.3604 16 40.2822 18.0042 39.1702 19.3016L25.5187 35.2284Z"
                                            ></path>
                                        </svg>
                                    </div>
                                </div>
                                <div className={cx('loginPassword-basedInput')}>
                                    <input
                                        className={cx('loginPassword-inputPhoneNumber')}
                                        name="phoneNumber"
                                        type="text"
                                        placeholder="Phone number"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className={cx('loginPassword-fillPassword')}>
                            <input
                                className={cx('loginPassword-fillPasswordInput')}
                                name="password"
                                type="password"
                                placeholder="Password"
                            />
                        </div>
                        <div className={cx('loginPassword-forgotPassword')}>
                            <a
                                href="#"
                                className={cx('loginPassword-linkForgotPassword')}
                                onClick={(event) => {
                                    event.preventDefault();
                                    value.handleModalBodyName('reset-password-with-phone');
                                }}
                            >
                                Forgot password?
                            </a>
                            <span className={cx('loginPassword-spanSplitLine')}></span>
                            <a
                                href="#"
                                className={cx('loginPassword-linkLoginCode')}
                                onClick={(event) => {
                                    event.preventDefault();
                                    value.handleModalBodyName('login-with-phone');
                                }}
                            >
                                Log in with code
                            </a>
                        </div>
                        <button className={cx('loginPassword-submitButton')}>Log in</button>
                    </form>
                </div>
            </div>
            <div className={cx('loginPassword-signup')}>
                <div>Don't have an account?</div>
                <a
                    className={cx('loginPassword-signup-link')}
                    href="/signup"
                    onClick={(event) => {
                        event.preventDefault();
                        value.handleModalBodyName('signup');
                    }}
                >
                    Sign up
                </a>
            </div>
        </>
    );
}

export default PhoneAndPasswordLoginForm;
