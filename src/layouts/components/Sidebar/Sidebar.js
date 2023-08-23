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
import SidebarAccountSpinner from './SidebarAccountSpinner';
import config from '~/config';
import * as userService from '~/services/userService';
import { useEffect, useState, lazy, Suspense, useContext } from 'react';
import { AuthUserContext } from '~/App';

const cx = classNames.bind(styles);
const SuggestedAccounts = lazy(() => import('~/components/SuggestedAccounts'));

const INIT_PAGE = 1;
const PER_PAGE = 5;

function Sidebar() {
    const [page, setPage] = useState(PER_PAGE);
    const [suggestedUsers, setSuggestedUsers] = useState([]);
    const [followingUsersPage, setFollowingUsersPage] = useState(INIT_PAGE);
    const [followingUsers, setFollowingUsers] = useState([]);
    const authUser = useContext(AuthUserContext);
    const accessToken = authUser && authUser.meta.token ? authUser.meta.token : '';

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
    }, [accessToken, page]);

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
    }, [followingUsersPage, accessToken]);

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
