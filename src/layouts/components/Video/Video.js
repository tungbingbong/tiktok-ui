/* eslint-disable jsx-a11y/anchor-is-valid */
import classNames from 'classnames/bind';
import styles from './Video.module.scss';
import Tippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountPreview from '~/components/SuggestedAccounts/AccountPreview';
import { faCircleCheck, faCommentDots, faHeart, faMusic, faShare } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Video({ video }) {
    const preview = () => {
        // Don't render preview with the account has been followed
        if (video.user.is_followed) {
            return <></>;
        }

        return (
            <div tabIndex="-1">
                <PopperWrapper>
                    <AccountPreview data={video.user} />
                </PopperWrapper>
            </div>
        );
    };

    return (
        <div className={cx('wrapper')}>
            <Tippy interactive delay={[200, 200]} offset={[-10, 2]} render={preview} placement="bottom-start">
                <a className={cx('avatar')} href="#">
                    <img className={cx('avatar-img')} src={video.user.avatar} alt={video.user.nickname} />
                </a>
            </Tippy>
            <div className={cx('body')}>
                <div className={cx('header')}>
                    <div className={cx('header-username')}>
                        <a className="flex" href={`/@${video.user.nickname}`}>
                            <h3 className={cx('header-fullname')}>
                                {`${video.user.first_name} ${video.user.last_name}`}
                            </h3>
                            {video.user.tick && (
                                <FontAwesomeIcon className="mx-1 text-sky-400" icon={faCircleCheck}></FontAwesomeIcon>
                            )}
                            <h4 className={cx('header-nickname')}>{video.user.nickname}</h4>
                        </a>
                    </div>
                    <button className={cx('btn-follow')}>Follow</button>
                    <div className={cx('header-desc')}>
                        <span className={cx('header-title')}>{video.description}</span>
                        <a className={cx('header-underline')} href="#">
                            #fyp
                        </a>
                        <a className={cx('header-underline')} href="#">
                            #xuhuong
                        </a>
                        <a className={cx('header-underline')} href="#">
                            #trending
                        </a>
                    </div>
                </div>

                {video.music && (
                    <div className={cx('music-icon')}>
                        <FontAwesomeIcon icon={faMusic} className="mr-2" size="sm"></FontAwesomeIcon>
                        <a className={cx('music-name')} href="#">
                            {video.music}
                        </a>
                    </div>
                )}

                <div className={cx('video-frame')}>
                    <div className={cx('video-thumb')}>
                        <video className={cx('video')} controls loop={true} autoPlay muted poster={video.thumb_url}>
                            <source src={video.file_url} type="video/mp4" />
                            Your browser does not support HTML video.
                        </video>
                    </div>
                    <div className={cx('interaction-icon')}>
                        <button className={cx('icon-name')}>
                            <FontAwesomeIcon icon={faHeart} size="xl"></FontAwesomeIcon>
                        </button>
                        <strong className={cx('text-name')}>{video.likes_count}</strong>
                        <button className={cx('icon-name')}>
                            <FontAwesomeIcon icon={faCommentDots} size="xl"></FontAwesomeIcon>
                        </button>
                        <strong className={cx('text-name')}>{video.comments_count}</strong>
                        <button className={cx('icon-name')}>
                            <FontAwesomeIcon icon={faShare} size="xl"></FontAwesomeIcon>
                        </button>
                        <strong className={cx('text-name')}>{video.shares_count}</strong>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Video;
