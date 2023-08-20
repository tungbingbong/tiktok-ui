import { useContext, useEffect, useState } from 'react';
import Video from '~/layouts/components/Video';
import * as timelineService from '~/services/timelineService';
import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import { AuthUserContext } from '~/App';

const cx = classNames.bind(styles);

const INIT_PAGE = 1;

function HomePage() {
    const [videos, setVideos] = useState([]);
    const [page, setPage] = useState(INIT_PAGE);
    const [noMoreVideo, setNoMoreVideo] = useState(false);
    const authUser = useContext(AuthUserContext);
    const accessToken = authUser && authUser.meta.token ? authUser.meta.token : '';

    useEffect(() => {
        timelineService
            .getVideos({ type: 'for-you', page: page, accessToken: accessToken })
            .then((res) => {
                if (Array.isArray(res.data)) {
                    setVideos((prev) => [...prev, ...res.data]);
                    setPage((prev) => prev + 1);
                }

                if (res.data.length === 0 || page === res.meta.pagination.total) {
                    setNoMoreVideo(true);
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }, [page, accessToken]);

    return (
        <div className={cx('wrapper')}>
            {videos.map((video, index) => (
                <Video key={index} video={video} />
            ))}
            {noMoreVideo && <p className="text-center">No more video to load</p>}
        </div>
    );
}

export default HomePage;
