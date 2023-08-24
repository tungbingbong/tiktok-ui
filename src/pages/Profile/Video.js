import classNames from 'classnames/bind';
import styles from './Profile.module.scss';

const cx = classNames.bind(styles);

function Video({ user, videos }) {
    function handleOnMouseOver(e) {
        e.target.play();
    }

    function handleOnMouseLeave(e) {
        e.target.pause();
    }

    return (
        <>
            {videos.length > 0 ? (
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
            ) : (
                <div className={cx('no-video')}>
                    <h3 className={cx('no-video-headline')}>Oops</h3>
                    <p className={cx('no-video-text')}>{user.nickname} still not upload any video</p>
                </div>
            )}
        </>
    );
}

export default Video;
