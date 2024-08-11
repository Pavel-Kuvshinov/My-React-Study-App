import { useLocation, useSearchParams } from '@remix-run/react';
import './detailedItem.css';

import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../shared/store/store';
import { itemsApi } from '../../shared/api/itemsApi';
import Loader from '../loader/loader';
import { useTheme } from '../../shared/context/themeMode';
import { ElementRequest } from '../../shared/types';

export interface DetailedItemProps {
    dataItem: ElementRequest | undefined;
}

export default function DetailedItem({ dataItem }: DetailedItemProps) {
    const { isDark } = useTheme();

    const location = useLocation();
    const section = location.pathname.replace('/', '');

    const [searchParams, setSearchParams] = useSearchParams();
    const name = searchParams?.get('name') || '';
    const page = searchParams?.get('page') || '';

    const updateQueryParams = () => {
        setSearchParams(`?page=${page}&name=${name}`);
    };

    return (
        <div className="main__detailed_section">
            <div className={isDark ? 'item_detailed__cover dark' : 'item_detailed__cover light'}>
                <div className="item_detailed">
                    <button
                        data-testid="button-close-detailed"
                        type="button"
                        className="item_detailed__button-close"
                        onClick={updateQueryParams}
                    >
                        &times;
                    </button>
                    {section.includes('location') && (
                        <div className="item_detailed__wrapper">
                            <p className={isDark ? 'item_detailed__text dark' : 'item_detailed__text light'}>
                                Location: <b>{dataItem?.name}</b>
                            </p>
                            <p className={isDark ? 'item_detailed__text dark' : 'item_detailed__text light'}>
                                Type: <b>{dataItem?.type}</b>
                            </p>
                            <p className={isDark ? 'item_detailed__text dark' : 'item_detailed__text light'}>
                                Dimension: <b>{dataItem?.dimension}</b>
                            </p>
                            <p className={isDark ? 'item_detailed__text dark' : 'item_detailed__text light'}>
                                Total residets: <b>{dataItem?.residents?.length}</b>
                            </p>
                        </div>
                    )}
                    {section.includes('character') && (
                        <div className="item_detailed__wrapper">
                            <img className="item_detailed__img" src={dataItem?.image} alt={dataItem?.name} />
                            <p className={isDark ? 'item_detailed__text dark' : 'item_detailed__text light'}>
                                Name: <b>{dataItem?.name}</b>
                            </p>
                            <p className={isDark ? 'item_detailed__text dark' : 'item_detailed__text light'}>
                                Status: <b>{dataItem?.status}</b>
                            </p>
                            <p className={isDark ? 'item_detailed__text dark' : 'item_detailed__text light'}>
                                Species: <b>{dataItem?.species}</b>
                            </p>
                            <p className={isDark ? 'item_detailed__text dark' : 'item_detailed__text light'}>
                                Type: <b>{dataItem?.type}</b>
                            </p>
                            <p className={isDark ? 'item_detailed__text dark' : 'item_detailed__text light'}>
                                Hender: <b>{dataItem?.gender}</b>
                            </p>
                            <p className={isDark ? 'item_detailed__text dark' : 'item_detailed__text light'}>
                                Total episodes: <b>{dataItem?.episode?.length}</b>
                            </p>
                        </div>
                    )}
                    {section.includes('episode') && (
                        <div className="item_detailed__wrapper">
                            <p className={isDark ? 'item_detailed__text dark' : 'item_detailed__text light'}>
                                Episode: <b>{dataItem?.name}</b>
                            </p>
                            <p className={isDark ? 'item_detailed__text dark' : 'item_detailed__text light'}>
                                Date: <b>{dataItem?.air_date}</b>
                            </p>
                            <p className={isDark ? 'item_detailed__text dark' : 'item_detailed__text light'}>
                                Code: <b>{dataItem?.episode}</b>
                            </p>
                            <p className={isDark ? 'item_detailed__text dark' : 'item_detailed__text light'}>
                                Total characters: <b>{dataItem?.characters?.length}</b>
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
