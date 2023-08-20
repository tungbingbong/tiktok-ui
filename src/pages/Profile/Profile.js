import classNames from 'classnames/bind';
import styles from './Profile.module.scss';
import { useParams } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import Tippy from '@tippyjs/react';
import { FollowedIcon, LockIcon, PenIcon } from '~/components/Icons';
import * as userService from '~/services/userService';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { AuthUserContext } from '~/App';

const cx = classNames.bind(styles);

function Profile() {
    const { nickname } = useParams();
    const [user, setUser] = useState(null);
    const [followed, setFollowed] = useState(false);
    const authUser = useContext(AuthUserContext);
    const accessToken = authUser && authUser.meta.token ? authUser.meta.token : '';

    useEffect(() => {
        if (nickname) {
            userService
                .getUserProfile({ nickname, accessToken })
                .then((data) => {
                    setUser(data);
                    setFollowed(data.is_followed);
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }, [nickname, accessToken]);

    function handleOnMouseOver(e) {
        e.target.play();
    }

    function handleOnMouseLeave(e) {
        e.target.pause();
    }

    function handleFollow() {
        if (!accessToken) {
            alert('Please login!');
            return;
        }

        userService
            .followAnUser({ userId: user.id, accessToken: accessToken })
            .then((res) => {
                if (res.data) {
                    setFollowed(res.data.is_followed);
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }

    function handleUnfollow() {
        if (!accessToken) {
            alert('Please login!');
            return;
        }

        userService
            .unfollowAnUser({ userId: user.id, accessToken: authUser.meta.token })
            .then((res) => {
                if (res.data) {
                    setFollowed(res.data.is_followed);
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }

    const renderButtons = () => {
        if (authUser && authUser.data.nickname === nickname) {
            return (
                <button className={cx('btn-personal')}>
                    <PenIcon width={20} height={20} classes="mr-2" />
                </button>
            );
        }

        if (followed) {
            return (
                <>
                    <button className={`${cx('btn-follow')} ${cx('btn-followed')}`}>Message</button>
                    <Tippy content="Unfollow" placement="bottom" touch={false}>
                        <button className={cx('icon-follow')} onClick={handleUnfollow}>
                            <FollowedIcon width={20} height={20} />
                        </button>
                    </Tippy>
                </>
            );
        }

        return (
            <button className={`${cx('btn-follow')} ${cx('btn-unfollow')}`} onClick={handleFollow}>
                Follow
            </button>
        );
    };

    return user ? (
        <div className={cx('container')}>
            <div className={cx('header-wrapper')}>
                <div className={cx('share-info')}>
                    <div className={cx('user-avatar')}>
                        <img src={user.avatar} alt={user.nickname} className={cx('user-avatar-img')} />
                    </div>
                    <div className={cx('user-desc')}>
                        <div className={cx('user-nickname')}>
                            {user.nickname}{' '}
                            {user.tick && (
                                <FontAwesomeIcon
                                    className="ml-2 text-badge-blue text-base md:text-lg lg:text-xl"
                                    icon={faCircleCheck}
                                ></FontAwesomeIcon>
                            )}
                        </div>
                        <div className={cx('user-fullname')}>{`${user.first_name} ${user.last_name}`}</div>
                        <div className={cx('follow-container')}>
                            <div className={cx('message-container')}>{renderButtons()}</div>
                        </div>
                    </div>
                </div>
                <div className={cx('count-info')}>
                    <div className={cx('count-number')}>
                        <strong className={cx('countInteract')}>{user.followings_count}</strong>
                        <span className={cx('title-count')}>Following</span>
                    </div>
                    <div className={cx('count-number')}>
                        <strong className={cx('countInteract')}>{user.followers_count}</strong>
                        <span className={cx('title-count')}>Followers</span>
                    </div>
                    <div className={cx('count-number')}>
                        <strong className={cx('countInteract')}>{user.likes_count}</strong>
                        <span className={cx('title-count')}>{user.likes_count > 1 ? 'Likes' : 'Like'}</span>
                    </div>
                </div>
                <div className={cx('share-desc')}>
                    <p>{user.bio}</p>
                </div>
                <div className={cx('share-action')}>
                    <svg
                        width="24"
                        data-e2e=""
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M12.5546 8.35111L13.3171 8.16468V7.37972V3.50006L21.4998 12.0001L13.3171 20.5001V16.3738V15.3664L12.3098 15.3738C8.838 15.3994 5.4275 17.0466 2.49983 19.5882C2.54612 19.2536 2.67769 18.641 2.94391 17.8329C3.3786 16.5132 4.01326 15.1988 4.88691 13.971C6.71045 11.4083 9.24414 9.16046 12.5546 8.35111Z"
                            stroke="#161823"
                            strokeWidth="2"
                        ></path>
                    </svg>
                </div>
                <div className={cx('more-action')}>
                    <svg
                        width="24"
                        data-e2e=""
                        height="24"
                        viewBox="0 0 48 48"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M4 24C4 21.7909 5.79086 20 8 20C10.2091 20 12 21.7909 12 24C12 26.2091 10.2091 28 8 28C5.79086 28 4 26.2091 4 24ZM20 24C20 21.7909 21.7909 20 24 20C26.2091 20 28 21.7909 28 24C28 26.2091 26.2091 28 24 28C21.7909 28 20 26.2091 20 24ZM36 24C36 21.7909 37.7909 20 40 20C42.2091 20 44 21.7909 44 24C44 26.2091 42.2091 28 40 28C37.7909 28 36 26.2091 36 24Z"
                        ></path>
                    </svg>
                </div>
            </div>
            <div className={cx('body-wrapper')}>
                <div className={cx('video-feedtab')}>
                    <p className={`${cx('tab')} active`} id="tab-video">
                        <span>Videos</span>
                    </p>
                    <p className={cx('tab')} id="tab-liked">
                        <LockIcon width="18" height="18" classes="mr-2" />
                        Liked
                    </p>
                </div>
                <div className={cx('bottom-line')}></div>
                <div className={cx('video-grid')}>
                    {user.videos.map((video, key) => (
                        <div key={key}>
                            <video
                                className={cx('video-each')}
                                controls
                                loop
                                muted
                                playsInline
                                poster={video.thumb_url}
                                onMouseOver={(e) => handleOnMouseOver(e)}
                                onMouseLeave={(e) => handleOnMouseLeave(e)}
                            >
                                <source src={video.file_url} type="video/mp4" />
                                Your browser does not support HTML video.
                            </video>
                            <p className={cx('video-desc')}>{video.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    ) : (
        <div>Cannot fetch user profile. Try again later!</div>
    );
}

export default Profile;
