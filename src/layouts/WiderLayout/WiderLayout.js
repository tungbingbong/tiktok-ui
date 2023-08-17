import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import Header from '~/layouts/components/Header';
import Sidebar from '~/layouts/components/Sidebar';
import styles from './WiderLayout.module.scss';

const cx = classNames.bind(styles);

function WiderLayout({ children }) {
    return (
        <div>
            <Header wider={true} />
            <div className={cx('container')}>
                <div>
                    <Sidebar collapse={true} />
                </div>
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    );
}

WiderLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default WiderLayout;
