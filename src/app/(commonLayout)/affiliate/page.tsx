import AffiliatePage from '@/components/Affiliate';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Affiliate',
}




const page = () => {
    return <AffiliatePage />
};

export default page;