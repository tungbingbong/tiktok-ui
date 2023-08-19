import classNames from 'classnames/bind';
import styles from './NotFound.module.scss';

const cx = classNames.bind(styles);

function NotFound() {
    return (
        <div className={cx('wrapper')}>
            <p className={cx('header-title')}>404 Page not found!</p>
        </div>
    );
}

export default NotFound;
