import React from 'react';
import WhyChooseUs from './WhyChooseUs';
import NewHeader from './shared/newHeader/NewHeader';
import Image from 'next/image';
import img1 from "@/assets/insurance/carelon.png"
import img2 from "@/assets/insurance/aetna.png"
import img3 from "@/assets/insurance/anthem1.png"
import img4 from "@/assets/insurance/kaiser-1.png"
import img5 from "@/assets/insurance/colorado.png"
import img6 from "@/assets/insurance/medicaid.png"


const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Rates & Insurance", href: "/rates-insurance" },
];



const RatesNInsurance = () => {
    return (
        <div className='container section-gap'>
            <NewHeader breadcrumbs={breadcrumbs} title='Rates & Insurance' />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 mb-20 items-center justify-center gap-4">
                <Image src={img1} alt="" width={400} height={500} className="w-[200px] sm:w-[250px] md:w-[300px] lg:w-[400px] h-auto mx-auto"></Image>
                <Image src={img2} alt="" width={400} height={500} className="w-[200px] sm:w-[250px] md:w-[300px] lg:w-[400px] h-auto mx-auto"></Image>
                <Image src={img3} alt="" width={400} height={500} className="w-[200px] sm:w-[250px] md:w-[300px] lg:w-[400px] h-auto mx-auto"></Image>
                <Image src={img4} alt="" width={400} height={500} className="w-[200px] sm:w-[250px] md:w-[300px] lg:w-[400px] h-auto mx-auto"></Image>
                <Image src={img5} alt="" width={400} height={500} className="w-[200px] sm:w-[250px] md:w-[300px] lg:w-[400px] h-auto mx-auto"></Image>
                <Image src={img6} alt="" width={400} height={500} className="w-[200px] sm:w-[250px] md:w-[300px] lg:w-[400px] h-auto mx-auto"></Image>
            </div>
            <div className='space-y-4'>
                <p className='lg:text-2xl  md:text-xl'>We strongly encourage you to bring a copy of your insurance card so that we may perform a complimentary benefits check.</p>
                <h1 className="text-4xl md:text-5xl font-bold text-black font-outfit">Self-Pay</h1>
                <p>Our self pay fees for a standard 50 minute session ranges from $120 – $150.00. All transactions are kept confidential and private. We have a 24 hour cancellation policy. Most clients come in 1 time per week though if circumstances warrant, we see clients 2-3 times weekly or bi-monthly, and also do one-time consultations. We also offer video sessions or telehealth through Theranest portal, which is HIPAA compliant.
                    We provide superbills to help clients submit to their insurance plan for partial reimbursement, as out of network provider service. Superbills have all of the information your insurance requires for out of network reimbursement.
                    Counseling services may be covered in full or in part by your health insurance depending on your individual benefit plan.
                    If you are interested in Psychedelic Assisted Therapy your insurance plan would pay for the therapy portion of treatment. Any treatment that includes psychedelic medicine is not covered by your insurance plan. Ketamine, although legal, has not been approved by the FDA, therefore insurance companies will not cover medicine assisted therapies.</p>
            </div>
            <div className='section-gap space-y-4'>
                <h1 className="text-4xl md:text-5xl font-bold text-black font-outfit">Privacy</h1>
                <p>Our self pay fees for a standard 50 minute session ranges from $120 – $150.00. All transactions are kept confidential and private. We have a 24 hour cancellation policy. Most clients come in 1 time per week though if circumstances warrant, we see clients 2-3 times weekly or bi-monthly, and also do one-time consultations. We also offer video sessions or telehealth through Theranest portal, which is HIPAA compliant.
                    We provide superbills to help clients submit to their insurance plan for partial reimbursement, as out of network provider service. Superbills have all of the information your insurance requires for out of network reimbursement.
                    Counseling services may be covered in full or in part by your health insurance depending on your individual benefit plan.
                    If you are interested in Psychedelic Assisted Therapy your insurance plan would pay for the therapy portion of treatment. Any treatment that includes psychedelic medicine is not covered by your insurance plan. Ketamine, although legal, has not been approved by the FDA, therefore insurance companies will not cover medicine assisted therapies.</p>
                <ul className='space-y-2'>
                    <li className='flex items-center gap-1'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                            <path d="M8.0197 18.2942C11.7693 18.2942 14.8089 15.2545 14.8089 11.5049C14.8089 7.75534 11.7693 4.7157 8.0197 4.7157C4.27011 4.7157 1.23047 7.75534 1.23047 11.5049C1.23047 15.2545 4.27011 18.2942 8.0197 18.2942Z" fill="#327DEA" />
                            <path d="M8.09597 16.7534L8.00986 16.6066C6.69447 14.3655 3.19901 9.60941 3.1637 9.56164L3.11328 9.49314L4.30417 8.31622L8.07386 10.9485C10.4474 7.86852 12.6617 5.75306 14.1061 4.51772C15.6861 3.16637 16.7146 2.54425 16.725 2.53829L16.7484 2.52429H18.7684L18.5755 2.69614C13.6128 7.11637 8.23382 16.5111 8.18024 16.6055L8.09597 16.7534Z" fill="white" />
                        </svg>
                        <span>How low will my costs for therapy be?</span>
                    </li>
                    <li className='flex items-center gap-1'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                            <path d="M8.0197 18.2942C11.7693 18.2942 14.8089 15.2545 14.8089 11.5049C14.8089 7.75534 11.7693 4.7157 8.0197 4.7157C4.27011 4.7157 1.23047 7.75534 1.23047 11.5049C1.23047 15.2545 4.27011 18.2942 8.0197 18.2942Z" fill="#327DEA" />
                            <path d="M8.09597 16.7534L8.00986 16.6066C6.69447 14.3655 3.19901 9.60941 3.1637 9.56164L3.11328 9.49314L4.30417 8.31622L8.07386 10.9485C10.4474 7.86852 12.6617 5.75306 14.1061 4.51772C15.6861 3.16637 16.7146 2.54425 16.725 2.53829L16.7484 2.52429H18.7684L18.5755 2.69614C13.6128 7.11637 8.23382 16.5111 8.18024 16.6055L8.09597 16.7534Z" fill="white" />
                        </svg>
                        <span>Does my health insurance plan include mental health benefits?</span>
                    </li>
                    <li className='flex items-center gap-1'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                            <path d="M8.0197 18.2942C11.7693 18.2942 14.8089 15.2545 14.8089 11.5049C14.8089 7.75534 11.7693 4.7157 8.0197 4.7157C4.27011 4.7157 1.23047 7.75534 1.23047 11.5049C1.23047 15.2545 4.27011 18.2942 8.0197 18.2942Z" fill="#327DEA" />
                            <path d="M8.09597 16.7534L8.00986 16.6066C6.69447 14.3655 3.19901 9.60941 3.1637 9.56164L3.11328 9.49314L4.30417 8.31622L8.07386 10.9485C10.4474 7.86852 12.6617 5.75306 14.1061 4.51772C15.6861 3.16637 16.7146 2.54425 16.725 2.53829L16.7484 2.52429H18.7684L18.5755 2.69614C13.6128 7.11637 8.23382 16.5111 8.18024 16.6055L8.09597 16.7534Z" fill="white" />
                        </svg>
                        <span>Do I have a deductible? If so, what is it and have I met it yet?</span>
                    </li>
                    <li className='flex items-center gap-1'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                            <path d="M8.0197 18.2942C11.7693 18.2942 14.8089 15.2545 14.8089 11.5049C14.8089 7.75534 11.7693 4.7157 8.0197 4.7157C4.27011 4.7157 1.23047 7.75534 1.23047 11.5049C1.23047 15.2545 4.27011 18.2942 8.0197 18.2942Z" fill="#327DEA" />
                            <path d="M8.09597 16.7534L8.00986 16.6066C6.69447 14.3655 3.19901 9.60941 3.1637 9.56164L3.11328 9.49314L4.30417 8.31622L8.07386 10.9485C10.4474 7.86852 12.6617 5.75306 14.1061 4.51772C15.6861 3.16637 16.7146 2.54425 16.725 2.53829L16.7484 2.52429H18.7684L18.5755 2.69614C13.6128 7.11637 8.23382 16.5111 8.18024 16.6055L8.09597 16.7534Z" fill="white" />
                        </svg>
                        <span>Does my plan limit how many sessions per calendar year I can have? If so, what is the limit?</span>
                    </li>
                    <li className='flex items-center gap-1'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                            <path d="M8.0197 18.2942C11.7693 18.2942 14.8089 15.2545 14.8089 11.5049C14.8089 7.75534 11.7693 4.7157 8.0197 4.7157C4.27011 4.7157 1.23047 7.75534 1.23047 11.5049C1.23047 15.2545 4.27011 18.2942 8.0197 18.2942Z" fill="#327DEA" />
                            <path d="M8.09597 16.7534L8.00986 16.6066C6.69447 14.3655 3.19901 9.60941 3.1637 9.56164L3.11328 9.49314L4.30417 8.31622L8.07386 10.9485C10.4474 7.86852 12.6617 5.75306 14.1061 4.51772C15.6861 3.16637 16.7146 2.54425 16.725 2.53829L16.7484 2.52429H18.7684L18.5755 2.69614C13.6128 7.11637 8.23382 16.5111 8.18024 16.6055L8.09597 16.7534Z" fill="white" />
                        </svg>
                        <span>My provider will be billing my sessions under code 90837, what will each session cost me?</span>
                    </li>
                </ul>
                <p>
                    Individual treatment of Trauma using the Psychedelic Somatic Interactional Model is $200 per hour, for a minimum of 3 hours.
                    Medicine assisted sessions are not covered by insurance companies and the current fee is $200 per hour. If you are interested in medicine assisted therapy, your insurance will cover the therapy part of treatment, not the medicine sessions.
                </p>
            </div>
            <div className='max-w-5xl mx-auto'>
                <h1 className="text-4xl md:text-5xl font-bold text-black font-outfit text-center mb-10">Accepted Insurance Plans</h1>
                <div className='grid lg:grid-cols-2 grid-cols-1 items-start'>
                    <div>
                        <ul className='space-y-2'>
                            <li className='text-lg font-bold'>
                                We currently accept insurance from:
                            </li>
                            <li className='flex items-center gap-1'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
                                    <path d="M8.5197 18.3851C12.2693 18.3851 15.3089 15.3455 15.3089 11.5959C15.3089 7.84628 12.2693 4.80664 8.5197 4.80664C4.77011 4.80664 1.73047 7.84628 1.73047 11.5959C1.73047 15.3455 4.77011 18.3851 8.5197 18.3851Z" fill="#5FA380" />
                                    <path d="M8.59597 16.8443L8.50986 16.6976C7.19447 14.4564 3.69901 9.70035 3.6637 9.65258L3.61328 9.58408L4.80417 8.40716L8.57386 11.0394C10.9474 7.95947 13.1617 5.844 14.6061 4.60866C16.1861 3.25731 17.2146 2.6352 17.225 2.62923L17.2484 2.61523H19.2684L19.0755 2.78708C14.1128 7.20731 8.73382 16.6021 8.68024 16.6965L8.59597 16.8443Z" fill="white" />
                                </svg>
                                <span>Kaiser Permanente®</span>
                            </li>
                            <li className='flex items-center gap-1'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
                                    <path d="M8.5197 18.3851C12.2693 18.3851 15.3089 15.3455 15.3089 11.5959C15.3089 7.84628 12.2693 4.80664 8.5197 4.80664C4.77011 4.80664 1.73047 7.84628 1.73047 11.5959C1.73047 15.3455 4.77011 18.3851 8.5197 18.3851Z" fill="#5FA380" />
                                    <path d="M8.59597 16.8443L8.50986 16.6976C7.19447 14.4564 3.69901 9.70035 3.6637 9.65258L3.61328 9.58408L4.80417 8.40716L8.57386 11.0394C10.9474 7.95947 13.1617 5.844 14.6061 4.60866C16.1861 3.25731 17.2146 2.6352 17.225 2.62923L17.2484 2.61523H19.2684L19.0755 2.78708C14.1128 7.20731 8.73382 16.6021 8.68024 16.6965L8.59597 16.8443Z" fill="white" />
                                </svg>
                                <span>Medicaid</span>
                            </li>
                            <li className='flex items-center gap-1'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
                                    <path d="M8.5197 18.3851C12.2693 18.3851 15.3089 15.3455 15.3089 11.5959C15.3089 7.84628 12.2693 4.80664 8.5197 4.80664C4.77011 4.80664 1.73047 7.84628 1.73047 11.5959C1.73047 15.3455 4.77011 18.3851 8.5197 18.3851Z" fill="#5FA380" />
                                    <path d="M8.59597 16.8443L8.50986 16.6976C7.19447 14.4564 3.69901 9.70035 3.6637 9.65258L3.61328 9.58408L4.80417 8.40716L8.57386 11.0394C10.9474 7.95947 13.1617 5.844 14.6061 4.60866C16.1861 3.25731 17.2146 2.6352 17.225 2.62923L17.2484 2.61523H19.2684L19.0755 2.78708C14.1128 7.20731 8.73382 16.6021 8.68024 16.6965L8.59597 16.8443Z" fill="white" />
                                </svg>
                                <span>Colorado Access</span>
                            </li>
                            <li className='flex items-center gap-1'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
                                    <path d="M8.5197 18.3851C12.2693 18.3851 15.3089 15.3455 15.3089 11.5959C15.3089 7.84628 12.2693 4.80664 8.5197 4.80664C4.77011 4.80664 1.73047 7.84628 1.73047 11.5959C1.73047 15.3455 4.77011 18.3851 8.5197 18.3851Z" fill="#5FA380" />
                                    <path d="M8.59597 16.8443L8.50986 16.6976C7.19447 14.4564 3.69901 9.70035 3.6637 9.65258L3.61328 9.58408L4.80417 8.40716L8.57386 11.0394C10.9474 7.95947 13.1617 5.844 14.6061 4.60866C16.1861 3.25731 17.2146 2.6352 17.225 2.62923L17.2484 2.61523H19.2684L19.0755 2.78708C14.1128 7.20731 8.73382 16.6021 8.68024 16.6965L8.59597 16.8443Z" fill="white" />
                                </svg>
                                <span>Aetna®</span>
                            </li>
                            <li className='flex items-center gap-1'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
                                    <path d="M8.5197 18.3851C12.2693 18.3851 15.3089 15.3455 15.3089 11.5959C15.3089 7.84628 12.2693 4.80664 8.5197 4.80664C4.77011 4.80664 1.73047 7.84628 1.73047 11.5959C1.73047 15.3455 4.77011 18.3851 8.5197 18.3851Z" fill="#5FA380" />
                                    <path d="M8.59597 16.8443L8.50986 16.6976C7.19447 14.4564 3.69901 9.70035 3.6637 9.65258L3.61328 9.58408L4.80417 8.40716L8.57386 11.0394C10.9474 7.95947 13.1617 5.844 14.6061 4.60866C16.1861 3.25731 17.2146 2.6352 17.225 2.62923L17.2484 2.61523H19.2684L19.0755 2.78708C14.1128 7.20731 8.73382 16.6021 8.68024 16.6965L8.59597 16.8443Z" fill="white" />
                                </svg>
                                <span>Anthem BCBS®</span>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 mb-20 items-center justify-center gap-4">
                            <Image src={img1} alt="" width={400} height={500} className="w-[100px] sm:w-[100px] md:w-[150px] lg:w-[200px] h-auto mx-auto"></Image>
                            <Image src={img2} alt="" width={400} height={500} className="w-[100px] sm:w-[100px] md:w-[150px] lg:w-[200px] h-auto mx-auto"></Image>
                            <Image src={img3} alt="" width={400} height={500} className="w-[100px] sm:w-[100px] md:w-[150px] lg:w-[200px] h-auto mx-auto"></Image>
                            <Image src={img4} alt="" width={400} height={500} className="w-[100px] sm:w-[100px] md:w-[150px] lg:w-[200px] h-auto mx-auto"></Image>
                            <Image src={img5} alt="" width={400} height={500} className="w-[100px] sm:w-[100px] md:w-[150px] lg:w-[200px] h-auto mx-auto"></Image>
                            <Image src={img6} alt="" width={400} height={500} className="w-[100px] sm:w-[100px] md:w-[150px] lg:w-[200px] h-auto mx-auto"></Image>
                        </div>
                    </div>
                </div>
            </div>
            <WhyChooseUs />
        </div>
    );
};

export default RatesNInsurance;