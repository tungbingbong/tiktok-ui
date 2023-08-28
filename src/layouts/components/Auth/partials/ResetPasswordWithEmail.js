/* eslint-disable jsx-a11y/anchor-is-valid */
import { useContext } from 'react';
import classNames from 'classnames/bind';

import styles from './ResetPasswordWithEmail.module.scss';
import { ModalBodyNameContext } from '~/layouts/components/Header/Header';

const cx = classNames.bind(styles);

function ResetPasswordWithEmail() {
    const value = useContext(ModalBodyNameContext);

    return (
        <>
            <div className={cx('resetPassword-emailWrapper')}>
                <div className={cx('resetPassword-emailContent')}>
                    <form>
                        <h3 className={cx('resetPassword-emailTitle')}>Reset password</h3>
                        <div className={cx('resetPassword-emailDesc')}>
                            <label>Enter email address</label>
                            <a
                                href="#"
                                className={cx('resetPassword-emailLinkPhone')}
                                onClick={(event) => {
                                    event.preventDefault();
                                    value.handleModalBodyName('reset-password-with-phone');
                                }}
                            >
                                Reset with phone number
                            </a>
                        </div>
                        <div className={cx('resetPassword-emailForm')}>
                            <input
                                className={cx('resetPassword-emailInputFill')}
                                name="email"
                                type="text"
                                placeholder="Email address"
                            />
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

export default ResetPasswordWithEmail;
