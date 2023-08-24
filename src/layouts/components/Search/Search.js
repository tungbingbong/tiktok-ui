import { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless';

import { useDebounce } from '~/hooks';
import styles from './Search.module.scss';
import * as searchServices from '~/services/searchService';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import { SearchIcon } from '~/components/Icons';
import AccountItem from '~/components/AccountItem';

const cx = classNames.bind(styles);

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);
    const [cursor, setCursor] = useState(-1);

    const debouncedValue = useDebounce(searchValue, 500);

    const inputRef = useRef();

    useEffect(() => {
        if (!debouncedValue.trim()) {
            setSearchResult([]);
            return;
        }

        const fetchApi = async () => {
            setLoading(true);

            const result = await searchServices.search(debouncedValue);
            setSearchResult(result);

            setLoading(false);
        };

        fetchApi();

        axios
            .get(`https://tiktok.fullstack.edu.vn/api/users/search`, {
                params: {
                    q: debouncedValue,
                    type: 'less',
                },
            })
            .then((res) => {
                setSearchResult(res.data.data);

                setLoading(false);
            })
            .catch(() => {
                setLoading(false);
            });
    }, [debouncedValue]);

    const handleClear = () => {
        setSearchValue('');
        setSearchResult([]);
        inputRef.current.focus();
    };

    const handleHideResult = () => {
        setShowResult(false);
    };

    const handleChange = (e) => {
        const searchValue = e.target.value;
        if (!searchValue.startsWith(' ')) {
            setSearchValue(searchValue);
        }
    };

    const handleKeyDown = (e) => {
        if (e.keyCode === 38 && cursor >= 0) {
            // press Arrow Up on keyboard
            setCursor((prev) => prev - 1);
        } else if (e.keyCode === 40 && cursor <= searchResult.length - 1) {
            // press Arrow Down on keyboard
            setCursor((prev) => prev + 1);
        } else if (e.keyCode === 13 && cursor >= 0 && cursor <= searchResult.length - 1) {
            // press Enter on keyboard
            window.location.href = `/@${searchResult[cursor].nickname}`;
        }
    };

    return (
        // Using a wrapper <div> tag around the reference element solves
        // this by creating a new parentNode context.
        <div>
            <HeadlessTippy
                interactive
                visible={showResult && searchResult.length > 0}
                render={(attrs) => (
                    <div className={cx('search-result')} {...attrs}>
                        <PopperWrapper>
                            <h4 className={cx('search-title')}>Accounts</h4>
                            {searchResult.map((account, index) => (
                                <AccountItem
                                    key={account.id}
                                    data={account}
                                    className={`${cx('wrapper')} ${cursor === index ? cx('wrapper-cursor') : ''}`}
                                />
                            ))}
                        </PopperWrapper>
                    </div>
                )}
                onClickOutside={handleHideResult}
            >
                <div className={cx('search')}>
                    <input
                        ref={inputRef}
                        value={searchValue}
                        placeholder="Search accounts or videos..."
                        spellCheck={false}
                        onChange={handleChange}
                        onFocus={() => setShowResult(true)}
                        onKeyDown={(e) => handleKeyDown(e)}
                    />

                    {!!searchValue && !loading && (
                        <button className={cx('clear')} onClick={handleClear}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                    )}

                    {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}

                    <button className={cx('search-btn')} onMouseDown={(e) => e.preventDefault()}>
                        <SearchIcon />
                    </button>
                </div>
            </HeadlessTippy>
        </div>
    );
}

export default Search;
