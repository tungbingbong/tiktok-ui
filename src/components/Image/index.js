import { useState, forwardRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import images from '~/assets/images';
import style from './Image.module.scss';

const Image = forwardRef(({ src, alt, className, fallback: customFallback = images.NoImage, ...props }, ref) => {
    // Handle khi ảnh lỗi hiển thị ảnh mặc định
    const [fallback, setFallBack] = useState('');

    const handleError = () => {
        setFallBack(customFallback);
    };

    return (
        <img
            className={classNames(style.wrapper, className)}
            ref={ref}
            src={fallback || src}
            alt={alt}
            {...props}
            onError={handleError}
        />
    );
});

Image.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    className: PropTypes.string,
    fallback: PropTypes.string,
};

export default Image;
