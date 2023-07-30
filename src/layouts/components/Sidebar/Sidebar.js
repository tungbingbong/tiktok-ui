import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import Menu, { MenuItem } from './Menu';
import {
    HomeIcon,
    UserGroupIcon,
    ExploreIcon,
    VideoIcon,
    HomeActiveIcon,
    UserGroupActiveIcon,
    ExploreActiveIcon,
    VideoActiveIcon,
} from '~/components/Icons';
import SuggestedAccounts from '~/components/SuggestedAccounts';
import config from '~/config';
import * as userService from '~/services/userService';
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);

const INIT_PAGE = 1;
const PER_PAGE = 5;

function Sidebar() {
    const [page, setPage] = useState(INIT_PAGE);
    const [suggestedUsers, setSuggestedUsers] = useState([]);
    // const [followingUsersPage, setFollowingUsersPage] = useState(INIT_PAGE);
    // const [followingUsers, setFollowingUsers] = useState([]);

    useEffect(() => {
        userService
            .getSuggestedUser({ page, perPage: PER_PAGE })
            .then((data) => {
                setSuggestedUsers((prevUser) => [...prevUser, ...data]);
            })
            .catch((err) => {
                console.error(err);
            });
        // userService
        //     .getFollowingUsers(followingUsersPage)
        //     .then((data) => {
        //         setFollowingUsersPage((prev) => [...prev, ...data]);
        //     })
        //     .catch((err) => {
        //         console.log(err);
        //     });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem title="For You" to={config.routes.home} icon={<HomeIcon />} activeIcon={<HomeActiveIcon />} />
                <MenuItem
                    title="Following"
                    to={config.routes.following}
                    icon={<UserGroupIcon />}
                    activeIcon={<UserGroupActiveIcon />}
                />
                <MenuItem
                    title="Explore"
                    to={config.routes.explore}
                    icon={<ExploreIcon />}
                    activeIcon={<ExploreActiveIcon />}
                />
                <MenuItem title="LIVE" to={config.routes.live} icon={<VideoIcon />} activeIcon={<VideoActiveIcon />} />
            </Menu>

            <SuggestedAccounts label="Suggested accounts" data={suggestedUsers} />
            {/* <SuggestedAccounts label="Following accounts" data={followingUsers} /> */}
        </aside>
    );
}
export default Sidebar;
