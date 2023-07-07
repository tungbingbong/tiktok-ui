import classNames from 'classnames/bind';
import Button from '~/components/Button';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function MenuItem({ data }) {
    return (
        <div>
            <Button className={cx('menu-item', data.className)} leftIcon={data.icon} to={data.to}>
                {data.title}
            </Button>
        </div>
    );
}

export default MenuItem;
