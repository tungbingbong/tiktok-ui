/* eslint-disable jsx-a11y/anchor-is-valid */
import { useContext } from 'react';
import classNames from 'classnames/bind';

import styles from './ResetPasswordWithPhone.module.scss';
import { ModalBodyNameContext } from '~/layouts/components/Header/Header';

const cx = classNames.bind(styles);

function ResetPasswordWithPhone() {
    const value = useContext(ModalBodyNameContext);

    return (
        <>
            <div className={cx('resetPassword-phoneWrapper')}>
                <div className={cx('resetPassword-phoneContent')}>
                    <form>
                        <h3 className={cx('resetPassword-phoneTitle')}>Reset password</h3>
                        <div className={cx('resetPassword-phoneDesc')}>
                            <label>Enter phone number</label>
                            <a
                                href="#"
                                className={cx('resetPassword-phoneLinkEmail')}
                                onClick={(event) => {
                                    event.preventDefault();
                                    value.handleModalBodyName('reset-password-with-email');
                                }}
                            >
                                Reset with email
                            </a>
                        </div>
                        <div className={cx('resetPassword-phoneNumber')}>
                            <div className={cx('resetPassword-phoneDivContainer')}>
                                <div className={cx('resetPassword-selectionContainer')}>
                                    <div className={cx('resetPassword-labelContainer')}>
                                        <span className={cx('resetPassword-regionLabel')}>VN +84</span>
                                        <svg
                                            className={cx('resetPassword-arrowIcon')}
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
                                <div className={cx('resetPassword-basedInput')}>
                                    <input
                                        className={cx('resetPassword-inputPhoneNumber')}
                                        name="phoneNumber"
                                        type="text"
                                        placeholder="Phone number"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className={cx('resetPassword-numberCode')}>
                            <div className={cx('resetPassword-formInput')}>
                                <input
                                    className={cx('resetPassword-inputCode')}
                                    name="confirmCode"
                                    type="text"
                                    placeholder="Enter 6-digit number"
                                />
                            </div>
                            <button className={cx('resetPassword-buttonSendCode')}>Send code</button>
                        </div>
                        <div className={cx('resetPassword-passwordForm')}>
                            <input
                                className={cx('resetPassword-inputPassword')}
                                name="password"
                                type="password"
                                placeholder="Password"
                            />
                        </div>
                        <button className={cx('resetPassword-submitButton')}>Log in</button>
                    </form>
                </div>
            </div>
            <div className={cx('resetPassword-signup')}>
                <div>Don't have an account?</div>
                <a
                    className={cx('resetPassword-signup-link')}
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

export default ResetPasswordWithPhone;
