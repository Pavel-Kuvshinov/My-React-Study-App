import { useEffect, useState } from 'react';
import { NavLink, useLocation, useParams } from 'react-router-dom';
import './detailedItem.css';
import getRequestFropApi from '../../5_features/apiRequests';
import { ElementRequest } from '../../7_shared/types';
import Loader from '../loader/loader';

export default function DetailedItem() {
    const location = useLocation();
    const { id } = useParams();
    const [itemData, setItemData] = useState({} as ElementRequest);
    const [loading, setLoading] = useState(false);
    const [, setError] = useState(false);

    const header = location.pathname.split('/')[1];

    const handleCurrentRequest = async (request: string) => {
        try {
            const newDataRequest = (await getRequestFropApi(request)) as ElementRequest;
            setItemData(newDataRequest);
        } catch (err) {
            setError(true);
            setLoading(false);
        }
    };

    useEffect(() => {
        handleCurrentRequest(`${header}/${id}`);
    }, []);

    return (
        <div className="item_detailed__cover">
            <div className="item_detailed">
                {loading && <Loader />}
                <NavLink className="item_detailed__button-close" to="/">
                    &times;
                </NavLink>
                {header.includes('location') && (
                    <div className="item_detailed__wrapper">
                        <p className="item_detailed__text">
                            Location: <b>{itemData.name}</b>
                        </p>
                        <p className="item_detailed__text">
                            Type: <b>{itemData.type}</b>
                        </p>
                        <p className="item_detailed__text">
                            Dimension: <b>{itemData.dimension}</b>
                        </p>
                        <p className="item_detailed__text">
                            Total residets: <b>{itemData.residents?.length}</b>
                        </p>
                    </div>
                )}
                {header.includes('character') && (
                    <div className="item_detailed__wrapper">
                        <img className="item_detailed__img" src={itemData.image} alt={itemData.name} />
                        <p className="item_detailed__text">
                            Name: <b>{itemData.name}</b>
                        </p>
                        <p className="item_detailed__text">
                            Status: <b>{itemData.status}</b>
                        </p>
                        <p className="item_detailed__text">
                            Species: <b>{itemData.species}</b>
                        </p>
                        <p className="item_detailed__text">
                            Type: <b>{itemData.type}</b>
                        </p>
                        <p className="item_detailed__text">
                            Hender: <b>{itemData.gender}</b>
                        </p>
                        <p className="item_detailed__text">
                            Total episodes: <b>{itemData.episode?.length}</b>
                        </p>
                    </div>
                )}
                {header.includes('episode') && (
                    <div className="item_detailed__wrapper">
                        <p className="item_detailed__text">
                            Episode: <b>{itemData.name}</b>
                        </p>
                        <p className="item_detailed__text">
                            Date: <b>{itemData.air_date}</b>
                        </p>
                        <p className="item_detailed__text">
                            Code: <b>{itemData.episode}</b>
                        </p>
                        <p className="item_detailed__text">
                            Total characters: <b>{itemData.characters?.length}</b>
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}
