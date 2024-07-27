import './detailedItem.css';

import { useEffect } from 'react';
import { itemsSlice } from '../../shared/store/itemsSlice';
import { useAppDispatch, useAppSelector } from '../../shared/store/store';
import { itemsApi } from '../../shared/api/itemsApi';
import Loader from '../loader/loader';
import { useTheme } from '../../shared/context/themeMode';

export default function DetailedItem() {
    const { isDark } = useTheme();
    const { currentId, section, loadingCard } = useAppSelector((state) => state.itemsReducer);
    const { setCurrentId, setLoadingCard } = itemsSlice.actions;
    const detailedItemParams = {
        section,
        id: currentId,
    };
    const dispatch = useAppDispatch();
    const { data } = itemsApi.useGetItemQuery(detailedItemParams);

    useEffect(() => {
        if (data) {
            dispatch(setLoadingCard(false));
        }
    }, [data]);

    return (
        <div
            className="main__detailed_section"
            onClick={(e) => {
                const elem = e.target as HTMLElement;
                if (elem.classList.contains('main__detailed_section')) dispatch(setCurrentId(null));
                document.body.style.overflow = 'auto';
                document.body.style.userSelect = 'auto';
            }}
        >
            <div className={isDark ? 'item_detailed__cover dark' : 'item_detailed__cover light'}>
                {loadingCard ? (
                    <Loader />
                ) : (
                    <div className="item_detailed">
                        <button
                            type="button"
                            className="item_detailed__button-close"
                            onClick={() => {
                                dispatch(setCurrentId(null));
                                document.body.style.overflow = 'auto';
                                document.body.style.userSelect = 'auto';
                            }}
                        >
                            &times;
                        </button>
                        {section.includes('location') && (
                            <div className="item_detailed__wrapper">
                                <p className={isDark ? 'item_detailed__text dark' : 'item_detailed__text light'}>
                                    Location: <b>{data?.name}</b>
                                </p>
                                <p className={isDark ? 'item_detailed__text dark' : 'item_detailed__text light'}>
                                    Type: <b>{data?.type}</b>
                                </p>
                                <p className={isDark ? 'item_detailed__text dark' : 'item_detailed__text light'}>
                                    Dimension: <b>{data?.dimension}</b>
                                </p>
                                <p className={isDark ? 'item_detailed__text dark' : 'item_detailed__text light'}>
                                    Total residets: <b>{data?.residents?.length}</b>
                                </p>
                            </div>
                        )}
                        {section.includes('character') && (
                            <div className="item_detailed__wrapper">
                                <img className="item_detailed__img" src={data?.image} alt={data?.name} />
                                <p className={isDark ? 'item_detailed__text dark' : 'item_detailed__text light'}>
                                    Name: <b>{data?.name}</b>
                                </p>
                                <p className={isDark ? 'item_detailed__text dark' : 'item_detailed__text light'}>
                                    Status: <b>{data?.status}</b>
                                </p>
                                <p className={isDark ? 'item_detailed__text dark' : 'item_detailed__text light'}>
                                    Species: <b>{data?.species}</b>
                                </p>
                                <p className={isDark ? 'item_detailed__text dark' : 'item_detailed__text light'}>
                                    Type: <b>{data?.type}</b>
                                </p>
                                <p className={isDark ? 'item_detailed__text dark' : 'item_detailed__text light'}>
                                    Hender: <b>{data?.gender}</b>
                                </p>
                                <p className={isDark ? 'item_detailed__text dark' : 'item_detailed__text light'}>
                                    Total episodes: <b>{data?.episode?.length}</b>
                                </p>
                            </div>
                        )}
                        {section.includes('episode') && (
                            <div className="item_detailed__wrapper">
                                <p className={isDark ? 'item_detailed__text dark' : 'item_detailed__text light'}>
                                    Episode: <b>{data?.name}</b>
                                </p>
                                <p className={isDark ? 'item_detailed__text dark' : 'item_detailed__text light'}>
                                    Date: <b>{data?.air_date}</b>
                                </p>
                                <p className={isDark ? 'item_detailed__text dark' : 'item_detailed__text light'}>
                                    Code: <b>{data?.episode}</b>
                                </p>
                                <p className={isDark ? 'item_detailed__text dark' : 'item_detailed__text light'}>
                                    Total characters: <b>{data?.characters?.length}</b>
                                </p>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}
