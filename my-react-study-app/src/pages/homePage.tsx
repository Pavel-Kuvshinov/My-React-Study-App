'use client';

import React from 'react';
import Header from '../widgets/header/header';
import { makeStore, store, wrapper } from '../shared/store/store';
import ItemsSection from '../widgets/itemsSection/itemsSection';
import StartSection from '../widgets/startSection/startSection';
import { ApiRequest, ElementRequest } from '../shared/types';
import { itemsApi } from '../shared/api/itemsApi';
import { GetServerSideProps } from 'next';
import { Provider } from 'react-redux';
import { ThemeProvider } from '../shared/context/themeMode';

export interface MainPageProps {
    itemsData: ApiRequest;
    section: string | undefined;
    id: number | undefined;
    itemData: ElementRequest;
}

export default function HomePage({ itemsData, section, id, itemData }: MainPageProps): JSX.Element {
    console.log('section');
    console.log(section);
    console.log('itemsData');
    console.log(itemsData);

    return (
        <Provider store={store}>
            <ThemeProvider>
                <Header section={section as string} />
                {section === '' || section === undefined ? (
                    <StartSection />
                ) : (
                    <ItemsSection
                        data={itemsData}
                        section={section as string}
                        idItem={id as number}
                        dataItem={itemData}
                    />
                )}
            </ThemeProvider>
        </Provider>
    );
}

/*  */
