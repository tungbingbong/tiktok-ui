import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Image from '~/components/Image';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <Image
                className={cx('avatar')}
                src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/009123e32afe9088a9c0a03f54aa56c9~c5_100x100.jpeg?x-expires=1689181200&x-signature=CaWQFZf102yEJL5igjeNlBgzRGI%3D"
                alt="lephuonganh"
                fallback="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/bad679d6d45b98f5fdafae269fac1141~c5_100x100.jpeg?x-expires=1689224400&x-signature=1Z7CzropUL4ODy9ep9V%2FqPB3Kr8%3D"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Linh Huong Tran</span>
                    <FontAwesomeIcon className={cx('check-icon')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>Linh Huong Tran</span>
            </div>
        </div>
    );
}

export default AccountItem;
