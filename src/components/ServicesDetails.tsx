import React from 'react';
import CommonHero from './shared/hero/CommonHero';
import affilateImg from "@/assets/others/Rectangle 34624198.png";

const ServicesDetails = () => {
    return (
        <div className='container section-gap'>
            <CommonHero
                direction="left"
                description="Our video software is HIPAA-compliant and easy to use. You don't need to download an app or purchase a program. You will receive a link by email or text and all you do and copy and paste it into your web browser. Virtual and online counseling offers all the benefits of traditional office setting in the privacy of your own home. Virtual Online Counseling Appointments Are Available To Colorado Residents. I am committed to continuing to help our community through virtual online counseling. I understand that some people simply prefer the privacy of their home. For others, their geographic location restricts their access to qualified providers."
                imageAlt="Virtual Therapy"
                imageSrc={affilateImg.src}
                title="Virtual Therapy"
                buttonText='Learn More'
                buttonLink='/our-services/virtual-therapy'
                additionalDescription='Ongoing studies consistently demonstrate positive clinical outcomes, indicating the efficacy of EMDR therapy in treating various disorders, including anxiety, depression, obsessive-compulsive disorder (OCD), chronic pain, addictions, and other distressing life experiences. EMDR is NOT for everyone. It is best used for single trauma event but its efficacy is questionable for multiple events or for childhood trauma.
The impact of EMDR therapy reaches far and wide. Since 2016, more than 7 million individuals have successfully undergone treatment using EMDR therapy, guided by a network of over 110,000 therapists across 130 countries. These statistics highlight the widespread adoption and recognition of EMDR therapy as a trusted and effective approach in the field of trauma treatment.
EMDR therapy’s evidence-based foundation and its ability to bring relief and healing to countless individuals make it a valuable tool in the realm of mental health and trauma recovery.'
            />
        </div>
    );
};

export default ServicesDetails;