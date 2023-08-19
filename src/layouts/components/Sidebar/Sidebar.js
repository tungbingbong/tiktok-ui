/* eslint-disable react-hooks/exhaustive-deps */
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
// import SuggestedAccounts from '~/components/SuggestedAccounts';
import SidebarAccountSpinner from './SidebarAccountSpinner';
import config from '~/config';
import * as userService from '~/services/userService';
import { useEffect, useState, lazy, Suspense } from 'react';

const cx = classNames.bind(styles);
const SuggestedAccounts = lazy(() => import('~/components/SuggestedAccounts'));

const INIT_PAGE = 1;
const PER_PAGE = 5;

function Sidebar() {
    const [page, setPage] = useState(INIT_PAGE);
    const [suggestedUsers, setSuggestedUsers] = useState([]);
    const [followingUsersPage, setFollowingUsersPage] = useState(INIT_PAGE);
    const [followingUsers, setFollowingUsers] = useState([]);
    const currentUser = JSON.parse(localStorage.getItem('user'));
    const accessToken = currentUser && currentUser.meta.token ? currentUser.meta.token : '';

    // Get suggested users
    useEffect(() => {
        userService
            .getSuggestedUsers({ page, perPage: PER_PAGE, accessToken: accessToken })
            .then((data) => {
                if (Array.isArray(data)) {
                    setSuggestedUsers((prevUsers) => [...prevUsers, ...data]);
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    // Get following users
    useEffect(() => {
        if (accessToken) {
            userService
                .getFollowingUsers({ page: followingUsersPage, accessToken: accessToken })
                .then((data) => {
                    if (Array.isArray(data)) {
                        if (followingUsersPage === INIT_PAGE) {
                            setFollowingUsers(data);
                        } else {
                            setFollowingUsers((prev) => [...prev, ...data]);
                        }
                    }
                })
                .catch((error) => {
                    console.log(error);
                });
        } else {
            setFollowingUsers([]);
        }
    }, []);

    // Get following users

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
            <Suspense fallback={<SidebarAccountSpinner label="Suggested accounts" />}>
                <SuggestedAccounts label="Suggested accounts" data={suggestedUsers} />
                <SuggestedAccounts label="Following accounts" data={followingUsers} />
            </Suspense>
        </aside>
    );
}
export default Sidebar;
