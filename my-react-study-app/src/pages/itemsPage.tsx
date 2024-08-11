import { ItemsSectionProps } from '@/shared/types';
import Header from '@/widgets/header/header';
import ItemsSection from '@/widgets/itemsSection/itemsSection';

export default function ItemsPage(props: ItemsSectionProps) {
    const { data, idItem, dataItem } = props;
    return (
        <>
            <Header />
            <ItemsSection data={data} idItem={idItem} dataItem={dataItem} />
        </>
    );
}
