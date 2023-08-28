/* eslint-disable react/jsx-no-target-blank */
import { useContext } from 'react';
import { ModalBodyNameContext } from '~/layouts/components/Header/Header';
import { PeopleIcon, FacebookIcon, GoogleIcon, LineIcon, KakaoTalkIcon, TwitterIcon } from '~/components/Icons';
import classNames from 'classnames/bind';
import styles from './SignUp.module.scss';

const cx = classNames.bind(styles);

function SignUp() {
    const buttons = [
        {
            href: '/login/phone-or-email',
            icon: <PeopleIcon width={20} height={20} />,
            text: 'Use phone / email /username',
        },
        {
            icon: <FacebookIcon width={20} height={20} />,
            text: 'Continue with Facebook',
        },
        {
            icon: <GoogleIcon width={20} height={20} />,
            text: 'Continue with Google',
        },
        {
            icon: <LineIcon width={20} height={20} />,
            text: 'Continue with Line',
        },
        {
            icon: <TwitterIcon width={20} height={20} />,
            text: 'Continue with Twitter',
        },
        {
            icon: <KakaoTalkIcon width={20} height={20} />,
            text: 'Continue with KakaoTalk',
        },
    ];

    const renderButtons = () => {
        return buttons.map((button, key) => {
            return button.href ? (
                <a
                    href={button.href}
                    key={key}
                    onClick={(e) => {
                        e.preventDefault();
                        value.handleModalBodyName('login-with-phone');
                    }}
                >
                    <div className={cx('channel-item')}>
                        <div className={cx('icon')}>{button.icon}</div>
                        {button.text}
                    </div>
                </a>
            ) : (
                <div key={key}>
                    <div className={cx('channel-item')}>
                        <div className={cx('icon')}>{button.icon}</div>
                        {button.text}
                    </div>
                </div>
            );
        });
    };

    const value = useContext(ModalBodyNameContext);

    return (
        <>
            <div className={cx('signup-container')}>
                <div className={cx('signup-content')}>
                    <h3 className={cx('signup-title')}>Sign up for TikTok</h3>
                    {renderButtons()}
                </div>
            </div>

            <div className={cx('term-and-condition')}>
                <p className={cx('signup-policy-text')}>
                    By continuing, you agree to TikTok's{' '}
                    <a
                        className={cx('link')}
                        href="https://www.tiktok.com/legal/terms-of-service-row"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Terms of Service
                    </a>{' '}
                    and confirm that you have read TikTok's{' '}
                    <a
                        className={cx('link')}
                        href="https://www.tiktok.com/legal/page/row/privacy-policy"
                        target="_blank"
                    >
                        Privacy Policy
                    </a>
                    .
                </p>
            </div>

            <div className={cx('modal-footer')}>
                <div>Already have an account?</div>
                <a
                    className={cx('modal-footer-link')}
                    href="/login"
                    onClick={(event) => {
                        event.preventDefault();
                        value.handleModalBodyName('login');
                    }}
                >
                    Login
                </a>
            </div>
        </>
    );
}

export default SignUp;
