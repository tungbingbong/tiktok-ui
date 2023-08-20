/* eslint-disable eqeqeq */
import { useContext, useEffect, useState } from 'react';
import classNames from 'classnames/bind';

import Video from '~/layouts/components/Video';
import * as timelineService from '~/services/timelineService';
import styles from './Following.module.scss';
import { AuthUserContext } from '~/App';

const INIT_PAGE = 1;
const cx = classNames.bind(styles);

function Following() {
    const [videos, setVideos] = useState([]);
    const [page, setPage] = useState(INIT_PAGE);
    const authUser = useContext(AuthUserContext);
    const accessToken = authUser && authUser.meta.token ? authUser.meta.token : '';

    useEffect(() => {
        if (accessToken) {
            timelineService
                .getVideos({ type: 'following', page: page, accessToken: accessToken })
                .then((res) => {
                    if (Array.isArray(res.data)) {
                        setVideos((prev) => [...prev, ...res.data]);
                        setPage((prev) => prev + 1);
                    }
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }, [page, accessToken]);

    return (
        <>
            {videos.length > 0 ? (
                <div className={cx('wrapper')}>
                    {videos.map((video) => (
                        <Video key={video.id} video={video} isFollowingTheOwner={true} />
                    ))}
                </div>
            ) : (
                <div className={cx('content')}>
                    <p className={cx('text-headline')}>No video from your followers</p>
                </div>
            )}
        </>
    );
}

export default Following;
