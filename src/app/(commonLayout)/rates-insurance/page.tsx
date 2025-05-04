import RatesNInsurance from '@/components/RatesNInsurance';
import { Metadata } from 'next';
import React from 'react';


export const metadata: Metadata = {
    title: 'Rates And Insurance',
}

const page = () => {
    return <RatesNInsurance />
};

export default page;