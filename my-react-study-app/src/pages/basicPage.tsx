import { useAppSelector } from '@/shared/store/store';
import Header from '../widgets/header/header';
import ErrorSection from '../widgets/errorSection/errorSection';
import ErrorBoundary from '../widgets/errorBoundary/errorBoundary';
import ItemsSection from '../widgets/itemsSection/itemsSection';
import StartSection from '../widgets/startSection/startSection';

export default function BasicPage() {
    // console.log('rerender basic page');
    const { section, error } = useAppSelector((state) => state.itemsReducer);
    return (
        <ErrorBoundary>
            <Header />
            {error === true ? <ErrorSection /> : section === '' ? <StartSection /> : <ItemsSection />}
        </ErrorBoundary>
    );
}
