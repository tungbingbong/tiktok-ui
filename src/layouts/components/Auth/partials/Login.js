import { useContext } from 'react';
import {
    QRCodeIcon,
    PeopleIcon,
    FacebookIcon,
    GoogleIcon,
    InstagramIcon,
    LineIcon,
    KakaoTalkIcon,
    TwitterIcon,
    AppleIcon,
} from '~/components/Icons';
import { ModalBodyNameContext } from '~/layouts/components/Header/Header';
import classNames from 'classnames/bind';
import styles from './Login.module.scss';

const cx = classNames.bind(styles);

function Login() {
    const buttons = [
        {
            href: '',
            icon: <QRCodeIcon width={20} height={20} />,
            text: 'Use QR code',
        },
        {
            href: '/login/phone-or-email',
            icon: <PeopleIcon width={20} height={20} />,
            text: 'Use phone / email / username',
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
        {
            icon: <AppleIcon width={20} height={20} />,
            text: 'Continue with Apple',
        },
        {
            icon: <InstagramIcon width={20} height={20} />,
            text: 'Continue with Instagram',
        },
    ];

    const renderButtons = () => {
        return buttons.map((button, key) => {
            return button.href ? (
                <a
                    href={button.href}
                    key={key}
                    onClick={(event) => {
                        event.preventDefault();
                        value.handleModalBodyName('login-with-email');
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
            <div className={cx('login-container')}>
                <div className={cx('login-content')}>
                    <h3 className={cx('login-title')}>Log in to TikTok</h3>
                    {renderButtons()}
                </div>
            </div>

            <div className={cx('login-policy')}>
                <p className={cx('login-policy-text')}>
                    By continuing, you agree to TikTok's{' '}
                    <strong className={cx('login-policy-link')}>Terms of Service</strong> and confirm that you have read
                    TikTok's <strong className={cx('login-policy-link')}>Privacy Policy</strong>.
                </p>
            </div>

            <div className={cx('login-signup')}>
                <div>Don't have an account?</div>
                <a
                    className={cx('login-signup-link')}
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

export default Login;
