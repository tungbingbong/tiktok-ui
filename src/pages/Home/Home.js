import { useEffect, useState } from 'react';
import Video from '~/layouts/components/Video';
import * as timelineService from '~/services/timelineService';
import classNames from 'classnames/bind';
import styles from './Home.module.scss';

const cx = classNames.bind(styles);

const INIT_PAGE = 1;

function HomePage() {
    const [videos, setVideos] = useState([]);
    const [page, setPage] = useState(INIT_PAGE);
    const [noMoreVideo, setNoMoreVideo] = useState(false);

    useEffect(() => {
        timelineService
            .getVideos('for-you', page)
            .then((res) => {
                if (Array.isArray(res.data)) {
                    setVideos((prev) => [...prev, ...res.data]);
                }

                if (res.data.length === 0 || page === res.meta.pagination.total) {
                    setNoMoreVideo(true);
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }, [page]);

    return (
        <div className={cx('wrapper')}>
            {videos.map((video, index) => (
                <Video key={index} video={video} />
            ))}
        </div>
    );
}

export default HomePage;
