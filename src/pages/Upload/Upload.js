/* eslint-disable jsx-a11y/anchor-is-valid */
// eslint-disable-next-line
import { useState } from 'react';
import Switch from 'react-ios-switch';
import classNames from 'classnames/bind';

import styles from './Upload.module.scss';
import Button from '~/components/Button';
import Footer from '~/layouts/components/Footer';

const cx = classNames.bind(styles);

function Upload() {
    const [copyrightSwitch, setCopyrightSwitch] = useState(false);
    const [caption, setCaption] = useState('');

    function handleCopyrightSwitch() {
        copyrightSwitch ? setCopyrightSwitch(false) : setCopyrightSwitch(true);
    }

    function handleSelectFile() {
        document.getElementById('uploadFile').click();
    }

    return (
        <>
            <div className={cx('wrapper')}>
                <div className={cx('content')}>
                    <div className={cx('uploader')}>
                        <svg
                            className={cx('icon-upload')}
                            fill="currentColor"
                            viewBox="0 0 48 48"
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                        >
                            <path d="M25.84 37h8.66a9.5 9.5 0 0 0 1.35-18.9A12 12 0 0 0 12 20v.01A8.5 8.5 0 0 0 12.5 37h10.34V25.6l-1.72 1.74a1 1 0 0 1-1.42 0l-.7-.7a1 1 0 0 1 0-1.41l4.4-4.4c.68-.76 1.22-.77 2 .08l4.28 4.32a1 1 0 0 1 0 1.4l-.7.72a1 1 0 0 1-1.42 0l-1.72-1.75V37Z"></path>
                        </svg>
                        <h4 className={cx('text-main')}>Upload video</h4>
                        <h5 className={cx('text-note')}>Post a video to your account</h5>
                        <div className={cx('box-content')}>
                            <div className={cx('box-uploader')}>
                                <div className={cx('box-file')} onClick={handleSelectFile}>
                                    <div className={cx('box-file-content')}>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className={cx('box-icon-upload')}
                                            width="40"
                                            height="29"
                                            viewBox="0 0 40 29"
                                            fill="none"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M21.5001 29H30.5C35.7467 29 40 24.7467 40 19.5C40 14.7115 36.4571 10.7504 31.8497 10.0951C30.937 4.37297 25.9792 0 20 0C13.3726 0 8 5.37258 8 12L8.00001 12.0145C3.53831 12.2733 0 15.9734 0 20.5C0 25.1944 3.80558 29 8.5 29H18.5001V17.1213L15.9143 19.7071C15.7191 19.9024 15.4025 19.9024 15.2072 19.7071L13.793 18.2929C13.5977 18.0976 13.5977 17.781 13.793 17.5858L18.9395 12.4393C19.5252 11.8536 20.475 11.8536 21.0608 12.4393L26.2072 17.5858C26.4025 17.781 26.4025 18.0976 26.2072 18.2929L24.793 19.7071C24.5977 19.9024 24.2812 19.9024 24.0859 19.7071L21.5001 17.1213V29Z"
                                                fill="#161823"
                                                fillOpacity="0.34"
                                            />
                                        </svg>
                                        <p className={cx('box-file-header')}>Select video to upload</p>
                                        <p className={cx('box-file-note')}>Or drag and drop a file</p>
                                        <p className={cx('box-file-title')}>MP4 or WebM</p>
                                        <p className={cx('box-file-title')}>720x1280 resolution or higher</p>
                                        <p className={cx('box-file-title')}>Up to 10 minutes</p>
                                        <p className={cx('box-file-title')}>Less than 2 GB</p>
                                        <Button primary>
                                            <input
                                                className={cx('box-input')}
                                                id="uploadFile"
                                                type="file"
                                                accept="video/*"
                                            />
                                            Select file
                                        </Button>
                                    </div>
                                </div>
                                <div className={cx('box-command')}>
                                    <div className={cx('box-command-caption')}>
                                        <label className={cx('box-command-caption-title')} htmlFor="caption">
                                            Caption
                                        </label>
                                        <input
                                            type="text"
                                            name="caption"
                                            id="caption"
                                            className={cx('box-command-caption-input')}
                                            value={caption}
                                            onChange={(e) => {
                                                if (e.target.value.length > 150) {
                                                    setCaption(e.target.value.slice(0, 150));
                                                    alert('Maximum 150 characters');
                                                } else {
                                                    setCaption(e.target.value);
                                                }
                                            }}
                                        />
                                        <span className={cx('box-command-caption-limited')}>
                                            {caption.length} / 150
                                        </span>
                                    </div>
                                    <div className={cx('box-command-description')}>
                                        <label className={cx('box-command-description-title')}>Cover</label>
                                        <div className={cx('box-command-description-input')} />
                                    </div>
                                    <div className={cx('box-command-limited')}>
                                        <label className={cx('box-command-limited-title')} htmlFor="privacy">
                                            Who can watch this video
                                        </label>
                                        <select
                                            className={cx('box-command-limited-options')}
                                            name="privacy"
                                            id="privacy"
                                        >
                                            <option value="public">Public</option>
                                            <option value="friends">Friends</option>
                                            <option value="private">Private</option>
                                        </select>
                                    </div>
                                    <div className={cx('box-command-approach')}>
                                        <label className={cx('box-command-approach-title')} htmlFor="allow">
                                            Allow users to:
                                        </label>
                                        <div className={cx('box-command-approach-permission')}>
                                            <div className={cx('box-command-approach-choice')}>
                                                <input
                                                    type="checkbox"
                                                    name="allow"
                                                    id="comment"
                                                    value="2"
                                                    className={cx('box-command-approach-choice-input')}
                                                />
                                                <label
                                                    className={cx('box-command-approach-choice-name')}
                                                    htmlFor="comment"
                                                >
                                                    Comment
                                                </label>
                                            </div>
                                            <div className={cx('box-command-approach-choice')}>
                                                <input
                                                    type="checkbox"
                                                    name="allow"
                                                    id="duet"
                                                    value="2"
                                                    className={cx('box-command-approach-choice-input')}
                                                />
                                                <label
                                                    className={cx('box-command-approach-choice-name')}
                                                    htmlFor="duet"
                                                >
                                                    Duet
                                                </label>
                                            </div>
                                            <div className={cx('box-command-approach-choice')}>
                                                <input
                                                    type="checkbox"
                                                    name="allow"
                                                    id="stitch"
                                                    value="2"
                                                    className={cx('box-command-approach-choice-input')}
                                                />
                                                <label
                                                    className={cx('box-command-approach-choice-name')}
                                                    htmlFor="stitch"
                                                >
                                                    Stitch
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={cx('box-command-copyright')}>
                                        <div className={cx('box-command-copyright-check')}>
                                            <label
                                                className={cx('box-command-copyright-check-title')}
                                                htmlFor="privacy"
                                            >
                                                Run a copyright check
                                            </label>
                                            <Switch
                                                checked={copyrightSwitch}
                                                style={{ transform: 'scale(0.8)' }}
                                                onChange={handleCopyrightSwitch}
                                            />
                                        </div>
                                        <p className={cx('box-command-copyright-paragraph')}>
                                            We'll check your video for potential copyright infringements on used sounds.
                                            If infringements are found, you can edit the video before posting.{' '}
                                            <a href="#" className={cx('box-command-copyright-paragraph-underline')}>
                                                Learn more
                                            </a>
                                        </p>
                                    </div>
                                    <div className={cx('box-command-button')}>
                                        <Button primary className={cx('box-command-button-choice')}>
                                            Discard
                                        </Button>
                                        <Button green className={cx('box-command-button-choice')}>
                                            Post
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Upload;
