import { CSVLink } from 'react-csv';
import { itemsSelectedSlice } from '../../shared/store/selectedItemsSlice';
import { useAppDispatch, useAppSelector } from '../../shared/store/store';
import './detailedItemsControls.css';

export default function DetailedItemsControls() {
    const { selectedItems } = useAppSelector((state) => state.itemsSelectedReducer);
    const { unsetAllSelectedItems } = itemsSelectedSlice.actions;
    const dispatch = useAppDispatch();

    const headers = [
        { label: 'Id', key: 'id' },
        { label: 'Name', key: 'name' },
        { label: 'Status', key: 'status' },
        { label: 'Species', key: 'species' },
        { label: 'Type', key: 'type' },
        { label: 'Gender', key: 'gender' },
        { label: 'Origin', key: 'origin' },
        { label: 'Location', key: 'location' },
        { label: 'Image', key: 'image' },
        { label: 'Episode', key: 'episode' },
        { label: 'Url', key: 'url' },
        { label: 'Created', key: 'created' },
        { label: 'Dimension', key: 'dimension' },
        { label: 'Residents', key: 'residents' },
        { label: 'Air date', key: 'air_date' },
        { label: 'Characters', key: 'characters' },
    ];

    const csvReport = {
        data: selectedItems,
        headers,
        filename: `${selectedItems.length}_selectedItems.csv`,
    };

    return (
        <div className="main__detailed_items_controls">
            <p className="detailed_items_controls__text">
                Selected items: <b>{selectedItems.length}</b>
            </p>
            <button
                className="detailed_items_controls__button"
                type="button"
                onClick={() => dispatch(unsetAllSelectedItems())}
            >
                Unselect all
            </button>
            <CSVLink className="detailed_items_controls__button" {...csvReport}>
                Download csv
            </CSVLink>
        </div>
    );
}
