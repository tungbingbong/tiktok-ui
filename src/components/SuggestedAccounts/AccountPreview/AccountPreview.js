import { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import Button from '~/components/Button';
import styles from './AccountPreview.module.scss';
import * as userService from '~/services/userService';

const cx = classNames.bind(styles);

function AccountPreview({ data }) {
    const [followed, setFollowed] = useState(data.is_followed);

    const handleToggleFollow = () => {
        const currentUser = JSON.parse(localStorage.getItem('user'));

        if (!currentUser || !currentUser.meta.token) {
            alert('Please login!');
            return;
        }

        if (followed) {
            userService
                .unfollowAnUser({ userId: data.id, accessToken: currentUser.meta.token })
                .then((res) => {
                    if (res.data) {
                        setFollowed(res.data.is_followed);
                    }
                })
                .catch((err) => {
                    console.log(err);
                });
        } else {
            userService
                .followAnUser({ userId: data.id, accessToken: currentUser.meta.token })
                .then((res) => {
                    if (res.data) {
                        setFollowed(res.data.is_followed);
                    }
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <img
                    className={cx('avatar')}
                    src={data.avatar}
                    alt={data.nickname}
                    onError={({ currentTarget }) => {
                        currentTarget.onerror = null;
                        currentTarget.src = 'https://avatars.dicebear.com/api/micah/henrybui_io.svg';
                    }}
                />
                <Button
                    className={`${cx('follow-btn')} ${followed ? cx('followed-btn') : cx('unfollowed-btn')}`}
                    primary
                    onClick={() => handleToggleFollow()}
                >
                    {followed ? 'Following' : 'Follow'}
                </Button>
            </div>
            <div className={cx('body')}>
                <Link to={`@${data.nickname}`}>
                    <p className={cx('nickname')}>
                        <strong>{data.nickname}</strong>
                        {data.tick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />}
                    </p>
                    <p className={cx('name')}>{`${data.first_name} ${data.last_name}`}</p>
                    <p className={cx('analytics')}>
                        <strong className={cx('value')}>{data.followers_count}</strong>
                        <span className={cx('label')}>Followers</span>
                        <strong className={cx('value')}>{data.followers_count}</strong>
                        <span className={cx('label')}>Likes</span>
                    </p>
                </Link>
            </div>
        </div>
    );
}

AccountPreview.propTypes = {
    data: PropTypes.object.isRequired,
};

export default AccountPreview;
