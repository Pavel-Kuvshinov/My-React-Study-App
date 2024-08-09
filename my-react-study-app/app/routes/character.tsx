import Header from '@/widgets/header/header';
import { LoaderFunctionArgs } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';

export const loader = async ({ request }: LoaderFunctionArgs) => {
    const url = new URL(request.url);
    const results = url.pathname;
    console.log(url);
    return results;
};

export default function Character() {
    const data = useLoaderData() as string;
    console.log(data.includes('character'));
    return (
        <>
            <Header />
            <p>Character</p>
        </>
    );
}
