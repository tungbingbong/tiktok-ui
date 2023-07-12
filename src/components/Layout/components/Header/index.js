import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical, faPlus, faChartLine, faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

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

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <LanguageIcon className={cx('icon-popper')} />,
        title: 'English',
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

function Header() {
    const currentUser = true;

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View profile',
            to: '/@lephuonganh',
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
    };

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <a href="/" alt="logo-tiktok">
                        <img src={images.logo} alt="logo-tiktok" />
                    </a>
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
                            <Button primary>Login</Button>
                        </>
                    )}
                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <Image
                                className={cx('user-avatar')}
                                src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/78f4e6eb4cb4a7a9afc26ac17b2a3038~c5_100x100.jpeg?x-expires=1689037200&x-signature=NtJxoH%2FMIAmAKXnZYRtq6bDmI4I%3D"
                                alt="Tran Tien Tung"
                                fallback="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/bad679d6d45b98f5fdafae269fac1141~c5_100x100.jpeg?x-expires=1689224400&x-signature=1Z7CzropUL4ODy9ep9V%2FqPB3Kr8%3D"
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
