/* eslint-disable @typescript-eslint/no-explicit-any */
import ProfilePage from '@/feature/profile/userProfile/profilePage';
import React from 'react';

const page = async({ params }: { params:any }) => {
    const {id} = await params;
    return (
        <div>
            <ProfilePage id={id} />
        </div>
    );
};



export default page;