/* eslint-disable eqeqeq */
import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';

import Video from '~/layouts/components/Video';
import * as timelineService from '~/services/timelineService';
import styles from './Following.module.scss';

const INIT_PAGE = 1;
const cx = classNames.bind(styles);

function Following() {
    const [videos, setVideos] = useState([]);
    const [page, setPage] = useState(INIT_PAGE);

    useEffect(() => {
        const currentUser = JSON.parse(localStorage.getItem('user'));
        const accessToken = currentUser && currentUser.meta.token ? currentUser.meta.token : '';

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
    }, [page]);

    return (
        <div className={cx('wrapper')}>
            {videos.map((video) => (
                <Video key={video.id} video={video} isFollowingTheOwner={true} />
            ))}
            {videos.length == 0 && <p className={cx('text-headline')}>No video from your followers</p>}
        </div>
    );
}

export default Following;
