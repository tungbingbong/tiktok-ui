/* eslint-disable jsx-a11y/anchor-is-valid */
import { useContext } from 'react';
import { ModalBodyNameContext } from '~/layouts/components/Header/Header';
import classNames from 'classnames/bind';
import styles from '~/layouts/components/Auth/AuthModal.module.scss';

const cx = classNames.bind(styles);

function ResetPasswordWithEmail() {
    const value = useContext(ModalBodyNameContext);

    return (
        <>
            <div className="overflow-auto" style={{ flex: '1 1 0%' }}>
                <div className="m-auto w-4/5">
                    <h3 className="text-center text-2xl md:text-3xl lg:text-4xl font-bold my-4 mx-auto">
                        Reset password
                    </h3>
                    <div>
                        <div>
                            <form>
                                <div className="text-base font-semibold flex justify-between mb-2">
                                    <label>Enter email address</label>
                                    <a
                                        href="#"
                                        className="font-semibold text-xs hover:underline text-black/60"
                                        onClick={(event) => {
                                            event.preventDefault();
                                            value.handleModalBodyName('reset-password-with-phone');
                                        }}
                                    >
                                        Reset with phone number
                                    </a>
                                </div>
                                <div className="mb-2">
                                    <input
                                        className="rounded text-base h-11 w-full border border-solid border-black/10 bg-black/5 caret-primary"
                                        style={{ paddingInlineStart: '12px', paddingInlineEnd: '12px' }}
                                        name="email"
                                        type="text"
                                        placeholder="Email address"
                                    />
                                </div>
                                <div className="flex items-center justify-between rounded mb-2 bg-black/5">
                                    <input
                                        className="bg-transparent grow h-11 rounded-l border text-base border-solid border-black/10 caret-primary"
                                        style={{ paddingInlineStart: '12px', paddingInlineEnd: '12px' }}
                                        name="confirmCode"
                                        type="text"
                                        placeholder="Enter 6-digit code"
                                    />
                                    <button className="border border-solid border-black/10 h-11 rounded-r text-black/20 cursor-pointer text-base font-semibold font-primary px-4">
                                        Send code
                                    </button>
                                </div>
                                <div className="mb-2">
                                    <input
                                        className="rounded text-base h-11 w-full border border-solid border-black/10 bg-black/5 caret-primary"
                                        style={{ paddingInlineStart: '12px', paddingInlineEnd: '12px' }}
                                        name="password"
                                        type="password"
                                        placeholder="Password"
                                    />
                                </div>
                                <button className={cx('submit-btn')}>Log in</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ResetPasswordWithEmail;
