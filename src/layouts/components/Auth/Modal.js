import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext } from 'react';
import classNames from 'classnames/bind';

import { ModalBodyNameContext } from '~/layouts/components/Header/Header';
import { CloseButtonIcon } from '~/components/Icons';
import styles from './AuthModal.module.scss';

const cx = classNames.bind(styles);

function Modal({ children, onClose }) {
    const value = useContext(ModalBodyNameContext);

    return (
        <div className={cx('modal-wrapper')}>
            <div className={cx('modal-background')}></div>
            <div className={cx('modal-container')}>
                <div className={cx('modal-content')}>
                    {value.navigateBack && (
                        <div
                            className={cx('modal-IconBack')}
                            onClick={(e) => {
                                e.preventDefault();
                                value.handleModalBodyName(value.navigateBack);
                            }}
                        >
                            <FontAwesomeIcon icon={faChevronLeft} />
                        </div>
                    )}
                    <div className={cx('modal-IconClose')} onClick={onClose}>
                        <CloseButtonIcon width={25} height={25} />
                    </div>
                    {children}
                </div>
            </div>
        </div>
    );
}

export default Modal;
