/* eslint-disable jsx-a11y/anchor-is-valid */
import { useContext } from 'react';
import classNames from 'classnames/bind';

import styles from './PhoneAndCodeLoginForm.module.scss';
import { ModalBodyNameContext } from '~/layouts/components/Header/Header';

const cx = classNames.bind(styles);

function PhoneAndCodeLoginForm() {
    const value = useContext(ModalBodyNameContext);

    return (
        <>
            <div className={cx('loginPhone-wrapper')}>
                <div className={cx('loginPhone-content')}>
                    <form>
                        <h3 className={cx('loginPhone-title')}>Log in</h3>
                        <div className={cx('loginPhone-desc')}>
                            <label>Phone</label>
                            <a
                                href="#"
                                className={cx('loginPhone-loginEmail')}
                                onClick={(event) => {
                                    event.preventDefault();
                                    value.handleModalBodyName('login-with-email');
                                }}
                            >
                                Log in with email or username
                            </a>
                        </div>
                        <div className={cx('loginPhone-phoneNumber')}>
                            <div className={cx('loginPhone-phoneDivContainer')}>
                                <div className={cx('loginPhone-selectionContainer')}>
                                    <div className={cx('loginPhone-labelContainer')}>
                                        <span className={cx('loginPhone-regionLabel')}>VN +84</span>
                                        <svg
                                            className={cx('loginPhone-arrowIcon')}
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
                                <div className={cx('loginPhone-basedInput')}>
                                    <input
                                        className={cx('loginPhone-inputPhoneNumber')}
                                        name="phoneNumber"
                                        type="text"
                                        placeholder="Phone number"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className={cx('loginPhone-numberCode')}>
                            <div className={cx('loginPhone-formInput')}>
                                <input
                                    className={cx('loginPhone-inputCode')}
                                    name="confirmCode"
                                    type="text"
                                    placeholder="Enter 6-digit number"
                                />
                            </div>
                            <button className={cx('loginPhone-buttonSendCode')}>Send code</button>
                        </div>
                        <a
                            href="#"
                            className={cx('loginPhone-loginPassword')}
                            onClick={(event) => {
                                event.preventDefault();
                                value.handleModalBodyName('login-with-phone-and-password');
                            }}
                        >
                            Log in with password
                        </a>
                        <button className={cx('loginPhone-submitButton')}>Log in</button>
                    </form>
                </div>
            </div>
            <div className={cx('loginPhone-signup')}>
                <div>Don't have an account?</div>
                <a
                    className={cx('loginPhone-signup-link')}
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

export default PhoneAndCodeLoginForm;
