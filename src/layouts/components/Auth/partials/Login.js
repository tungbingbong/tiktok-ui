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
import styles from '~/layouts/components/Auth/AuthModal.module.scss';

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
            <div className="overflow-auto" style={{ flex: '1 1 0%' }}>
                <div className="m-auto w-4/5">
                    <h3 className="text-center text-2xl md:text-3xl lg:text-4xl font-bold my-4 mx-auto">
                        Log in to TikTok
                    </h3>
                    {renderButtons()}
                </div>
            </div>

            <div
                className="font-primary h-16 border-t border-solid flex justify-center items-center text-base leading-4"
                style={{
                    color: 'rgb(22, 24, 35)',
                    borderColor: 'rgba(22, 24, 35, 0.12)',
                }}
            >
                <div>Don't have an account?</div>
                <a
                    className="hover:underline font-semibold ml-2 text-primary"
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
