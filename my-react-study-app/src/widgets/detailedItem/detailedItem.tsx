/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import './detailedItem.css';

import { useEffect } from 'react';
import { itemsSlice } from '../../shared/store/itemsSlice';
import { useAppDispatch, useAppSelector } from '../../shared/store/store';
import { itemsApi } from '../../shared/api/itemsApi';
import Loader from '../loader/loader';

export default function DetailedItem() {
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
            <div className="item_detailed__cover">
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
                                <p className="item_detailed__text">
                                    Location: <b>{data?.name}</b>
                                </p>
                                <p className="item_detailed__text">
                                    Type: <b>{data?.type}</b>
                                </p>
                                <p className="item_detailed__text">
                                    Dimension: <b>{data?.dimension}</b>
                                </p>
                                <p className="item_detailed__text">
                                    Total residets: <b>{data?.residents?.length}</b>
                                </p>
                            </div>
                        )}
                        {section.includes('character') && (
                            <div className="item_detailed__wrapper">
                                <img className="item_detailed__img" src={data?.image} alt={data?.name} />
                                <p className="item_detailed__text">
                                    Name: <b>{data?.name}</b>
                                </p>
                                <p className="item_detailed__text">
                                    Status: <b>{data?.status}</b>
                                </p>
                                <p className="item_detailed__text">
                                    Species: <b>{data?.species}</b>
                                </p>
                                <p className="item_detailed__text">
                                    Type: <b>{data?.type}</b>
                                </p>
                                <p className="item_detailed__text">
                                    Hender: <b>{data?.gender}</b>
                                </p>
                                <p className="item_detailed__text">
                                    Total episodes: <b>{data?.episode?.length}</b>
                                </p>
                            </div>
                        )}
                        {section.includes('episode') && (
                            <div className="item_detailed__wrapper">
                                <p className="item_detailed__text">
                                    Episode: <b>{data?.name}</b>
                                </p>
                                <p className="item_detailed__text">
                                    Date: <b>{data?.air_date}</b>
                                </p>
                                <p className="item_detailed__text">
                                    Code: <b>{data?.episode}</b>
                                </p>
                                <p className="item_detailed__text">
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
