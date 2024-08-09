import { CSVLink } from 'react-csv';
import { itemsSelectedSlice } from '../../shared/store/selectedItemsSlice';
import { useAppDispatch, useAppSelector } from '../../shared/store/store';
import './detailedItemsControls.css';
import { useTheme } from '../../shared/context/themeMode';
import { ElementRequest } from '../../shared/types';

export default function DetailedItemsControls() {
    const { isDark } = useTheme();
    const { selectedItems } = useAppSelector((state) => state.itemsSelected);
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
        data: selectedItems as ElementRequest[],
        headers,
        filename: `${selectedItems?.length}_selectedItems.csv`,
    };

    return (
        <div className={isDark ? 'main__detailed_items_controls dark' : 'main__detailed_items_controls light'}>
            <p className={isDark ? 'detailed_items_controls__text dark' : 'detailed_items_controls__text light'}>
                Selected items: <b>{selectedItems?.length}</b>
            </p>
            <button
                className={isDark ? 'detailed_items_controls__button dark' : 'detailed_items_controls__button light'}
                type="button"
                onClick={() => dispatch(unsetAllSelectedItems())}
            >
                Unselect all
            </button>
            <CSVLink
                className={isDark ? 'detailed_items_controls__button dark' : 'detailed_items_controls__button light'}
                {...csvReport}
            >
                Download csv
            </CSVLink>
        </div>
    );
}
