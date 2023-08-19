import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './SuggestedAccounts.module.scss';
import AccountPreview from './AccountPreview/AccountPreview';

const cx = classNames.bind(styles);

function AccountItem({ data }) {
    const renderPreview = (props) => {
        // Don't render preview with the account has been followed
        if (data.is_followed) {
            return <></>;
        }

        return (
            <div className="hidden lg:block" tabIndex="-1" {...props}>
                <PopperWrapper>
                    <AccountPreview data={data} />
                </PopperWrapper>
            </div>
        );
    };

    return (
        <div>
            <Tippy
                interactive
                popperOptions={{
                    strategy: 'fixed',
                }}
                delay={[200, 0]}
                offset={[0, 2]}
                touch={false}
                placement="bottom"
                render={renderPreview}
            >
                <Link to={`/@${data.nickname}`}>
                    <div className={cx('account-item')}>
                        <img
                            className={cx('avatar')}
                            src={data.avatar}
                            alt={data.nickname}
                            onError={({ currentTarget }) => {
                                currentTarget.onerror = null;
                                currentTarget.src = 'https://avatars.dicebear.com/api/micah/henrybui_io.svg';
                            }}
                        />
                        <div className={cx('item-info')}>
                            <p className={cx('nickname')}>
                                <strong>{data.nickname}</strong>
                                {data.tick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />}
                            </p>
                            <p className={cx('name')}>{`${data.first_name} ${data.last_name}`}</p>
                        </div>
                    </div>
                </Link>
            </Tippy>
        </div>
    );
}

AccountItem.propTypes = {
    data: PropTypes.object.isRequired,
};

export default AccountItem;
