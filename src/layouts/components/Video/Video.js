/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import classNames from 'classnames/bind';
import styles from './Video.module.scss';
import Tippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountPreview from '~/components/SuggestedAccounts/AccountPreview';
import { faCircleCheck, faCommentDots, faHeart, faMusic, faShare } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useRef, useState } from 'react';
import useElementOnScreen from '~/hooks/useElementOnScreen';
import * as userService from '~/services/userService';

const cx = classNames.bind(styles);

function Video({ video, isFollowingTheOwner }) {
    const [description, setDescription] = useState('');
    const [tags, setTags] = useState(['foryourpage', 'foryou', 'trending']);
    const [playing, setPlaying] = useState(false);
    const [followed, setFollowed] = useState(video.user.is_followed);
    const videoRef = useRef(null);
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.7,
    };
    const isVisible = useElementOnScreen(options, videoRef);

    const preview = () => {
        return (
            <div tabIndex="-1">
                <PopperWrapper>
                    <AccountPreview data={video.user} />
                </PopperWrapper>
            </div>
        );
    };

    useEffect(() => {
        const videoDesc = video.description;

        if (videoDesc.includes('#')) {
            const explodedDesc = videoDesc.split('#');

            setDescription(explodedDesc[0]);

            // Remove first item, it is description
            explodedDesc.shift();

            setTags(explodedDesc);
        } else {
            setDescription(videoDesc);
        }
    }, []);

    useEffect(() => {
        if (isVisible) {
            if (!playing) {
                // Rewind the video and play from beginning
                videoRef.current.currentTime = 0;
                videoRef.current.play();
                setPlaying(true);
            }
        } else {
            if (playing) {
                videoRef.current.pause();
                setPlaying(false);
            }
        }
    }, [isVisible, playing]);

    const handleToggleFollow = () => {
        const currentUser = JSON.parse(localStorage.getItem('user'));
        if (!currentUser || !currentUser.meta.token) {
            alert('Please login!');
            return;
        }

        if (followed) {
            userService
                .unfollowAnUser({ userId: video.user.id, accessToken: currentUser.meta.token })
                .then((res) => {
                    if (res.data) {
                        setFollowed(res.data.is_followed);
                    }
                })
                .catch((error) => {
                    console.log(error);
                });
        } else {
            userService
                .followAnUser({ userId: video.user.id, accessToken: currentUser.meta.token })
                .then((res) => {
                    if (res.data) {
                        setFollowed(res.data.is_followed);
                    }
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    };

    const handleLikeVideo = () => {
        alert('The API does not support like a video now! Try again later');
    };

    const handleClickComment = () => {
        alert('Coming soon...');
    };

    return (
        <div className={cx('wrapper')}>
            <Tippy interactive delay={[100, 200]} offset={[-10, 2]} render={preview} placement="bottom-start">
                <a className={cx('avatar')} href={`@${video.user.nickname}`}>
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
                    {(isFollowingTheOwner === undefined || isFollowingTheOwner === false) && (
                        <button
                            className={`${cx('btn-follow')} ${followed ? cx('btn-followed') : cx('btn-unfollowed')}`}
                            onClick={() => handleToggleFollow()}
                        >
                            {followed ? 'Following' : 'Follow'}
                        </button>
                    )}
                    <div className={cx('header-desc')}>
                        {description}
                        {tags.map((tag, key) => (
                            <a className={cx('header-underline')} key={key} href={`/tag/${tag}`}>
                                #{tag}
                            </a>
                        ))}
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
                        <video
                            className={cx('video')}
                            ref={videoRef}
                            controls
                            muted
                            loop={true}
                            playsInline
                            poster={video.thumb_url}
                        >
                            <source src={video.file_url} type="video/mp4" />
                            Your browser does not support HTML video.
                        </video>
                    </div>
                    <div className={cx('interaction-icon')}>
                        <button className={cx('icon-name')} onClick={handleLikeVideo}>
                            <FontAwesomeIcon icon={faHeart} size="xl"></FontAwesomeIcon>
                        </button>
                        <strong className={cx('text-name')}>{video.likes_count}</strong>
                        <button className={cx('icon-name')} onClick={handleClickComment}>
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
