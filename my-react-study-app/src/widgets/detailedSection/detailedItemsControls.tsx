// import { CSVLink } from 'react-csv';
import styles from './detailedItemsControls.module.css';

import { itemsSelectedSlice } from '../../shared/store/selectedItemsSlice';
import { useAppDispatch, useAppSelector } from '../../shared/store/store';
import { useTheme } from '../../shared/context/themeMode';

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
        data: selectedItems,
        headers,
        filename: `${selectedItems?.length}_selectedItems.csv`,
    };

    return (
        <div
            className={
                isDark
                    ? `${styles.main__detailed_items_controls} ${styles.dark}`
                    : `${styles.main__detailed_items_controls} ${styles.light}`
            }
        >
            <p
                className={
                    isDark
                        ? `${styles.detailed_items_controls__text} ${styles.dark}`
                        : `${styles.detailed_items_controls__text} ${styles.light}`
                }
            >
                Selected items: <b>{selectedItems?.length}</b>
            </p>
            <button
                className={
                    isDark
                        ? `${styles.detailed_items_controls__button} ${styles.dark}`
                        : `${styles.detailed_items_controls__button} ${styles.light}`
                }
                type="button"
                onClick={() => dispatch(unsetAllSelectedItems())}
            >
                Unselect all
            </button>
            <button
                className={
                    isDark
                        ? `${styles.detailed_items_controls__button} ${styles.dark}`
                        : `${styles.detailed_items_controls__button} ${styles.light}`
                }
                {...csvReport}
            >
                Download csv
            </button>
        </div>
    );
}
