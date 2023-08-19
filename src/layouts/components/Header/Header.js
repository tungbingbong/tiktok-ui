import { createContext, useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical, faPlus, faChartLine, faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { Link } from 'react-router-dom';

import config from '~/config';
import Button from '~/components/Button';
import images from '~/assets/images';
import styles from './Header.module.scss';
import Menu from '~/components/Popper/Menu';
import {
    InboxIcon,
    MessageIcon,
    UploadIcon,
    StudioIcon,
    CoinsIcon,
    LiveIcon,
    SettingIcon,
    LanguageIcon,
} from '~/components/Icons';
import { faKeyboard, faMoon, faCircleQuestion, faUser, faBookmark } from '@fortawesome/free-regular-svg-icons';
import Image from '~/components/Image';
import Search from '../Search';
import AuthModal from '~/layouts/components/Auth/Modal';
import Login from '~/layouts/components/Auth/partials/Login';
import SignUp from '~/layouts/components/Auth/partials/SignUp';
import PhoneAndCodeLoginForm from '~/layouts/components/Auth/partials/PhoneAndCodeLoginForm';
import PhoneAndPasswordLoginForm from '~/layouts/components/Auth/partials/PhoneAndPasswordLoginForm';
import EmailAndPasswordLoginForm from '~/layouts/components/Auth/partials/EmailAndPasswordLoginForm';
import ResetPasswordWithPhone from '~/layouts/components/Auth/partials/ResetPasswordWithPhone';
import ResetPasswordWithEmail from '~/layouts/components/Auth/partials/ResetPasswordWithEmail';

const cx = classNames.bind(styles);

export const ModalBodyNameContext = createContext();

const MENU_ITEMS = [
    {
        icon: <LanguageIcon className={cx('icon-popper')} />,
        title: 'Language',
        to: '',
        className: 'faEarthAsia',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and Help',
        to: '/feedback',
        className: 'faCircleQuestion',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
        className: 'faKeyboard',
    },
    {
        icon: <FontAwesomeIcon icon={faMoon} />,
        title: 'Dark mode',
        className: 'faKeyboard',
    },
];

function Header({ wider }) {
    const currentUser = JSON.parse(localStorage.getItem('user'));
    const [showAuthModal, setShowAuthModal] = useState(false);
    const [children, setChildren] = useState(<Login />);
    const [navigateBack, setNavigateBack] = useState(null);
    const [modalBodyName, setModalBodyName] = useState('login');

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View profile',
            to: '/@profile',
        },
        {
            icon: <FontAwesomeIcon icon={faBookmark} />,
            title: 'Favorites',
            to: '/favorite',
        },
        {
            icon: <CoinsIcon className={cx('icon-popper')} />,
            title: 'Get coins',
            to: '/coin',
        },
        {
            icon: <FontAwesomeIcon icon={faChartLine} />,
            title: 'View Analytics',
            to: '/analytic',
        },
        {
            icon: <StudioIcon className={cx('icon-popper')} />,
            title: 'Live Studio',
            to: '/livestudio',
        },
        {
            icon: <LiveIcon />,
            title: 'Live Center',
            to: '/livecenter',
        },
        {
            icon: <SettingIcon className={cx('icon-popper')} />,
            title: 'Settings',
            to: '/setting',
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faArrowRightFromBracket} />,
            title: 'Log out',
            to: '/logout',
            separate: true,
        },
    ];
    // Handle logic
    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                // Handle change language
                break;
            default:
                alert('Sorry, This function being developed');
        }

        switch (menuItem.to) {
            case '/logout':
                localStorage.removeItem('user');
                window.location.reload();
                break;
            case '/@profile':
                window.location.href = `/@${currentUser.data.nickname}`;
                break;
            default:
                break;
        }
    };

    const handleModalBodyName = (value) => {
        setModalBodyName(value ?? 'login');
    };

    const value = {
        modalBodyName,
        navigateBack,
        handleModalBodyName,
    };

    useEffect(() => {
        switch (modalBodyName) {
            case 'login':
                setChildren(<Login />);
                setNavigateBack(null);
                break;
            case 'signup':
                setChildren(<SignUp />);
                setNavigateBack(null);
                break;
            case 'login-with-phone':
                setChildren(<PhoneAndCodeLoginForm />);
                setNavigateBack('login-with-email');
                break;
            case 'login-with-phone-and-password':
                setChildren(<PhoneAndPasswordLoginForm />);
                setNavigateBack('login-with-phone');
                break;
            case 'login-with-email':
                setChildren(<EmailAndPasswordLoginForm />);
                setNavigateBack('login');
                break;
            case 'reset-password-with-phone':
                setChildren(<ResetPasswordWithPhone />);
                setNavigateBack('login-with-phone-and-password');
                break;
            case 'reset-password-with-email':
                setChildren(<ResetPasswordWithEmail />);
                setNavigateBack('reset-password-with-phone');
                break;
            default:
                setChildren(<Login />);
                break;
        }
    }, [modalBodyName]);

    return (
        <header className={`${cx('wrapper')} ${wider ? cx('wrapper-1') : cx('wrapper-2')}`}>
            <div className={cx('inner')}>
                <div className={cx('logo')} style={{ width: wider ? 'auto' : '200px' }}>
                    <Link to={config.routes.home} className={cx('logo-link')}>
                        <img src={images.logo} alt="logo-tiktok" />
                    </Link>
                </div>

                <Search />

                <div className={cx('actions')}>
                    {currentUser ? (
                        <div className={cx('user-action-btn')}>
                            <Tippy delay={[0, 200]} content="Upload video" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <UploadIcon />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 200]} content="Messages" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <MessageIcon />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 200]} content="Inbox" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <InboxIcon />
                                    <span className={cx('badge')}>99+</span>
                                </button>
                            </Tippy>
                        </div>
                    ) : (
                        <>
                            <Button to="/upload" text leftIcon={<FontAwesomeIcon icon={faPlus} />}>
                                Upload
                            </Button>
                            <Button
                                primary
                                to="/"
                                onClick={(e) => {
                                    e.preventDefault();
                                    setShowAuthModal(true);
                                }}
                            >
                                Login
                            </Button>
                        </>
                    )}

                    <ModalBodyNameContext.Provider value={value}>
                        {showAuthModal && (
                            <AuthModal
                                children={children}
                                onClose={() => {
                                    setShowAuthModal(false);
                                    setModalBodyName('');
                                }}
                            />
                        )}
                    </ModalBodyNameContext.Provider>

                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <Image
                                className="ml-4 h-8 w-8 object-cover rounded-full cursor-pointer"
                                src={currentUser.data.avatar}
                                alt={currentUser.data.nickname}
                                fallback="https://avatars.dicebear.com/api/adventurer/your-custom-seed.svg"
                            />
                        ) : (
                            <button className={cx('menu-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
