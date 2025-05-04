import NewHeader from '@/components/shared/newHeader/NewHeader';
import AllBlogs from '@/feature/blogs/AllBlogs';


import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Blogs',
}



const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Blog", href: "/blog" },
]


const page = () => {
    return (
        <div className='container section-gap'>
            <NewHeader breadcrumbs={breadcrumbs} title='Blog' />
            <AllBlogs />
        </div>
    );
};

export default page;