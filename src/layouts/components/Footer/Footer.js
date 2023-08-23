/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import { useSearchParams } from 'react-router-dom';
import classNames from 'classnames/bind';
import React from 'react';

import styles from './Footer.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function Footer() {
    let [searchParams, setSearchParams] = useSearchParams();
    const currentYear = new Date().getFullYear();

    const lang = searchParams.get('lang');

    function handleChangeLanguage(e) {
        e.preventDefault();
        searchParams.set('lang', e.target.value);
        setSearchParams(searchParams);
    }

    return (
        <div className={cx('wrapper')}>
            <footer className={cx('footer-header')}>
                <div className={cx('footer-logoTiktok')}>
                    <img src={images.whiteLogoIcon} className={cx('footer-logoTiktok-icon')} />
                    <img src={images.whiteLogoText} className={cx('footer-logoTiktok-text')} />
                </div>
                <div className={cx('footer-content')}>
                    <h4 className={cx('footer-content-headline')}>Company</h4>
                    <span className={cx('footer-content-text')}>
                        <a href="#">About</a>
                    </span>
                    <span className={cx('footer-content-text')}>
                        <a href="#">Newsroom</a>
                    </span>
                    <span className={cx('footer-content-text')}>
                        <a href="#">Contact</a>
                    </span>
                    <span className={cx('footer-content-text')}>
                        <a href="#">Careers</a>
                    </span>
                    <span className={cx('footer-content-text')}>
                        <a href="#">ByteDance</a>
                    </span>
                </div>
                <div className={cx('footer-content')}>
                    <h4 className={cx('footer-content-headline')}>Programs</h4>
                    <span className={cx('footer-content-text')}>
                        <a href="#">Tiktok for Good</a>
                    </span>
                    <span className={cx('footer-content-text')}>
                        <a href="#">Advertise</a>
                    </span>
                    <span className={cx('footer-content-text')}>
                        <a href="#">Developers</a>
                    </span>
                    <span className={cx('footer-content-text')}>
                        <a href="#">Tiktok Rewards</a>
                    </span>
                    <span className={cx('footer-content-text')}>
                        <a href="#">Tiktok Browse</a>
                    </span>
                    <span className={cx('footer-content-text')}>
                        <a href="#">Tiktok Embeds</a>
                    </span>
                </div>
                <div className={cx('footer-content')}>
                    <h4 className={cx('footer-content-headline')}>Support</h4>
                    <span className={cx('footer-content-text')}>
                        <a href="#">Help Center</a>
                    </span>
                    <span className={cx('footer-content-text')}>
                        <a href="#">Safety Center</a>
                    </span>
                    <span className={cx('footer-content-text')}>
                        <a href="#">Creator Portal</a>
                    </span>
                    <span className={cx('footer-content-text')}>
                        <a href="#">Community Guidelines</a>
                    </span>
                    <span className={cx('footer-content-text')}>
                        <a href="#">Transparency</a>
                    </span>
                    <span className={cx('footer-content-text')}>
                        <a href="#">Accessibility</a>
                    </span>
                </div>
                <div className={cx('footer-content')}>
                    <h4 className={cx('footer-content-headline')}>Legal</h4>
                    <span className={cx('footer-content-text')}>
                        <a href="#">Terms of Use</a>
                    </span>
                    <span className={cx('footer-content-text')}>
                        <a href="#">Privacy Policy</a>
                    </span>
                </div>
            </footer>
            <div className={cx('footer-bottom')}>
                <div className={cx('selection-container')}>
                    <p className={cx('selection-container-title')}>
                        <span>{lang}</span>
                    </p>
                    <svg
                        width="30"
                        data-e2e=""
                        height="30"
                        viewBox="0 0 48 48"
                        fill="#B0B0B4"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M24.7125 32.0323C24.3109 32.5525 23.5252 32.5505 23.1263 32.0282L14.4015 20.6071C13.8988 19.949 14.368 19 15.1962 19H32.7385C33.569 19 34.0375 19.9537 33.53 20.6111L24.7125 32.0323Z"
                        ></path>
                    </svg>
                    <select
                        className={cx('selection-container-options')}
                        value={lang ?? ''}
                        onChange={(e) => handleChangeLanguage(e)}
                    >
                        <option value="English">English</option>
                        <option value="Español">Español</option>
                        <option value="Français">Français</option>
                        <option value="Tiếng Việt">Tiếng Việt (Việt Nam)</option>
                        <option value="简体中文">简体中文</option>
                        <option value="繁體中文">繁體中文</option>
                    </select>
                </div>
                <div className={cx('selection-time')}>&copy; {currentYear} TikTok</div>
            </div>
        </div>
    );
}

export default Footer;
