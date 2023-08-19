import classNames from 'classnames/bind';
import styles from './Live.module.scss';

const cx = classNames.bind(styles);

function Live() {
    return (
        <div className={cx('wrapper')}>
            <p className={cx('header-title')}>Live Page</p>
        </div>
    );
}

export default Live;
