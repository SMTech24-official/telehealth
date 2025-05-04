import OurServicesPage from '@/components/OurServices';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Our Services',
}



const page = () => {
    return <OurServicesPage />
};

export default page;