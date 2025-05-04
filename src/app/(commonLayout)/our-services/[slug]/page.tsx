import ServicesDetails from '@/components/ServicesDetails';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Dynamic Services',
}


const page = () => {
    return <ServicesDetails />
};

export default page;